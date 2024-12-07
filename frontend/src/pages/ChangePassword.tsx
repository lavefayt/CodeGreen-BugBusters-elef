import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import useChangePassword from "../hooks/useChangePassword";
import { useState } from "react";
import { Spinner } from "react-activity";
import useAuth from "../hooks/context-hooks/useAuth";
import { AuthContextType } from "../types/user.types";
const ChangePassword = () => {
  const navigate = useNavigate();
  const { loading, changePassword } = useChangePassword();
  const [data, setData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const { auth }: AuthContextType = useAuth();

  const handleCancelButton = () => {
    navigate(auth?.isAdmin ? "/admin" : "/homepage");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitButton = () => {
    changePassword(data);
  };

  return (
    <div className="flex flex-col items-center bg-policies-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <Header />
      </div>

      <div className="space-y-5 w-full max-w-md mt-8">
        <div className="flex flex-col space-y-4">
          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">
              Current Password
            </h1>
            <input
              type="password"
              className="bg-secondgrey border-b font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
              name="currentPassword"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">New Password</h1>
            <input
              type="password"
              className="bg-secondgrey border-b font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
              name="newPassword"
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex-1">
            <h1 className="text-white font-syke-light text-xl">
              Confirm Password
            </h1>
            <input
              type="password"
              className="bg-secondgrey border-b font-syke-regular text-[1.2rem] w-full mt-1 px-4 py-2 h-10 border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white placeholder-opacity-25 rounded-sm"
              name="confirmNewPassword"
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between w-full max-w-sm p-5">
        <button
          type="button"
          onClick={handleCancelButton}
          className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm">
          Cancel
        </button>

        <button
          type="button"
          onClick={handleSubmitButton}
          className="w-32 bg-buttongreen font-syke-medium text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm">
          {loading ? (
            <div className="flex justify-center items-center w-full h-full">
              <Spinner
                size={10}
                color="#008000"
                animating={loading}
              />
            </div>
          ) : (
            "Confirm"
          )}
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
