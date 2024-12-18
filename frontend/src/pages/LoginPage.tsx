import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import { Spinner } from "react-activity";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, submitLogin } = useLogin();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitLogin({ email, password });
  };

  const handleSignUpButton = () => {
    navigate("/signup");
  };

  return (
    <div className="flex justify-center items-center bg-login-bg bg-no-repeat bg-cover sm:bg-top md:bg-right lg:bg-left h-screen">
      <div className="flex bg-transparent p-8 rounded-lg w-full max-w-3xl mx-auto">
        <div className="w-1/2 pr-8">
          <h2 className="text-3xl text-textgreen font-syke-regular">Access</h2>
          <h2 className="text-3xl mb-2 text-textgreen font-syke-regular">
            your account
          </h2>
          <h1 className="text-sm font-syke-regular mb-1 text-white">
            Don't have an account?{" "}
            <button
              className="text-buttongreen font-syke-medium"
              type="button"
              onClick={handleSignUpButton}
              data-testid="signup-button"
              >
              Sign Up
            </button>
          </h1>

          <form
            onSubmit={handleLogin}
            className="space-y-2">
            <div>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => {
                  if (e.target.value.length <= 30) {
                    setEmail(e.target.value);
                  }
                }}
                className="bg-secondgrey font-syke-regular w-full mt-1 px-4 py-2 focus:shadow-inner border-none focus:outline-none focus:ring-1 focus:ring-textgreen text-white placeholder-white rounded-sm"
                placeholder="Email or phone number"
                pattern="[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&amp;*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[cC][oO][mM](:[0-9]{1,5})?"
                required
              />
            </div>
            <div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  if (e.target.value.length <= 20) {
                    setPassword(e.target.value);
                  }
                }}                className="bg-secondgrey font-syke-regular w-full mt-1 px-4 py-2 focus:shadow-inner border-none focus:outline-none focus:ring-1 focus:ring-textgreen rounded-sm text-white placeholder-white"
                placeholder="Enter your password"
                required
              />
              <h1
                className="mt-2 mb-2 text-buttongreen font-syke-medium text-sm"
                >
                Please remember your password!<br>
                </br>Store it somewhere safe.
              </h1>
            </div>
            <button
              type="submit"
              className="flex w-1/2 bg-buttongreen text-white py-2 hover:bg-[#33471a] font-syke-regular transition-colors rounded-sm justify-center items-center">
              {loading ? (
                <Spinner
                  size={15}
                  color="#fff"
                  animating={loading}
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>

        <div className="w-1/2 pl-8 flex flex-col font-syke-medium justify-center items-start text-textgreen text-4xl gap-2">
          <h1>Welcome.</h1>
          <h1>Log in to monitor</h1>
          <h1>your vehicle's</h1>
          <h1>violation records.</h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
