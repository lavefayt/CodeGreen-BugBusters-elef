import express, { Request as Req, Response } from "express";
import { pool } from ".."; // Ensure this is the correct import for your Neon pool

const router = express.Router(); // Use Router instead of express()

router.get("/DriversList", async (req: Req, res: Response) => {
  try {
    console.log("Fetching drivers from the database...");
    const { rows: drivers } = await pool.query(
      "SELECT first_name, last_name, middle_name, email, sex, driver_type, license_number, license_expiration_date FROM drivers"
    );
    console.log("Drivers fetched successfully:", drivers);

    // Send the drivers list as a response
    res.json(drivers);
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error("Error fetching drivers:", errorMessage); // Log the error for debugging
    res.status(500).json({ title: "Unknown Error", message: errorMessage });
  }
});

export default router;
