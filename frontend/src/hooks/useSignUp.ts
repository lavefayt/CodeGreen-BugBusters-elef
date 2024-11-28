import React, { useState } from "react";
import { UserSignUp } from "../types/user.types";
import useFetch from "./useFetch";
import { BackendError } from "../types/error.types";

const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { normalFetch } = useFetch();

  const submitSignUp = async (formData: UserSignUp) => {
    setLoading(true);
    try {
      const response = await normalFetch("/auth/signup", "post", formData);

      if (!response.ok) {
        const backendError: BackendError = await response.json();
        console.log(backendError);
        return `ERROR:\n${backendError.title} ${backendError.message}`;
      }

      const successNotification = await response.json();
      return `SUCCESSFUL:\n${successNotification.title} ${successNotification.message}`;
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitSignUp };
};

export default useSignUp;
