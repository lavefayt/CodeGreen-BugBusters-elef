import { useEffect, useState } from "react";
import useAuth from "../hooks/context-hooks/useAuth";
import { AuthContextType } from "../types/user.types";
import useRefresh from "../hooks/useRefresh";
import { Outlet } from "react-router-dom";

const PersistLogin = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { auth }: AuthContextType = useAuth();
  const { refresh } = useRefresh();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };

    verifyRefreshToken();
  }, [auth?.accessToken]);

  return <>{!loading && <Outlet />}</>;
};

export default PersistLogin;
