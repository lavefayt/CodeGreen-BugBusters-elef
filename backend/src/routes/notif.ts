import express, { Request as Req, Response } from "express";
import validateAuth from "../middlewares/validateAuth";
import { pool } from "..";
import bcrypt from "bcrypt";
import { generateAccessToken, generateRefreshToken } from "../utils/tokenGen";
import { RegisterUser, User } from "../types/datatypes";
import jwt, { JwtPayload } from "jsonwebtoken";

const router = express();

router.get("/list/:userId", validateAuth, async (req: Req, res: Response) => {
    try {
        const userId = req.params.userId;
        
        //fetch notif with sorting and paging
        const notifications = await pool.query(
            `SELECT * FROM notifications
            WHERE user_id = $1
            ORDER BY created_at DESC
            LIMIT 50`,
            [userId]
        );

        res.status(200).json({
            title: "Notifications",
            data: notifications.rows
        });

    } catch (error) {
        console.error("Notifications error", error);
        res.status(500).json({
            title: "Server Error",
            message: "An unexpected error occured fetching notifcations"
        });
    }
});

export default router;
    


