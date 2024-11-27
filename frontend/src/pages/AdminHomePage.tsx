import { useNavigate } from "react-router-dom";
import AdminHeader from "../components/AdminHeader";
import React, { useState } from "react";
import { AuthContextType } from "../types/user.types";
import useAuth from "../hooks/useAuth";
import useInterceptor from "../hooks/useInterceptor";
import useRefresh from "../hooks/useRefresh";

const AdminLandingPage = () => {
  const [test, setTest] = useState();
  const { auth }: AuthContextType = useAuth();

  // useInterceptor();

  const navigate = useNavigate();

  const handleEncodeButton = () => {
    navigate("/encode");
  };
  const handleAddViolationButton = () => {
    navigate("/violatorslist");
  };
  const handleAddDriverButton = () => {
    navigate("/driverslist");
  };

  // const { fetch: originalFetch } = window;
  // const { refresh } = useRefresh();
  // // const { auth }: AuthContextType = useAuth();

  // window.fetch = async (...args) => {
  //   let [resource, config] = args;
  //   try {
  //     const headers = config?.headers
  //       ? new Headers(config.headers)
  //       : new Headers();

  //     if (!headers.has("authorization")) {
  //       headers.set("authorization", `Bearer ${auth?.accessToken}`);
  //     }
  //   } catch (error) {
  //     Promise.reject(error);
  //   }

  //   // request interceptor here
  //   const response = await originalFetch(resource, config);
  //   // response interceptor here

  //   await response
  //     .clone()
  //     .json()
  //     .then((response) => response)
  //     .catch(async (error) => {
  //       const prevRequest = error?.config;
  //       if (error?.response?.status === 403 && !prevRequest.sent) {
  //         prevRequest.sent = true;
  //         const newAccessToken = refresh();
  //         prevRequest.headers["authorization"] = `Bearer ${newAccessToken}`;
  //       }
  //       return Promise.reject(error);
  //     });

  //   return response;
  // };

  // const testing = async () => {
  //   const response = await fetch(`http://localhost:4444/testing`, {
  //     method: "GET",
  //     headers: {
  //       "Content-type": "application/json",
  //       // authorization: `Bearer ${auth!.accessToken}`,
  //     },
  //     credentials: "include",
  //   });
  //   setTest(await response.json());
  // };
  // testing();

  // console.log(test);

  return (
    <div className="flex flex-col items-center bg-adminlanding-bg bg-cover bg-no-repeat sm:bg-top md:bg-right lg:bg-left h-screen">
      <div>
        <AdminHeader />
      </div>

      <div className="flex space-x-2 mt-8">
        <h1 className="text-3xl text-textgreen font-syke-bold">Welcome,</h1>
        <h1 className="text-3xl text-white font-syke-bold">Admin Rofer!</h1>
      </div>

      <p className="text-xl text-white font-syke-regular text-center mt-8">
        CodeGreen Gateway is designed to monitor and manage parking violations
        within the university.
      </p>

      <div className="grid grid-cols-3 font-syke-medium text-3xl gap-x-12 gap-y-4 mt-12">
        <button
          className="transition-transform duration-300 hover:scale-105 text-white px-5 py-5 rounded-md bg-buttongreen hover:bg-colorhover font-syke-medium"
          onClick={handleEncodeButton}>
          Encode
        </button>
        <button
          className="transition-transform duration-300 hover:scale-105 text-white px-5 py-4 rounded-md bg-buttongreen hover:bg-colorhover font-syke-medium"
          onClick={handleAddDriverButton}>
          View Drivers
        </button>
        <button
          className="transition-transform duration-300 hover:scale-105 text-white px-5 py-4 rounded-md bg-buttongreen hover:bg-colorhover font-syke-medium"
          onClick={handleAddViolationButton}>
          View Violators
        </button>
      </div>
    </div>
  );
};

export default AdminLandingPage;
