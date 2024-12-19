import request from "supertest";
import express from "express";
import router from "../routes/violation";
import { pool } from ".."; // Your pool instance
import { Violation } from "../types/datatypes";

const app = express();
app.use(express.json());
app.use("/violations", router);

// Mock the pool.query method to simulate database behavior
vi.mock("..", () => ({
  pool: {
    query: vi.fn(),
  },
}));

describe("Violation API", () => {
    describe("POST /add", () => {
        it("should add a violation when the driver exists", async () => {
          const violationData: Violation = {
            id: "1", // Add id
            driver_id: "1", // driver_id as string
            violation_type: "Speeding",
            violation_date: "2024-12-19",
            description: "Exceeding the speed limit",
            paid_status: false, // Add paid_status
          };
      
          // Mock driver found in the database
          (pool.query as vi.Mock).mockResolvedValueOnce({
            rows: [{ id: 1, first_name: "John", last_name: "Doe" }],
          });
      
          // Mock insertion of the violation
          (pool.query as vi.Mock).mockResolvedValueOnce({
            rows: [{ driver_id: 1, violation_type: "Speeding" }],
          });
      
          const response = await request(app).post("/violations/add").send(violationData);
      
          expect(response.status).toBe(200);
          expect(response.body).toEqual({
            title: "Violation Added!",
            message: "Violation has been added for John Doe, Speeding.",
          });
        });
      
        it("should return 404 when the driver does not exist", async () => {
          const violationData: Violation = {
            id: "1", // Add id
            driver_id: "999", // Non-existent driver (as a string)
            violation_type: "Speeding",
            violation_date: "2024-12-19",
            description: "Exceeding the speed limit",
            paid_status: false, // Add paid_status
          };
      
          // Mock driver not found in the database
          (pool.query as vi.Mock).mockResolvedValueOnce({
            rows: [],
          });
      
          const response = await request(app).post("/violations/add").send(violationData);
      
          expect(response.status).toBe(404);
          expect(response.body).toEqual({
            title: "No Driver Found",
            message: "Driver is not found.",
          });
        });
      
        it("should return 500 if an error occurs", async () => {
          const violationData: Violation = {
            id: "1", // Add id
            driver_id: "1", // driver_id as string
            violation_type: "Speeding",
            violation_date: "2024-12-19",
            description: "Exceeding the speed limit",
            paid_status: false, // Add paid_status
          };
      
          // Mock error during query
          (pool.query as vi.Mock).mockRejectedValueOnce(new Error("Database error"));
      
          const response = await request(app).post("/violations/add").send(violationData);
      
          expect(response.status).toBe(500);
          expect(response.body).toEqual({
            title: "Error",
            message: "Database error",
          });
        });
      });
      

  describe("PATCH /update", () => {
    it("should update a violation successfully", async () => {
      const violationData = {
        id: 1,
        violation_type: "Speeding",
        description: "Exceeded speed limit by 20 mph",
      };

      // Mock successful update
      (pool.query as vi.Mock).mockResolvedValueOnce({
        rowCount: 1,
        rows: [{ id: 1, violation_type: "Speeding", description: "Exceeded speed limit by 20 mph" }],
      });

      const response = await request(app).patch("/violations/update").send(violationData);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        title: "Violation Updated!",
        message: "Violation has been updated successfully.",
      });
    });

    it("should return 404 if the violation is not found", async () => {
      const violationData = {
        id: 999, // Non-existent violation ID
        violation_type: "Speeding",
        description: "Exceeded speed limit by 20 mph",
      };

      // Mock violation not found
      (pool.query as vi.Mock).mockResolvedValueOnce({
        rowCount: 0,
        rows: [],
      });

      const response = await request(app).patch("/violations/update").send(violationData);

      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        title: "Not Found",
        message: "Violations with the specified ID does not exist.",
      });
    });
  });

  describe("DELETE /delete", () => {
    it("should delete a violation successfully", async () => {
      const violationData = { violationId: 1 };

      // Mock successful deletion
      (pool.query as vi.Mock).mockResolvedValueOnce({
        rowCount: 1,
        rows: [{ id: 1 }],
      });

      const response = await request(app).delete("/violations/delete").send(violationData);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        title: "Violation Deleted",
        message: "Violation Deleted Successfully.",
      });
    });

    it("should return 404 if the violation cannot be found", async () => {
      const violationData = { violationId: 999 }; // Non-existent violation

      // Mock deletion failure
      (pool.query as vi.Mock).mockResolvedValueOnce({
        rowCount: 0,
        rows: [],
      });

      const response = await request(app).delete("/violations/delete").send(violationData);

      expect(response.status).toBe(404);
      expect(response.body).toEqual({
        message: "Cannot find and delete the violation.",
      });
    });
  });
});
