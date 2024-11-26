import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { BackendError } from "../types/error.types";
import { AuthContextType } from "../types/user.types";
import useAuth from "./useAuth";

const useLogout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<BackendError>();
  const { setAuth }: AuthContextType = useAuth();

  const logout = async () => {
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
      navigate("/login");

      setLoading(false);

      // put something when successfully logged out
    } catch (err) {
      setLoading(false);
      alert(err);
    }
  };

  return { logout, loading, error, setLoading };
};

export default useLogout;
