import { AuthContextType } from "../types/user.types";
import useAuth from "./useAuth";
import useRefresh from "./useRefresh";

interface InterceptorType {
  origFetch: (
    input: string | URL | globalThis.Request,
    init?: RequestInit
  ) => Promise<Response>;
  accessToken: string;
  route: string;
  method: string;
  body: string;
}

const useInterceptor = () => {
  const { refresh } = useRefresh();
  const { setAuth, auth }: AuthContextType = useAuth();

  const fetchWithAuth = async (
    accessToken: string,
    route: string,
    method: string,
    body?: string
  ) => {
    try {
      const response = await fetch(`http://localhost:4444${route}`, {
        method: method.toUpperCase(),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        credentials: "include",
        body: body ? JSON.stringify(body) : null,
      });

      if (response.status === 403) {
        const backendError = await response.json();
        console.log(backendError);
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
        setAuth!((prev) => {
          return { ...prev, accessToken: newAccessToken };
        });
        return await newResponse.json();
      }

      if (!response.ok) {
        alert(await response.json());
        return;
      }

      return await response.json();
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return { fetchWithAuth };
};

export default useInterceptor;
