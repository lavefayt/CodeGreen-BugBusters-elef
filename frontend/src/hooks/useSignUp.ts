import { useState } from "react";
import { UserSignUp } from "../types/user.types";
import { BackendMessage } from "../types/response.types";
import { toast } from "react-toastify";
import { normalFetch } from "../utils/fetch";

const useSignUp = () => {
  const [loading, setLoading] = useState<boolean>(false);

  const submitSignUp = async (formData: UserSignUp) => {
    setLoading(true);
    try {
      const response = await normalFetch("/auth/signup", "post", formData);

      if (!response.ok) {
        const backendError: BackendMessage = await response.json();
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
