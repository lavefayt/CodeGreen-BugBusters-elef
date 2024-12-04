import { useState } from "react";
import { BackendError } from "../../types/error.types";
import { Driver } from "../../types/datatypes";
import { fetchWithAuth } from "../../utils/fetch";
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports";

export const useAddDriver = () => {
  // const [data, setData] = useState<Driver[] | null>(null); // Store fetched drivers
  const [error, setError] = useState<BackendError | null>(null); // Handle errors
  const [loading, setLoading] = useState<boolean>(); // Track loading state
  const { auth, refresh, navigate } = useFetchWithAuthExports();

  const postDriver = async (formData: Driver) => {
    setLoading(true);

    try {
      console.log(`FORM DATA: ${JSON.stringify(formData)}`);
      const response = await fetchWithAuth(
        navigate,
        refresh,
        auth,
        "/driver/add",
        "POST",
        formData
      );

      if (!response.ok) {
        const error: BackendError = await response.json();
        setError(error);
        console.log("What are you doing?!");
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
  return { postDriver, loading, setLoading, error };
};

export default useAddDriver;
