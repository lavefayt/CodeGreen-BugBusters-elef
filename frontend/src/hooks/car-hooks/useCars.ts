import { Car } from "../../types/datatypes.ts";
import { BackendError } from "../../types/error.types.ts";

import { useEffect, useState, useCallback } from "react";
import { fetchWithAuth } from "../../utils/fetch.tsx";
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports.ts";

const useCars = (driverId: string) => {
  const [data, setData] = useState<Car[] | null>(null);
  const [error, setError] = useState<BackendError | null>(null);
  const [loading, setLoading] = useState(false);
  const { auth, refresh, navigate } = useFetchWithAuthExports();

  const fetchCars = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchWithAuth(
        navigate,
        refresh,
        auth,
        `/car/get?driverId=${driverId}`,
        "get"
      );

      if (!response.ok) {
        const error: BackendError = await response.json();
        setError(error);
      } else {
        const cars: Car[] = await response.json();
        setData(cars);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setError({ message: "An unexpected error occurred" } as BackendError);
    } finally {
      setLoading(false);
    }
  }, [driverId, fetchWithAuth]);

  useEffect(() => {
    if (driverId) {
      fetchCars();
    }
  }, [driverId, fetchCars]);

  return { data, error, loading, fetchCars };
};

export default useCars;
