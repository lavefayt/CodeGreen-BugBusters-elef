import express, { Request, Response, NextFunction } from "express";
import { pool } from "..";

const router = express.Router();

// GET route to fetch user info of the logged-in user
router.get("/get", async (req: Request, res: Response) => {
  try {
    console.log(req.user);
    console.log("Fetching user from the database...");
    const { rows: users } = await pool.query(
      "SELECT id, first_name, last_name FROM users WHERE id = $1",
      [req.user]
    );
    console.log("User fetched successfully:", users);

    res.json(users); // Send the user data as a response
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error("Error fetching the user:", errorMessage);
    res.status(500).json({ title: "Unknown Error", message: errorMessage });
  }
});

export default router;
