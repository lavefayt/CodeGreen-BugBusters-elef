import express, { Request, Response } from "express";
import validateAuth from "../middlewares/validateAuth";
import { pool } from "..";
import bcrypt from "bcrypt";
import generateToken from "../utils/tokenGen";
import { User } from "../types/datatypes";

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
      await req.body;

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
      const salt = await bcrypt.genSalt(11);
      const hashedPassword = await bcrypt.hash(password, salt);
      const user = await pool.query(
        "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
        [first_name, last_name, email, hashedPassword]
      );
    }
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
});

router.post("/login", validateAuth, async (req: Request, res: Response) => {
  try {
    const { email, password } = await req.body;

    const { rows: users } = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    const user = users[0] as User;

    if (!user || password !== user.password) {
      res.sendStatus(401).json({
        title: "Wrong Email or Password",
        message: "The credentials entered are invalid.",
      });
      return;
    }

    const token = generateToken(user.id);
    res.sendStatus(200).json({ token: token });
    console.log(token);
    
  } catch (error) {
    res.sendStatus(500).json({ title: "Error Found", message: error });
  }
});

export default router;
