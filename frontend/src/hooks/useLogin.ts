import React, { useEffect, useState } from "react";
import { UserLogin } from "../types/user.types";
import { BackendError } from "../types/error.types";

const useLogin = () => {
  // this should have a component catcher on the interface
  const [error, setError] = useState<BackendError | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string>("");
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  const submitLogin = async (data: UserLogin) => {
    console.log(data);
    setLoading(true);
    const response = await fetch(`http://localhost:4444/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error: BackendError = await response.json();
      console.log(error);
      setError(error);
      setLoading(false);
      return;
    } else {
      const userInfo = await response.json();
      const accessToken = userInfo.accessToken;
      const userIsAdmin = userInfo.is_admin;
      console.log(accessToken);
      setToken(accessToken);
      setIsAdmin(userIsAdmin);
    }
  };

  return { error, loading, submitLogin, token, isAdmin };
};

export default useLogin;
