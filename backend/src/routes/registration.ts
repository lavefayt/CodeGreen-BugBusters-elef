import express, { Request, Response } from "express";
import { pool } from ".."; // Assuming Neon database pool is imported correctly
import { Registration } from "../types/datatypes";

const router = express.Router();

// GET route to fetch all registrations
router.get("/get", async (_req: Request, res: Response) => {
  try {
    console.log("Fetching registration from the database...");
    const { rows: registrations } = await pool.query(
      "SELECT user_id, license_number, school_email, first_name,last_name, date_of_birth, driver_type, sex FROM registrations"
    );
    console.log("Registrations fetched successfully:", registrations);

    res.json(registrations); // Send the registration list as a response
    res.status(200).json({
      title: "Success",
      message: "Registrations fetched successfully.",
      isRegistered: registrations[0] ? true : false,
    });
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
    const user_id = req.user;
    const {
      license_number,
      school_email,
      first_name,
      sex,
      last_name,
      date_of_birth,
      driver_type,
    } = req.body as Registration;

    console.log(user_id);
    await pool.query(
      `
      INSERT INTO registrations (user_id, license_number, school_email, first_name,last_name, date_of_birth, driver_type, sex ) 
      VALUES ($1, $2, $3,$4,$5,$6,$7, $8)
      `,
      [
        user_id,
        license_number,
        school_email,
        first_name,
        last_name,
        sex,
        date_of_birth,
        driver_type,
        sex,
      ]
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
  async (req: Request<{}, {}, { license_number: string }>, res: Response) => {
    const { license_number } = req.body;

    if (!license_number) {
      res.status(400).json({
        title: "Validation Error",
        message: "License number is required.",
      });
      return;
    }

    const { rows: registrations } = await pool.query(
      // Fetch based on license number
      `SELECT school_email, user_id FROM registrations WHERE license_number = $1`,
      [license_number]
    );

    if (registrations.length === 0) {
      res.status(404).json({
        title: "Not Found",
        message: "Registration with the specified license number not found.",
      });
      return;
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

        res.status(200).json({
          title: "Driver Updated!",
          message: `Driver's email and user_id have been updated successfully.`,
        });
        return;
      }

      if (existingDriver.email) {
        await pool.query(
          `UPDATE drivers 
         SET user_id = $1 
         WHERE license_number = $2`,
          [user_id, license_number]
        );
        res.status(200).json({
          title: "Driver Updated!",
          message: `Driver's user_id have been updated successfully.`,
        });
        return;
      } else {
        res.status(200).json({
          title: "No Update Needed",
          message: `Driver already has an email. No changes were made.`,
        });
        return;
      }
    } else {
      res.status(404).json({
        title: "License Number Not Found",
        message: "No driver found with the provided license number.",
      });
      return;
    }
  }
);

export default router;
