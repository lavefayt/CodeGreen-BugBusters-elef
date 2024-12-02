import { useState } from "react";
import { BackendError } from "../types/error.types";
import { Registration } from "../types/datatypes";
import useFetch from "../hooks/useFetch";

export const useAddRegistration = () => {
  const [error, setError] = useState<BackendError | null>(null); // Handle errors
  const [loading, setLoading] = useState<boolean>(); // Track loading state

  const { fetchWithAuth } = useFetch();

  const postRegistration = async (formData: Registration) => {
    setLoading(true);

    try {
      const response = await fetchWithAuth(
        "/registration/add",
        "POST",
        formData
      );

      if (!response.ok) {
        const error: BackendError = await response.json();
        setError(error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setError({ message: "An unexpected error occurred" } as BackendError);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }
  };
  return { postRegistration, loading, setLoading, error };
};
export default useAddRegistration;
