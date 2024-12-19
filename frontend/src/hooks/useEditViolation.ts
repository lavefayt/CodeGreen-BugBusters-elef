import { useEffect, useState } from "react";
import { BackendMessage } from "../types/response.types";
import { toast } from "react-toastify";
import { Violation } from "../types/datatypes";
import { fetchWithAuth } from "../utils/fetch";
import useFetchWithAuthExports from "./context-hooks/useFetchWithAuthExports";

const useEditViolation = (id: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { auth, refresh, navigate } = useFetchWithAuthExports();
  const [violation, setViolation] = useState<Violation>({});

  useEffect(() => {
    const editViolation = async (violationId: string) => {
      setLoading(true);
      try {
        const response = await fetchWithAuth(
          navigate,
          refresh,
          auth,
          "/violation/update",
          "patch",
          { id: violationId }
        );

        if (response.status === 401) {
          const backendError: BackendMessage = await response.json();
          toast.error(backendError.message);
          navigate("/unauthorized");
          throw Error("WALA TAWO NGA LOGGED IN");
        }

        if (!response.ok) {
          const backendError: BackendMessage = await response.json();
          toast.error(backendError.message);
          throw Error("may sala sa backend hahaha");
        }

        const editedViolation = await response.json();
        setViolation(editedViolation);
      } catch (error) {
        console.error(error);
      }
    };

    editViolation(id);
  }, [auth, id, navigate, refresh]);

  return { violation, loading };
};

export default useEditViolation;
