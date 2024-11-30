import useRefresh from "./useRefresh";
import { BackendError } from "../types/error.types";
import useAuth from "./context-hooks/useAuth";
import { AuthContextType } from "../types/user.types";
import { useNavigate } from "react-router-dom";

const useFetch = () => {
  const { refresh } = useRefresh();
  const { auth }: AuthContextType = useAuth();
  const navigate = useNavigate();

  const normalFetch = async (route: string, method: string, body?: object) => {
    const response = await fetch(`http://localhost:4444${route}`, {
      method: method.toUpperCase(),
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: body ? JSON.stringify(body) : null,
    });

    return response;
  };

  const fetchWithAuth = async (
    route: string,
    method: string,
    body?: object
  ) => {
    const response = await fetch(`http://localhost:4444${route}`, {
      method: method.toUpperCase(),
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${auth?.accessToken}`,
      },
      credentials: "include",
      body: body ? JSON.stringify(body) : null,
    });

    console.log(response.status);

    if (response.status === 403) {
      console.log(await response.json());
      console.log(auth?.accessToken);
      const newAccessToken = await refresh();
      const newResponse = await fetch(`http://localhost:4444${route}`, {
        method: method.toUpperCase(),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${newAccessToken}`,
        },
        credentials: "include",
        body: body ? JSON.stringify(body) : null,
      });

      if (!newResponse.ok) {
        const backendError: BackendError = await newResponse.json();
        navigate("/unauthorized");
        throw new Error(backendError.title + ": " + backendError.message);
      }

      console.log("NEW RESPONSE"); // SHOULD BE REMOVED
      return newResponse;
    }

    console.log("OLD RESPONSE"); // SHOULD BE REMOVED
    return response;
  };

  return { normalFetch, fetchWithAuth };
};

export default useFetch;
