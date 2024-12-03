import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import { toast } from "react-toastify";
import { BackendError } from "../types/error.types";
import { DriverWithViolations } from "../types/datatypes";

const useGetViolators = () => {
  const { fetchWithAuth } = useFetch();
  const [violators, setViolators] = useState<DriverWithViolations[]>([]);
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const fetchViolators = async () => {
      setLoading(true);
      try {
        const response = await fetchWithAuth("/violator/get", "get");

        if (!response.ok) {
          const backendError: BackendError = await response.json();
          toast.error(backendError.message);
          return;
        }

        const violators = await response.json();

        setViolators(violators);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    fetchViolators();
  }, []);

  return { violators, loading };
};

export default useGetViolators;
