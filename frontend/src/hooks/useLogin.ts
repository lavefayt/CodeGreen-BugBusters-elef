import { useState } from "react";
import { AuthContextType, UserLogin } from "../types/user.types";
import { BackendError } from "../types/error.types";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogin = () => {
  // this should have a component catcher on the interface
  const [error, setError] = useState<BackendError>();
  const [loading, setLoading] = useState(false);

  const { setAuth }: AuthContextType = useAuth();

  const navigate = useNavigate();

  const submitLogin = async (data: UserLogin) => {
    console.log(data);
    setLoading(true);
    console.log(import.meta.env.VITE_SERVER_URL);
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
      setLoading(false);
      alert(`${backendError.title}: ${backendError.message}`);
      return;
      // throw new Error(backendError.title || "Unknown Error");
    }

    const userInfo = await response.json();
    setAuth!(userInfo);
    console.log(userInfo);

    // To either navigate to the previous page where they go logged off or the landing page
    const navigateTo = userInfo.isAdmin ? "/admin" : "/homepage";
    navigate(navigateTo);

    setLoading(false);
  };

  return { loading, setLoading, submitLogin, error };
};

export default useLogin;
