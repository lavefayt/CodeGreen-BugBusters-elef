import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { AuthContextType } from "../types/user.types";
import useRefresh from "../hooks/useRefresh";
import { Spinner } from "react-activity";
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

    !auth?.accessToken ? verifyRefreshToken() : setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner
            size={50}
            color="#008000"
            animating={loading}
          />
        </div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default PersistLogin;
