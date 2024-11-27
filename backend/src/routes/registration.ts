import express, { Request as Req, Response } from "express";
import { pool } from ".."; // Ensure this is the correct import for your Neon pool

const router = express.Router(); // Use Router for modular route handling

// Interface for registration data
interface Registration {
  user_id: string;
  license_number: string;
  school_email: string;
}

// GET route to fetch all registrations
router.get("/get", async (req: Req, res: Response) => {
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
router.post("/add", async (req: Req, res: Response) => {
  try {
    // Extract data from the request body
    const { user_id, license_number, school_email } = req.body as Registration;

    // Insert new registration into the database
    await pool.query(
      `
      INSERT INTO registrations (user_id, license_number, school_email) 
      VALUES ($1, $2, $3)
      `,
      [user_id, license_number, school_email]
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

export default router;
