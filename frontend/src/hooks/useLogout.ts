import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BackendError } from "../types/error.types";
import { AuthContextType } from "../types/user.types";
import useAuth from "./useAuth";

const useLogout = () => {
  // const navigate = useNavigate();
  // const [error, setError] = useState<BackendError>();
  const { setAuth, setAppLoading }: AuthContextType = useAuth();

  const logout = async () => {
    setAppLoading!(true);
    try {
      const response = await fetch(`http://localhost:4444/auth/logout`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
      });

      if (!response.ok) {
        const backendError: BackendError = await response.json();
        throw new Error(`${backendError.title}: ${backendError.message}`);
      }

      const notification = await response.json();

      console.log(notification.title + ": " + notification.message);
      setAuth!({
        accessToken: undefined,
        isAdmin: undefined,
      });

    } catch (err) {
      alert(err);
    } finally {
      setAppLoading!(false);
    }
  };

  return { logout };
};

export default useLogout;
