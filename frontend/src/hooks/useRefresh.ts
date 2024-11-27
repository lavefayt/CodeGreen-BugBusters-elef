import React, { useEffect, useState } from "react";
import { AuthContextType, User } from "../types/user.types";
import { BackendError } from "../types/error.types";
import { useLocation } from "react-router-dom";
import useAuth from "./useAuth";

const useRefresh = () => {
  const { setAuth }: AuthContextType = useAuth();
  const [error, setError] = useState<BackendError>();
  const [loading, setLoading] = useState<boolean>(true);
  // const { pathname } = useLocation();

  const refresh = async () => {
    const response = await fetch(`http://localhost:4444/auth/refresh`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const backendError: BackendError = await response.json();
      setError(backendError);
      setLoading(false);
      return;
    }

    const foundUser = await response.json();
    console.log(foundUser);
    setAuth!((prev) => {
      console.log(prev);
      console.log(foundUser);
      return { ...prev, accessToken: foundUser.accessToken };
    });

    return foundUser.accessToken;
  };

  return { error, loading, refresh };
};

export default useRefresh;
