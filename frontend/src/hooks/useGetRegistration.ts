import { useEffect, useState } from "react";
import { Registration } from "../types/datatypes.ts";
import { BackendError } from "../types/error.types";

const useGetRegistration = () => {
  const [data, setData] = useState<Registration[] | null>(null); // Store fetched registrations
  const [error, setError] = useState<BackendError | null>(null); // Handle errors
  const [loading, setLoading] = useState(false); // Track loading state

  const fetchRegistration = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:4444/registration/get`, {
        method: "GET", // Use GET for fetching data
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        const error: BackendError = await response.json();
        setError(error);
        console.error("Error fetching registrations:", error);
      } else {
        const registrations: Registration[] = await response.json();
        setData(registrations);
        console.log("Registrations fetched successfully:", registrations);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError({ message: "An unexpected error occurred" } as BackendError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistration();
  }, []);

  return { data, error, loading };
};

export default useGetRegistration;
