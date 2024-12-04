import { useNavigate } from "react-router-dom";
import { BackendError } from "../types/error.types";
import { AuthContextType } from "../types/user.types";
import useAuth from "./context-hooks/useAuth";
import { LoadingContextType } from "../types/loading.types";
import useLoading from "./context-hooks/useLoading";
import { toast } from "react-toastify";
import { normalFetch } from "../utils/fetch";

const useLogout = () => {
  const { setAuth }: AuthContextType = useAuth();
  const { setAppLoading }: LoadingContextType = useLoading();
  const navigate = useNavigate();

  const logout = async () => {
    setAppLoading!(true);
    try {
      const response = await normalFetch("/auth/logout", "get");

      if (!response.ok) {
        const backendError: BackendError = await response.json();
        toast.error("Something went wrong!");
        throw new Error(`${backendError.title}: ${backendError.message}`);
      }

      const notification = await response.json();

      toast.info(notification.message);
      setAuth!({
        accessToken: undefined,
        isAdmin: undefined,
      });
      navigate("/login");
    } catch (err) {
      alert(err);
    } finally {
      setAppLoading!(false);
    }
  };

  return { logout };
};

export default useLogout;
