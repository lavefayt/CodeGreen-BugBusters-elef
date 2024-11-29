import express, { Request, Response } from "express";
import { pool } from "..";
import { Cars } from "../types/datatypes";

const router = express();

router.post("/add", async (req: Request, res: Response) => { 
    try { 
        const { 
            car_model, 
            license_plate, 
            brand,
            color,
            license_number,
        }: Cars = req.body;

        const { rows: drivers } = await pool.query(
            `SELECT id 
            FROM drivers 
            WHERE license_number = $1`, 
            [license_number])

        const driverFound = drivers[0]
        const driverId = driverFound.id

        const car = await pool.query(
            `INSERT INTO cars (
                driver_id, 
                car_model, 
                license_plate, 
                brand,
                color,
                license_number
            ) VALUES ($1, $2, $3, $4, $5, $6)`,
            [   
                driverId,
                car_model, 
                license_plate, 
                brand,
                color,
                license_number
            ],
        );

        console.log(car.rows);
        res.status(200).json({
            title: "Driver Added!", 
            message: `Car ${car_model} licensed ${license_number} has been added`,
        });
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error("Error:", errorMessage);
        res.status(500).json({ title: "Error", message: errorMessage });
    }
});

router.get("/get", async (req: Request, res: Response) => { 
    try { 
        console.log("Fetching cars from the database...");

        const { rows: cars } = await pool.query(
            `SELECT 
            car_model, 
            license_plate, 
            brand,
            color,
            license_number
            FROM cars`
        ); 
    
        console.log("Drivers fetched successfully:", cars);
        res.status(200).json(cars);
    } catch (error) {
        const errorMessage = (error as Error).message;
        console.error("Error fetching cars:", errorMessage);
        res.status(500).json({ title: "Unknown Error", message: errorMessage });
    }
});

const asyncHandler = (fn: (req: Request, res: Response, next: express.NextFunction) => Promise<any>) => 
    (req: Request, res: Response, next: express.NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };

    router.patch("/update", asyncHandler(async (req: Request, res: Response) => {
        const { license_plate, ...updates } = req.body;
    
        if (!license_plate) {
            return res.status(400).json({
                title: "Validation Error",
                message: "License plate is required to update the record."
            });
        }
    
        const fields = Object.keys(updates);
        const values = Object.values(updates);
    
        const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
    
        const query = 
        `UPDATE cars SET ${ setClause }
         WHERE license_plate = $${ fields.length + 1 } 
         RETURNING *`;
    
        const result = await pool.query(
            query, 
            [...values, license_plate]);
    
        if (result.rowCount === 0) {
            return res.status(404).json({
                title: "Not Found",
                message: "Cars with the specified ID does not exist."
            });
        }
    
        const updateCar = result.rows[0];
        console.log("Car updated successfully:", updateCar);
    
        res.status(200).json({
            title: "Car Updated!",
            message: `Driver ${updateCar.last_name}, ${updateCar.first_name} has been updated successfully.`,
            driver: updateCar
        });
    }));


router.delete("/delete", async (req : Request, res : Response) => {

    try{ 
        console.log("Fetching. . .");

        const car = await pool.query(
            `DELETE FROM 
            cars 
            WHERE 
            id = $1 
            RETURNING *`, 
            [req.body.id]
        );
        console.log("Driver deleted successfully:", car);
    }
    catch(error){ 
        console.log("Error!")
    }
  });

export default router;