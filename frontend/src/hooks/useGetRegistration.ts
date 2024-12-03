import { useEffect, useState, useCallback } from "react";
import { Registration } from "../types/datatypes.ts";
import { BackendError } from "../types/error.types";
import useFetch from "../hooks/useFetch";

const useGetRegistration = () => {
  const [data, setData] = useState<Registration[] | null>(null); // Store fetched registrations
  const [error, setError] = useState<BackendError | null>(null); // Handle errors
  const [loading, setLoading] = useState(false); // Track loading state

  const { fetchWithAuth } = useFetch();

  const fetchRegistration = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetchWithAuth("/registration/get", "get");

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
  }, [fetchWithAuth]);

  useEffect(() => {
    fetchRegistration();
  }, [fetchWithAuth, fetchRegistration]);

  return { data, error, loading, fetchRegistration };
};

export default useGetRegistration;
