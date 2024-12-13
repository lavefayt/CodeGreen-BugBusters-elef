import { useState } from "react";
import { fetchWithAuth } from "../../utils/fetch";
import { BackendError } from "../../types/error.types";
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports";
import { Driver } from "../../types/datatypes";
import useLoading from "../context-hooks/useLoading";
import { LoadingContextType } from "../../types/loading.types";

export const useEditDriver = () => {
  const [error, setError] = useState<{ title: string; message: string } | null>(
    null
  );
  const { setAppLoading } : LoadingContextType = useLoading()
  const { navigate, refresh, auth } = useFetchWithAuthExports();

  const editDriver = async (
    id: string,
    updatedDriver: Driver
  ): Promise<boolean> => {
    setAppLoading!(true)
    try {
      const response = await fetchWithAuth(
        navigate,
        refresh,
        auth,
        "/driver/update",
        "PATCH",
        {
          id,
          ...updatedDriver,
        }
      );

      if (!response.ok) {
        const errorData: BackendError = await response.json();
        setError({
          title: errorData.title || "Error",
          message: errorData.message || "Unknown error occurred",
        });
        return false;
      }

      const data = await response.json();
      console.log("Driver updated:", data.driver);
      setError(null); // Clear any previous errors
      return true;
    } catch (err: any) {
      console.error("Error updating driver:", err);
      setError({
        message: err.message || "Failed to connect to the server",
      } as BackendError);
      return false;
    } finally {
      setAppLoading!(false)
    }
  };

  return { editDriver, error };
};

export default useEditDriver;
