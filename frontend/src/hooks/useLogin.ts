import { useState } from "react";
import { AuthContextType, UserLogin } from "../types/user.types";
import { BackendError } from "../types/error.types";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogin = () => {
  // this should have a component catcher on the interface
  const [error, setError] = useState<BackendError>();

  const { setAuth, setAppLoading }: AuthContextType = useAuth();

  const navigate = useNavigate();

  const submitLogin = async (data: UserLogin) => {
    setAppLoading!(true);
    console.log(data);
    console.log(import.meta.env.VITE_BASE_SERVER_URL);
    const response = await fetch(`http://localhost:4444/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const backendError: BackendError = await response.json();
      setError(backendError);
      alert(`${backendError.title}: ${backendError.message}`);
      return;
      // throw new Error(backendError.title || "Unknown Error");
    }

    const userInfo = await response.json();

    setAuth!(userInfo);

    // To either navigate to the previous page where they go logged off or the landing page
    const navigateTo = userInfo.isAdmin ? "/admin" : "/homepage";
    navigate(navigateTo);
    setAppLoading!(false);
  };

  return { submitLogin, error };
};

export default useLogin;
