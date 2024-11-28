import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NotificationPopUp } from "../components/NotificationPopUp";
import { UserSignUp } from "../types/user.types";
import useSignUp from "../hooks/useSignUp";
import { Spinner } from "react-activity";

const initialFormData = {
  last_name: "",
  first_name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const SignUp = () => {
  const navigate = useNavigate();

  const [signUpForm, setSignUpForm] = useState<UserSignUp>(initialFormData);
  const { submitSignUp, loading } = useSignUp();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prevFormData) => {
      return { ...prevFormData, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const notification = await submitSignUp(signUpForm);
    console.log(notification);
  };

  const handleLogInButton = () => {
    navigate("/login");
  };

  return (
    <div className="flex relative justify-center items-center bg-signup-bg bg-cover bg-no-repeat sm:bg-top md:bg-right h-screen overflow-hidden">
      {/* <div className="w-full max-w-3xl mb-8 mt-5">
        <LogInSignUpHeader />
    </div> */}

      <div className="flex bg-transparent p-8 rounded-lg w-full max-w-3xl mt-10">
        <div className="w-1/2 pl-8 flex flex-col justify-center items-start font-syke-medium text-textgreen text-4xl gap-2">
          <h1>Stay compliant.</h1>
          <h1>Sign up to track</h1>
          <h1>and manage your</h1>
          <h1>vehicle's records.</h1>
        </div>

        <div className="w-1/2 pr-8">
          <h2 className="text-3xl text-textgreen font-syke-regular-">Create</h2>
          <h2 className="text-3xl mb-2 text-textgreen font-syke-regular">
            new account
          </h2>
          <h1 className="text-sm mb-1 text-white">
            Already have an account?{" "}
            <button
              className="text-buttongreen font-syke-medium"
              type="button"
              onClick={handleLogInButton}>
              Log In
            </button>
          </h1>

          <form
            className="space-y-2"
            onSubmit={handleSubmit}>
            <div className="flex space-x-2.5">
              <div className="flex-1">
                <input
                  type="text"
                  className="bg-secondgrey font-syke-regular w-full mt-1 px-4 py-2 border border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  className="bg-secondgrey font-syke-regular w-full mt-1 px-4 py-2 border border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                  placeholder="First Name"
                  name="first_name"
                  required
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div>
              <input
                type="text"
                className="bg-secondgrey font-syke-regular w-full mt-1 px-4 py-2 border border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                placeholder="Email"
                pattern="([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(\d{10})"
                name="email"
                required
                onChange={handleFormChange}
              />
            </div>

            <div>
              <input
                type="password"
                className="bg-secondgrey font-syke-regular w-full mt-1 px-4 py-2 border border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                placeholder="Password"
                name="password"
                required
                onChange={handleFormChange}
              />
            </div>

            <div>
              <input
                type="password"
                className="bg-secondgrey font-syke-regular w-full mt-1 px-4 py-2 mb-3 border border-none focus:outline-none focus:shadow-inner focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                placeholder="Confirm Password"
                name="confirm_password"
                required
                onChange={handleFormChange}
              />
            </div>

            <button
              type="submit"
              className="flex justify-center items-center w-1/2 bg-buttongreen font-syke-regular text-white py-2 hover:bg-[#33471a] transition-colors rounded-sm">
              {loading ? (
                <Spinner
                  size={10}
                  color="#fff"
                  animating={loading}
                />
              ) : (
                "Create account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
