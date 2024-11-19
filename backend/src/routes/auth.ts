import express, { Request as Req, Response } from "express";
import validateAuth from "../middlewares/validateAuth";
import { pool } from "..";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/tokenGen";
import { RegisterUser, User } from "../types/datatypes";

const router = express();

// router.get("/testing", async (req: Request, res: Response) => {
//   try {
//     const { rows } = await pool.query("SELECT * FROM users");
//     res.send(rows[0]);
//   } catch (error) {
//     res.send({ field: "Error", message: error });
//   }
// });

router.post("/register", validateAuth, async (req: Req, res: Response) => {
  try {
    const { first_name, last_name, email, password, confirm_password } =
      req.body as RegisterUser;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rowCount !== 0) {
      res.status(409).json({
        title: "Email Exists",
        message:
          "This email is already being used. Please use a different one.",
      });
      return;
    }
    if (password !== confirm_password) {
      res.status(409).json({
        title: "Password and Confirm Password does not match.",
        message:
          "Please input the passwords again while making sure they are the same.",
      });
      return;
    }
    console.log(first_name);
    console.log(last_name);
    console.log(email);
    console.log(password);
    console.log(confirm_password);
    const salt = (await bcrypt.genSalt(11)) as string;
    const hashedPassword = await bcrypt.hash(password!, salt);
    const user = await pool.query(
      "INSERT INTO users (first_name, last_name, email, password, salt) VALUES ($1, $2, $3, $4, $5)",
      [first_name, last_name, email, hashedPassword, salt]
    );
    console.log(user.rows);
    res.status(200).json({
      title: "Account Created Successfully",
      message: `Welcome to CodeGreen ${first_name} ${last_name}`,
    });
  } catch (error) {
    res.sendStatus(500).json({ message: `${error}` });
  }
});

router.post("/login", validateAuth, async (req: Req, res: Response) => {
  try {
    const { email, password } = await req.body;

    const { rows: users } = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    const user = users[0] as User;

    if (!user) {
      res.status(401).json({
        title: "Wrong Email or Password",
        message: "The credentials entered are invalid.",
      });
      return;
    }

    const salt = user.salt;
    const hashedPassword = await bcrypt.hash(password, salt);

    if (user.password !== hashedPassword) {
      res.status(401).json({
        title: "Wrong Email or Password",
        message: "The credentials entered are invalid.",
      });
      return;
    }

    const refreshToken = generateRefreshToken(user.id);
    const accessToken = generateAccessToken(user.id);
    await pool.query("UPDATE users SET refresh_token = $1 WHERE id = $2", [
      refreshToken,
      user.id,
    ]);
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ accessToken: accessToken });
    console.log(accessToken);
    console.log(refreshToken);
  } catch (error) {
    res.sendStatus(500).json({ title: "Error Found", message: error });
    console.log(error);
  }
});

export default router;
