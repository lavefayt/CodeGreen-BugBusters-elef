import useAuth from "./useAuth";
import { AuthContextType } from "../../types/user.types";
import useRefresh from "../useRefresh";
import { useNavigate } from "react-router-dom";

const useFetchWithAuthExports = () => {
  const { auth }: AuthContextType = useAuth();
  const { refresh } = useRefresh();
  const navigate = useNavigate();
  return { auth, refresh, navigate };
};

export default useFetchWithAuthExports;
