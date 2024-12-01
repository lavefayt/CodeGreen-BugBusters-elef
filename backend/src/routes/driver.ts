import express, { Request , Response } from "express";
import { pool } from "..";
import { Driver } from "../types/datatypes";
import { title } from "process";
import validateDriver from "../middlewares/validateDriver";


const router = express(); 
router.post("/add", validateDriver,  async (req : Request, res : Response) => {
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
            sex, 
            driver_type, 
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

router.get("/get", async (req: Request, res: Response) => {

    try {
      console.log("Fetching drivers from the database...");

      const { rows: drivers } = await pool.query(
       `SELECT *
        FROM drivers`
      );
      console.log("Drivers fetched successfully:", drivers);
  
      // Send the drivers list as a response
      res.json(drivers);

    } catch (error) {
      const errorMessage = (error as Error).message;
      console.error("Error fetching drivers:", errorMessage); // Log the error for debugging
      res.status(500).json({ title: "Unknown Error", message: errorMessage });
    }
  });


  const asyncHandler = (fn: (req: Request, res: Response, next: express.NextFunction) => Promise<any>) => 
    (req: Request, res: Response, next: express.NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };

    
router.patch("/update", asyncHandler(async (req: Request, res: Response) => {
    const { id, ...updates } = req.body;
  
    if (!id) {
      return res.status(400).json({
        title: "Validation Error",
        message: "Driver ID is required to update the record.",
      });
    }
  
    // Prepare the fields and values for the query
    const fields = Object.keys(updates);
    const values = Object.values(updates);
  
    // Dynamically create the SET clause for the update
    const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");
  
    try {
      // Build and run the update query
      const query = `
        UPDATE drivers
        SET ${setClause}
        WHERE id = $${fields.length + 1}
        RETURNING *;
      `;
  
      const result = await pool.query(query, [...values, id]);
  
      if (result.rowCount === 0) {
        return res.status(404).json({
          title: "Not Found",
          message: "Driver with the specified ID does not exist.",
        });
      }
  
      const updatedDriver = result.rows[0];
  
      // Return success with the updated driver data
      res.status(200).json({
        title: "Driver Updated!",
        message: `Driver ${updatedDriver.last_name}, ${updatedDriver.first_name} has been updated successfully.`,
        driver: updatedDriver,
      });
    } catch (error) {
      console.error("Error updating driver:", error);
      res.status(500).json({
        title: "Server Error",
        message: "An error occurred while updating the driver.",
      });
    }
  }));
      

router.delete("/delete", asyncHandler(async (req: Request, res: Response) => {
    console.log("Request body:", req.body); // Log the incoming request body
  
    const { id } = req.body;
  
    if (!id) {
      console.error("No ID provided in the request body");
      return res.status(400).json({
        title: "Validation Error",
        message: "Driver ID is required to delete a record.",
      });
    }
  
    await pool.query(
      `DELETE FROM cars WHERE driver_id = $1 RETURNING *`,
      [id]
    );

    await pool.query(
        `DELETE FROM violations WHERE id = $1 RETURNING *`,
        [id]
      );

    const resultDriver = await pool.query(
        `DELETE FROM drivers WHERE id = $1 RETURNING *`,
        [id]
      );
  
    if (resultDriver.rowCount === 0) {
      console.error("Driver not found in the database");
      return res.status(404).json({
        title: "Not Found",
        message: "Driver with the specified ID does not exist.",
      });
    }
  
    const deletedDriver = resultDriver.rows[0];
    console.log("Driver deleted successfully:", deletedDriver);
  
    res.status(200).json({
      title: "Driver Deleted",
      message: `Driver ${deletedDriver.last_name}, ${deletedDriver.first_name} has been removed.`,
      driver: deletedDriver,
    });
  }));
  

  router.get("/exists", asyncHandler(async (req: Request, res: Response) => {
    try {
      const { license_number } = req.query;
  
      if (!license_number) {
        return res.status(400).json({ message: "License number is required" });
      }
  
      const { rows: drivers } = await pool.query(
        `SELECT 1 FROM drivers WHERE license_number = $1`,
        [license_number]
      );
  
      if (drivers.length === 0) {
        return res.status(404).json({ exists: false, message: "License number not found" });
      }
  
      res.status(200).json({ exists: true });
    } catch (err) {
      if (err instanceof Error) {
        console.error("Database error:", err.message);
        res.status(500).json({ message: err.message });
      } else {
        console.error("Unexpected error:", err);
        res.status(500).json({ message: "An unexpected error occurred" });
      }
    }
  }));
  

export default router;