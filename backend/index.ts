import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Pool, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import authRoutes from "./routes/auth";
import { User } from "./types/datatypes";

dotenv.config({ path: ".env" });

const server = express();
neonConfig.webSocketConstructor = ws;
export const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Middlewares
server.use(express.json());
server.use(cors());

// Routes
server.use("/auth", authRoutes);

// server.get("/testing", async (req: Request, res: Response) => {
//   try {
//     const { rows } = await pool.query("SELECT * FROM users");
//     res.send(rows[0]);
//   } catch (error) {
//     res.send({ field: "Error", message: error });
//   }
// });

// server.post("/testing", async (req: Request, res: Response) => {
//   console.log(req.body);
//   res.sendStatus(200);
// });

const PORT = 4444;

server.listen(PORT, () => {
  console.log(
    `The Server for CodeGreen has Started at http://localhost:${PORT}`
  );
});
