import { useState } from "react";
import { BackendError } from "../../types/error.types";
import { fetchWithAuth } from "../../utils/fetch";
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports";

export const useDeleteDriver = () => {
  const [error, setError] = useState<BackendError | null>(null);
  const { auth, refresh, navigate } = useFetchWithAuthExports();

  const deleteDriver = async (driverId: string): Promise<boolean> => {
    try {
      console.log("Sending delete request for driver ID:", driverId); // Log driverId

      const response = await fetchWithAuth(
        navigate,
        refresh,
        auth,
        "/driver/delete",
        "delete",
        { id: driverId }
      );

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
    } catch (err: unknown) {
      console.error("Network error:", err);

      // Narrow down `err` to ensure it has a `message` property
      const errorMessage =
        err instanceof Error ? err.message : "Failed to connect to the server";

      setError({
        title: "Network Error",
        message: errorMessage,
      });

      return false;
    }
  };

  return { deleteDriver, error };
};
