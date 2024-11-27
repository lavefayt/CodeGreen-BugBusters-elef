import { useState } from "react";
import axios, { AxiosError } from "axios";

export interface DriverFormData {
    date_of_birth: string;
    driver_type: "Student" | "Faculty" | "Staff";
    email: string;
    first_name: string;
    last_name: string;
    license_expiration_date: string;
    license_number: string;
    middle_name: string;
    sex: "Male" | "Female";
  }

interface ApiResponse {
  title: string;
  message: string;
}

export const useAddDriver = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const addDriver = async (formData: DriverFormData) => {
    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    const PORT = process.env.REACT_APP_API_PORT || 4444; // Using environment variable for port

    try {
      const response = await axios.post<ApiResponse>(
        `http://localhost:${PORT}/add-driver`, 
        formData
      );

      setSuccessMessage(response.data.message);
    } catch (err) {
      if (err instanceof AxiosError && err.response) {
        setError(err.response.data.message || "Validation error occurred.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return { addDriver, loading, error, successMessage };
};
