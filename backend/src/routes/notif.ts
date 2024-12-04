import express, { Request as Req, Response } from "express";
import { pool } from "..";

const router = express();

// Get all notifications
router.get("/get", async (_req: Req, res: Response) => {
    try {
        const notification = await pool.query('SELECT * FROM notifications');
        res.status(200).json({
            title: "Notifications",
            data: notification.rows
        });
    } catch (error) {
        console.error("ERROR", error);
        res.status(500).json({ title: "Server Error", message: "An unexpected error occurred fetching notifications" });
    }
});

// Get a specific notification by ID
router.get("/get/:id", async (req: Req, res: Response) => {
    const { id } = req.params;
    try {
        const notification = await pool.query('SELECT * FROM notifications WHERE id = $1', [id]);
        if (notification.rows.length === 0) {
            res.status(404).json({ error: 'Notification not found.' });
        } else {
            res.json(notification.rows[0]);
        }
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({ title: "Server Error", message: "An unexpected error occurred while retrieving notifications" });
    }
});

// Create a new notification
router.post("/notifications", async (req: Req, res: Response) => {
    const { user_id, message, sender, date_sent, user_id_user_id } = req.body;
    try {
        const newNotification = await pool.query('INSERT INTO notifications (user_id, message, sender, date_sent, user_id_user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [user_id, message, sender, date_sent, user_id_user_id]);
        res.status(201).json(newNotification.rows[0]);
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({ error: 'An error occurred while creating notification.' });
    }
});

// Update a notification
router.put("/notifications/:id", async (req: Req, res: Response) => {
    const { id } = req.params;
    const { user_id, message, sender, date_sent, user_id_user_id } = req.body;
    try {
        const updatedNotification = await pool.query('UPDATE notifications SET user_id = $1, message = $2, sender = $3, date_sent = $4, user_id_user_id = $5 WHERE id = $6 RETURNING *',
            [user_id, message, sender, date_sent, user_id_user_id, id]);
        if (updatedNotification.rows.length === 0) {
            res.status(404).json({ error: 'Notification not found.' });
        } else {
            res.json(updatedNotification.rows[0]);
        }
    } catch (err) {
        console.error("ERROR", err);
        res.status(500).json({ title: "Server Error", message: "An unexpected error occurred while updating notification." });
    }
});

// Delete a notification
router.delete('/notifications/:id', async (req: Req, res: Response) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM notifications WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            res.status(404).json({ error: 'Notification not found.' });
        } else {
            res.json(result.rows[0]);
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting the notification.' });
    }
});


export default router;
