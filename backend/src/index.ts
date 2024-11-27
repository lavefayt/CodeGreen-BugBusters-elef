import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import authRoutes from "./routes/auth";
import driversRouter from "./routes/getDriver";
import { User } from "./types/datatypes";
import verifyToken from "./middlewares/verifyToken";
import cookieParser from "cookie-parser";
import allowedOrigins from "./config/allowedOrigins";
import { credentials } from "./middlewares/credentials";
import addDriver from "./routes/driver";

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
server.use("/api", driversRouter); // Ensure this is before the verifyToken middleware
server.use("/driver", addDriver);


// For Verifying Auth
server.use(verifyToken);


// APIs for Functionality (Must Be Placed Under Verification of Auth)
server.get("/testing", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ title: "Testing Complete", message: "WOWZIES" });
    // console.log(req.headers["authorization"]);
  } catch (error) {
    res.sendStatus(500);
  }
});

// For PORT
const PORT = 4444;

server.listen(PORT, () => {
  console.log(
    `The Server for CodeGreen has Started at http://localhost:${PORT}`
  );
});
