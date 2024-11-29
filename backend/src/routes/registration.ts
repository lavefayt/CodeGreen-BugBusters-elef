import express, { Request, Response, NextFunction } from "express";
import { pool } from ".."; // Assuming Neon database pool is imported correctly

const router = express.Router();

// Interface for registration data
interface Registration {
  user_id: string;
  license_number: string;
  school_email: string;
}

// The asyncHandler function for catching errors in async routes
const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req, res, next)).catch(next); // Ensure the promise is returned
  };

// GET route to fetch all registrations
router.get("/get", async (_req: Request, res: Response) => {
  try {
    console.log("Fetching registration from the database...");
    const { rows: registrations } = await pool.query(
      "SELECT user_id, license_number, school_email FROM registrations"
    );
    console.log("Registrations fetched successfully:", registrations);

    res.json(registrations); // Send the registration list as a response
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error("Error fetching registration list:", errorMessage);
    res.status(500).json({ title: "Unknown Error", message: errorMessage });
  }
});

// POST route to create a new registration
router.post("/add", async (req: Request, res: Response) => {
  try {
    // Extract data from the request body
    const { license_number, school_email } = req.body as Registration;

    const userId = req.user;

    await pool.query(
      `
      INSERT INTO registrations (user_id, license_number, school_email) 
      VALUES ($1, $2, $3)
      `,
      [userId, license_number, school_email]
    );

    res.status(201).json({
      title: "Success",
      message: "Registration created successfully.",
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error occurred:", error.message);
      res.status(500).json({ title: "Server Error", message: error.message });
    } else {
      console.error("Unexpected error occurred:", error);
      res.status(500).json({
        title: "Server Error",
        message: "An unexpected error occurred.",
      });
    }
  }
});

router.post(
  "/approve",
  asyncHandler(
    async (req: Request<{}, {}, { license_number: string }>, res: Response) => {
      const { license_number } = req.body;

      if (!license_number) {
        return res.status(400).json({
          title: "Validation Error",
          message: "License number is required.",
        });
      }

      const { rows: registrations } = await pool.query(
        // Fetch based on license number
        `SELECT school_email, user_id FROM registrations WHERE license_number = $1`,
        [license_number]
      );

      if (registrations.length === 0) {
        return res.status(404).json({
          title: "Not Found",
          message: "Registration with the specified license number not found.",
        });
      }

      const registration = registrations[0];
      const { school_email, user_id } = registration;

      const { rows: existingDrivers } = await pool.query(
        // Check if license exists in the driver table
        `SELECT id, email FROM drivers WHERE license_number = $1`,
        [license_number]
      );

      if (existingDrivers.length > 0) {
        const existingDriver = existingDrivers[0];

        // Only update the email if it's NULL or an empty string
        if (existingDriver.email === "") {
          await pool.query(
            `UPDATE drivers 
         SET email = $1, user_id = $2 
         WHERE license_number = $3`,
            [school_email, user_id, license_number]
          );

          return res.status(200).json({
            title: "Driver Updated!",
            message: `Driver's email and user_id have been updated successfully.`,
          });
        }

        if (existingDriver.email) {
          await pool.query(
            `UPDATE drivers 
         SET user_id = $1 
         WHERE license_number = $2`,
            [user_id, license_number]
          );
          return res.status(200).json({
            title: "Driver Updated!",
            message: `Driver's user_id have been updated successfully.`,
          });
        } else {
          return res.status(200).json({
            title: "No Update Needed",
            message: `Driver already has an email. No changes were made.`,
          });
        }
      } else {
        return res.status(404).json({
          title: "License Number Not Found",
          message: "No driver found with the provided license number.",
        });
      }
    }
  )
);

export default router;
