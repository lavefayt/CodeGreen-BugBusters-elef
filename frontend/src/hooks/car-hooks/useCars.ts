import { Cars } from "../../types/datatypes.ts";
import { BackendError } from "../../types/error.types.ts";
import useFetch from "../useFetch.ts";

import { useEffect, useState, useCallback } from "react";

const useCars = (driverId: string) => {
  const [data, setData] = useState<Cars[] | null>(null);
  const [error, setError] = useState<BackendError | null>(null);
  const [loading, setLoading] = useState(false);

  const { fetchWithAuth } = useFetch();

  const fetchCars = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchWithAuth(`/car/get?driverId=${driverId}`, "get");

      if (!response.ok) {
        const error: BackendError = await response.json();
        setError(error);
      } else {
        const cars: Cars[] = await response.json();
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
