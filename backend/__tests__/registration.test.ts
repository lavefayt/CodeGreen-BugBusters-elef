import supertest from "supertest";

import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  Mock,
  vi,
} from "vitest";
import { Pool } from "pg";
import { server } from "../src/index";
vi.mock("pg", () => {
  const mPool = {
    query: vi.fn(),
    connect: vi.fn(() => ({
      query: vi.fn(),
      release: vi.fn(),
    })),
    end: vi.fn(),
  };
  return { Pool: vi.fn(() => mPool) };
});

const pool = new Pool();

describe("Database Tests", () => {
  // server.use(credentials);
  // server.use(
  //   cors({
  //     origin: (origin, callback) => {
  //       if (allowedOrigins.indexOf(origin!) !== -1 || !origin) {
  //         callback(null, true);
  //       } else {
  //         callback(new Error("Not Allowed By CORS"));
  //       }
  //     },
  //     optionsSuccessStatus: 200,
  //   })
  // );

  beforeEach(() => {
    // Reset the mock before each test
    (pool.query as Mock).mockReset();
  });

  afterEach(() => {
    // Clean up after each test
    vi.clearAllMocks();
  });

  it("should fetch all registrations successfully", async () => {
    const mockRegistrations = [
      { user_id: 1, license_number: "123", school_email: "test@example.com" },
      { user_id: 2, license_number: "456", school_email: "test2@example.com" },
    ];
    (pool.query as Mock).mockResolvedValue({ rows: mockRegistrations });

    const response = await supertest(server).get("/get");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockRegistrations);
    expect(pool.query).toHaveBeenCalledOnce();
    expect(pool.query).toHaveBeenCalledWith(
      "SELECT user_id, license_number, school_email, first_name,last_name, middle_name, date_of_birth, driver_type, sex FROM registrations"
    );
  });

  it("should handle database errors", async () => {
    const dbError = new Error("Database query failed");
    (pool.query as Mock).mockRejectedValue(dbError);

    const response = await supertest(server).get("/get");

    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      title: "Unknown Error",
      message: dbError.message,
    });
  });
});
