import express, { Request, Response } from "express";
import validateAuth from "../middlewares/validateAuth";
import { pool } from "..";
import bcrypt from "bcrypt";

const router = express();

// router.get("/testing", async (req: Request, res: Response) => {
//   try {
//     const { rows } = await pool.query("SELECT * FROM users");
//     res.send(rows[0]);
//   } catch (error) {
//     res.send({ field: "Error", message: error });
//   }
// });

router.post("/register", validateAuth, async (req: Request, res: Response) => {
  try {
    const { first_name, last_name, email, password, confirm_password } =
      req.body;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length !== 0) {
      res.sendStatus(409).json({
        title: "Email Exists",
        message:
          "This email is already being used. Please use a different one.",
      });
    } else if (password !== confirm_password) {
      res.sendStatus(409).json({
        title: "Password and Confirm Password does not match.",
        message:
          "Please input the passwords again while making sure they are the same.",
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt)
      const user = await pool.query(
        "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
        [first_name, last_name, email, hashedPassword]
      );
    }
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
});

export default router;
