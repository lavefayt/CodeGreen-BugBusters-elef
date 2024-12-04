import { useEffect, useState } from "react";
import { BackendError } from "../../types/error.types";
import { toast } from "react-toastify";
import { DriverWithViolations } from "../../types/datatypes";
import { fetchWithAuth } from "../../utils/fetch";
import useFetchWithAuthExports from "../context-hooks/useFetchWithAuthExports";

const useGetDriver = (id: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [driver, setDriver] = useState<DriverWithViolations>({});
  const { auth, refresh, navigate } = useFetchWithAuthExports();

  useEffect(() => {
    const fetchDriver = async (id: string) => {
      setLoading(true);
      try {
        const response = await fetchWithAuth(
          navigate,
          refresh,
          auth,
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
    };
    fetchDriver(id);
  }, [auth]);

  return { driver, loading };
};

export default useGetDriver;
