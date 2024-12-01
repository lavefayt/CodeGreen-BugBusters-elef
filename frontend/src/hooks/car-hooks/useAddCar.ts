import { useState } from "react";
import { BackendError } from "../../types/error.types";
import { Cars } from "../../types/datatypes";
import useFetch from "../useFetch";

const useAddCar = () => {
  const [error, setError] = useState<BackendError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const { fetchWithAuth } = useFetch()

  const postCar = async (formData: Cars): Promise<boolean> => {
    setLoading(true);

    try {
      
    const response = await fetchWithAuth("/car/add", "post", formData)

      if (!response.ok) {
        const error: BackendError = await response.json();
        setError(error);
        console.error("Error adding car:", error.message);
        return false; // Return false on failure
      }

      return true; // Return true on success
    } catch (error) {
      console.error("Unexpected error:", error);
      setError({ message: "An unexpected error occurred" } as BackendError);
      return false; // Return false on failure
    } finally {
      setLoading(false);
    }
  };

  return { postCar, error, loading };
};

export default useAddCar;
