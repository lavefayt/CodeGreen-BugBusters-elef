import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import authRoutes from "./routes/auth";
import verifyToken from "./middlewares/verifyToken";
import cookieParser from "cookie-parser";
import allowedOrigins from "./config/allowedOrigins";
import { credentials } from "./middlewares/credentials";
import driverRoutes from "./routes/driver";
import user from "./routes/user";

import notifRoutes from "./routes/notif";
import registrations from "./routes/registration";
import carRoutes from "./routes/cars";
import violationRoutes from "./routes/violation";
import violatorRoutes from "./routes/violators";
import profileRoutes from "./routes/profile";

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
server.use("/notif", notifRoutes);
server.use("/violation", violationRoutes);
server.use("/violator", violatorRoutes);

// APIs for Functionality (Must Be Placed Under Verification of Auth)
server.use(verifyToken);
server.use("/driver", driverRoutes); // "/driver/get || /driver/add"
server.use("/registration", registrations);
server.use("/user", user);
server.use("/car", carRoutes);
server.use("/profile", profileRoutes);

// server.get("/testing", async (req: Request, res: Response) => {
//   try {
//     res.status(200).json({ title: "Testing Complete", message: "WOWZIES" });
//   } catch (error) {
//     res.sendStatus(500);
//   }
// });

// For PORT
const PORT = Number(process.env.PORT) || 4444;

server.listen(PORT, "0.0.0.0", () => {
  console.log(
    `The Server for CodeGreen has Started at http://localhost:${PORT}`
  );
});
