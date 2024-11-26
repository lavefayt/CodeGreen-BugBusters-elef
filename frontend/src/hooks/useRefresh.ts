import React, { useEffect, useState } from "react";
import { User } from "../types/user.types";
import { BackendError } from "../types/error.types";
import { useLocation } from "react-router-dom";

const useRefresh = () => {
  const [user, setUser] = useState<User>();
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

    if (response.ok) {
      const foundUser = await response.json();
      console.log(foundUser);
      setUser(foundUser);
    } else {
      const backendError: BackendError = await response.json();
      setError(backendError);
      return;
    }
  };

  return { user, error, loading };
};

export default useRefresh;
