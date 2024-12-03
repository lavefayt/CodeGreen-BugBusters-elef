import { useEffect, useState, useCallback } from "react";
import useFetch from "../useFetch";
import { BackendError } from "../../types/error.types";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { DriverWithViolations } from "../../types/datatypes";
import useAuth from "../context-hooks/useAuth";
import { AuthContextType } from "../../types/user.types";

const useGetDriver = (id: string) => {
  const { fetchWithAuth } = useFetch();
  const [loading, setLoading] = useState<boolean>(true);
  const [driver, setDriver] = useState<DriverWithViolations>({});
  const { auth }: AuthContextType = useAuth();

  const navigate = useNavigate();

  const fetchDriver = useCallback(
    async (id: string) => {
      setLoading(true);
      try {
        const response = await fetchWithAuth(
          auth?.isAdmin ? `/driver/get/${id}` : `/profile/get/${id}`,
          "get"
        );

        if (response.status === 401) {
          const backendError: BackendError = await response.json();
          toast.error(backendError.message);
          navigate("/unauthorized");
          return {};
        }

        if (!response.ok) {
          const backendError: BackendError = await response.json();
          toast.error(backendError.message);
          return {};
        }

        const fetchedDriver = await response.json();
        setDriver(fetchedDriver);
      } catch (error) {
        console.log(error);
        return {};
      } finally {
        setLoading(false);
      }
    },
    [auth, fetchWithAuth, navigate]
  );

  useEffect(() => {
    fetchDriver(id!);
  }, [fetchDriver, id]);

  return { driver, loading, fetchDriver };
};

export default useGetDriver;
