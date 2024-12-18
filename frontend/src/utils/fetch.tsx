import { NavigateFunction } from "react-router-dom";
import { BackendMessage } from "../types/response.types";
import { User } from "../types/user.types";

export const normalFetch = async (
  route: string,
  method: string,
  body?: object
) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}${route}`, {
    method: method.toUpperCase(),
    headers: {
      "Content-type": "application/json",
    },
    credentials: "include",
    body: body ? JSON.stringify(body) : null,
  });

  return response;
};

export const fetchWithAuth = async (
  navigate: NavigateFunction,
  refresh: () => Promise<string | undefined>,
  auth: User | undefined,
  route: string,
  method: string,
  body?: object
) => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}${route}`, {
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
    console.log("New Access Token: " + newAccessToken);
    const newResponse = await fetch(
      `${import.meta.env.VITE_SERVER_URL}${route}`,
      {
        method: method.toUpperCase(),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${newAccessToken}`,
        },
        credentials: "include",
        body: body ? JSON.stringify(body) : null,
      }
    );

    if (!newResponse.ok) {
      const backendError: BackendMessage = await newResponse.json();
      navigate("/unauthorized");
      throw new Error(backendError.title + ": " + backendError.message);
    }

    console.log("NEW RESPONSE"); // SHOULD BE REMOVED
    return newResponse;
  }

  console.log("OLD RESPONSE"); // SHOULD BE REMOVED
  return response;
};
