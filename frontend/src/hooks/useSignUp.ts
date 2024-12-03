import { useState } from "react";
import { UserSignUp } from "../types/user.types";
import useFetch from "./useFetch";
import { BackendError } from "../types/error.types";
import { toast } from "react-toastify";

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
        toast.error(`${backendError.message}`);
        return;
      }

      const notification = await response.json();
      toast.success(`${notification.message}!`);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, submitSignUp };
};

export default useSignUp;
