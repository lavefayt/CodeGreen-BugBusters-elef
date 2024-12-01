import express, { Request, Response } from "express";
import { pool } from "..";
import { Violation } from "../types/datatypes";
import { title } from "process";
// import validateDriver from "../middlewares/validateDriver";

const router = express();

router.get("/get", async (req: Request, res: Response) => {
  try {
    console.log("Fetching drivers from the database...");

    const { rows: violation } = await pool.query(
      `SELECT 
       id, 
       driver_id,
       violation_type,
       violation_date,
       paid_status
       FROM violations WHERE driver_id =$1`,
      [req.query.driver_id?.toString]
    );

    console.log("Violations fetched successfully:", violation);

    // Send the drivers list as a response
    res.json(violation);
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error("Error fetching violations:", errorMessage); // Log the error for debugging
    res.status(500).json({ title: "Unknown Error", message: errorMessage });
  }
});

//   const asyncHandler = (fn: (req: Request, res: Response, next: express.NextFunction) => Promise<any>) =>
//     (req: Request, res: Response, next: express.NextFunction) => {
//         Promise.resolve(fn(req, res, next)).catch(next);
//     };

//   router.patch("/update", validateViolation, asyncHandler(async (req: Request, res: Response) => {
//     const { id, ...updates } = req.body;

//     if (!id) {
//         return res.status(400).json({
//             title: "Validation Error",
//             message: "Driver ID is required to update the record."
//         });
//     }

//     const fields = Object.keys(updates);
//     const values = Object.values(updates);

//     const setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(", ");

//     const query =
//     `UPDATE drivers
//     SET ${ setClause }
//     WHERE id = $${ fields.length + 1 }
//     RETURNING *`;

//     const result = await pool.query(
//         query,
//         [...values, id]);

//     if (result.rowCount === 0) {
//         return res.status(404).json({
//             title: "Not Found",
//             message: "Driver with the specified ID does not exist."
//         });
//     }

//     const updatedViolation = result.rows[0];
//     console.log("Driver updated successfully:", updatedViolation);

//     res.status(200).json({
//         title: "Driver Updated!",
//         message: `Driver ${updatedViolation.last_name}, ${updatedViolation.first_name} has been updated successfully.`,
//         driver: updatedViolation
//     });
// }));

// router.delete("/delete", async (req : Request, res : Response) => {

//     try{
//         console.log("Fetching. . .");

//         const violation = await pool.query(
//             `DELETE FROM
//             drivers
//             WHERE
//             id = $1
//             RETURNING *`,
//             [req.body.id]
//         );
//         console.log("Driver deleted successfully:", violation);
//     }
//     catch(error){
//         console.log("Error!")
//     }
//   });

export default router;
