import { useEffect, useState } from "react";
import { UserLogin } from "../types/user.types";
import { BackendError } from "../types/error.types";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  // this should have a component catcher on the interface
  const [error, setError] = useState<BackendError>();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string>(""); // must be useContext
  const [isAdmin, setIsAdmin] = useState<boolean>();
  const navigate = useNavigate()

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
      const backendError: BackendError = await response.json();
      setError(backendError);
      setLoading(false);
      alert(`${backendError.title}: ${backendError.message}`);
      // throw new Error(backendError.title || "Unknown Error");
    }

    const userInfo = await response.json()
    const isAdmin = await userInfo.isAdmin
    isAdmin ? navigate("/admin") : navigate("/homepage")

    setLoading(false);
  };

  return { loading, setLoading, submitLogin, isAdmin, error };
};

export default useLogin;
