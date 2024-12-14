import request from "supertest";
import { afterEach, beforeEach, describe, expect, it, Mock, test, vi } from "vitest";
import { Pool } from "pg";
import { server } from "../src/index"

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
  beforeEach(() => {
    // Reset the mock before each test
    (pool.query as Mock).mockReset();
  });

  afterEach(() => {
    // Clean up after each test
    vi.clearAllMocks();
  });

  test('should fetch registrations successfully', async () => {
    const mockRegistrations = [
      { user_id: 1, license_number: 'ABC123', school_email: 'test@example.com', first_name: 'John', last_name: 'Doe', middle_name: 'A', date_of_birth: '1990-01-01', driver_type: 'Type A', sex: 'M' },
      // Add more mock registrations as needed
    ];

    // Mock the database query
    (pool.query as Mock).mockResolvedValue({ rows: mockRegistrations });

    const response = await request(server).get('/registration/get');
    console.log(response.error)

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockRegistrations);
  });

  test('should handle database query error', async () => {
    const mockError = new Error('Database query failed');
    
    // Mock the database query to throw an error
    (pool.query as Mock).mockRejectedValue(mockError);

    const response = await request(server).get('/registration/get');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ title: 'Unknown Error', message: mockError.message });
  });

  test('should return empty array when no registrations exist', async () => {
    // Mock the database query to return an empty array
    (pool.query as Mock).mockResolvedValue({ rows: [] });

    const response = await request(server).get('/registration/get');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });
  
});
