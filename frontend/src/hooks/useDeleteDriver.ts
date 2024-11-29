import { useState } from "react";
import { BackendError } from "../types/error.types";
import useFetch from "./useFetch";
import useDrivers from "./useDrivers";

export const useDeleteDriver = () => {
    const [error, setError] = useState<BackendError | null>(null);
  
    const { fetchWithAuth } = useFetch()

    const deleteDriver = async (driverId: string): Promise<boolean> => {
      try {
        console.log("Sending delete request for driver ID:", driverId); // Log driverId
  
        const response = await fetchWithAuth("/driver/delete", "delete", { id: driverId })
  
        if (!response.ok) {
          const errorData = await response.json();
          console.error("Error response from server:", errorData); // Log server response
          setError({
            title: errorData.title || "Error",
            message: errorData.message || "Unknown error occurred",
          });
          return false;
        }
  
        console.log("Driver deleted successfully");
        setError(null); // Clear any previous errors
        return true;
      } catch (err: any) {
        console.error("Network error:", err);
        setError({
          title: "Network Error",
          message: err.message || "Failed to connect to the server",
        });
        return false;
      }
    };
  
    return { deleteDriver, error };
  };
  