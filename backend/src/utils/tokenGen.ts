import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET!, {
    expiresIn: "15s",
  });
};

export const generateAccessToken = (userId: string) => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET!, {
    expiresIn: "10s",
  });
};
