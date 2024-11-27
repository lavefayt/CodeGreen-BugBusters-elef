import express, { Request , Response } from "express";
import { pool } from "..";
import { Driver } from "../types/datatypes";
import { title } from "process";
import validateDriver from "../middlewares/validateDriver";


const router = express(); 

router.post("/add-driver", validateDriver,  async (req : Request, res : Response) => {
    try{ 
        const { 
            email, 
            first_name, 
            last_name, 
            middle_name, 
            date_of_birth, 
            sex, 
            driver_type, 
            license_number, 
            license_expiration_date,
        }
        = req.body as Driver
        

    const driver = await pool.query( 
        `INSERT INTO drivers (
        email, 
        first_name, 
        last_name, 
        middle_name, 
        date_of_birth, 
        sex, 
        driver_type, 
        license_number, 
        license_expiration_date) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,

        [ 
            email, 
            first_name, 
            last_name, 
            middle_name, 
            date_of_birth, 
            sex, driver_type, 
            license_number, 
            license_expiration_date 
        ],
            
    )

    console.log(driver.rows)
    res.status(200).json({
        title : "Driver Added!", 
        message : `Driver ${last_name}, ${first_name} ${middle_name} has been added`,

        
    })

    return

    } catch (error) {
        if (error instanceof Error) {
        console.error("Error occurred:", error.message);
        res.status(500).json({ title: "Server Error", message: error.message });

        } else {
        console.error("Unexpected error occurred:", error);
        res.status(500).json({ title: "Server Error", message: "An unexpected error occurred." });
        }
        
    }

    
  

});

export default router;