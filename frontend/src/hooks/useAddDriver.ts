import { useState } from "react";
import { BackendError } from "../types/error.types";
import { Driver } from "../types/datatypes";


export const useAddDriver = () => {
  // const [data, setData] = useState<Driver[] | null>(null); // Store fetched drivers
  const [error, setError] = useState<BackendError | null>(null); // Handle errors
  const [loading, setLoading] = useState<boolean>(); // Track loading state

  const postDriver = async (formData: Driver) => {
    setLoading(true);
    
    try { 
      const response = await fetch(`http://localhost:4444/driver/add-driver`, { 
        method : "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData)
      });

      if (!response.ok) { 
        const error : BackendError = await response.json();
        setError(error)
        console.log("What are you doing?!")
      }

      } 
      catch (error) {
        console.error("Unexpected error:", error);
        setError({ message: "An unexpected error occurred" } as BackendError);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 5000)
      }
  }
  return { postDriver, loading, setLoading, error }
};
