import { useState } from "react";
import useFetchWithAuthExports from "./context-hooks/useFetchWithAuthExports";
import { fetchWithAuth } from "../utils/fetch";
import { toast } from "react-toastify";
import { BackendError } from "../types/error.types";

const useChangePassword = () => {
  const { auth, navigate, refresh } = useFetchWithAuthExports();
  const [loading, setLoading] = useState<boolean>();
  const changePassword = async (data: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    setLoading(true);
    try {
      const response = await fetchWithAuth(
        navigate,
        refresh,
        auth,
        "/auth/change-password",
        "patch",
        data
      );

      if (!response.ok) {
        const backendError: BackendError = await response.json();
        toast.error(backendError.message);
        return;
      }

      const notification = await response.json();
      toast.success(notification.message);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  return { changePassword, loading };
};

export default useChangePassword;
