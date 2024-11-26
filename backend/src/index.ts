import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import authRoutes from "./routes/auth";
import { User } from "./types/datatypes";
import verifyToken from "./middlewares/verifyToken";
import cookieParser from "cookie-parser";
import allowedOrigins from "./config/allowedOrigins";
import { credentials } from "./middlewares/credentials";

dotenv.config({ path: ".env" });

const server = express();

// Middlewares
server.use(express.json());

// This allows us to fetch from the FRONTEND
server.use(credentials);
server.use(
  cors({
    origin: (origin, callback) => {
      if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error("Not Allowed By CORS"));
      }
    },
    optionsSuccessStatus: 200,
  })
);

// For Cookies
server.use(cookieParser());

// For Database
neonConfig.webSocketConstructor = ws;
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Routes
server.use("/auth", authRoutes);

// For Verifying Auth
server.use(verifyToken);

// For PORT
const PORT = 4444;

// 
server.listen(PORT, () => {
  console.log(
    `The Server for CodeGreen has Started at http://localhost:${PORT}`
  );
});
