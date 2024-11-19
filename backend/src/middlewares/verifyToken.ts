import jwt, { JwtPayload } from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    res
      .status(401)
      .json({ title: "User Not Found", message: "Content Unavailable" });
    return;
  }

  const {payload, error} = jwt.verify(
    authHeader,
    process.env.ACCESS_TOKEN_SECRET!
  ) as JwtPayload;

  if (error) {
    // need a reauth by checking refresh token if still valid, if so make a new access token.
  }

  next();
};

export default verifyToken;
