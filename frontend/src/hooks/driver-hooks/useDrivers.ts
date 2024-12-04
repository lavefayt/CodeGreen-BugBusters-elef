import { useEffect, useState, useCallback } from "react";
import { DriverWithViolations } from "../../types/datatypes.ts";
import { BackendError } from "../../types/error.types.ts";
import { fetchWithAuth } from "../../utils/fetch.tsx";
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports.ts";

const useDrivers = () => {
  const [data, setData] = useState<DriverWithViolations[] | null>(null);
  const [error, setError] = useState<BackendError | null>(null);
  const [loading, setLoading] = useState(false);
  const { auth, refresh, navigate } = useFetchWithAuthExports();

  const fetchDrivers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchWithAuth(
        navigate,
        refresh,
        auth,
        "/driver/get",
        "get"
      );

      if (!response.ok) {
        const error: BackendError = await response.json();
        setError(error);
      } else {
        const drivers: DriverWithViolations[] = await response.json();
        setData(drivers);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError({ message: "An unexpected error occurred" } as BackendError);
    } finally {
      setLoading(false);
    }
  }, [auth]);

  useEffect(() => {
    fetchDrivers();
  }, [fetchDrivers]);

  return { data, error, loading, fetchDrivers };
};

export default useDrivers;
