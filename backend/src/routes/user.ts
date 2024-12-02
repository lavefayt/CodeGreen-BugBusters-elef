import express, { Request, Response, NextFunction } from "express";
import { pool } from "..";

const router = express.Router();

// GET route to fetch user info of the logged-in user
router.get("/get", async (req: Request, res: Response) => {
  try {
    const userId = req.user;

    console.log(req.user);
    console.log("Fetching user from the database...");
    const { rows: users } = await pool.query(
      "SELECT id, first_name, last_name FROM users WHERE id = $1",
      [userId]
    );
    console.log("User fetched successfully:", users);

    const { rows: registrations } = await pool.query(
      "SELECT * FROM registrations WHERE user_id = $1",
      [userId]
    );

    const { rows: drivers } = await pool.query(
      "SELECT * FROM drivers WHERE user_id = $1",
      [userId]
    );

    res.status(200).json({
      user: users[0],
      hasRegistered: registrations[0] ? true : false,
      isDriver: drivers[0] ? true : false,
    }); // Send the user data as a response
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error("Error fetching the user:", errorMessage);
    res.status(500).json({ title: "Unknown Error", message: errorMessage });
  }
});

export default router;
