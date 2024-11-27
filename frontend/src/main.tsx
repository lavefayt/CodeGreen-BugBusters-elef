import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import SignUp from "./pages/SignUpPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

import AdminLandingPage from "./pages/AdminHomePage.tsx";
import EncodePage from "./pages/EncodePage.tsx";
import ViolatorList from "./pages/ViolatorList.tsx";
import DriversList from "./pages/DriverList.tsx";
import Policies from "./pages/Policies.tsx";
import DriverProfile from "./pages/DriverProfileSection.tsx";
import RegisterDriver from "./pages/RegisterDriver.tsx";
import AddDriver from "./pages/AddDriver.tsx";
import AddViolation from "./pages/AddViolation.tsx";
import Forgot from "./pages/Forgot.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import RequireAuth from "./components/RequireAuth.tsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.tsx";
import useAuth from "./hooks/useAuth.ts";
import { AuthContextType } from "./types/user.types.ts";
import useRefresh from "./hooks/useRefresh.ts";
import useInterceptor from "./hooks/useInterceptor.ts";

const Main = () => {
  const { auth }: AuthContextType = useAuth();
  const { loading, error } = useRefresh();

  useInterceptor();

  useEffect(() => {
    console.log(auth);
    console.log(location.pathname);
    if (error) console.log(error);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={
            <LoginPage />
            // auth?.accessToken ? <Navigate to={location} /> : <LoginPage />
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/unauthorized" element={<UnauthorizedPage />} />

        {/* USER ROUTES */}
        {/* <Route element={<RequireAuth forAdmin={false} />}> */}
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register-driver" element={<RegisterDriver />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/driverprofile" element={<DriverProfile />} />
        {/* </Route> */}

        {/* ADMIN ROUTES */}
        {/* <Route element={<RequireAuth forAdmin={true} />}> */}
        <Route path="/admin" element={<AdminLandingPage />} />
        <Route path="/driverslist" element={<DriversList />} />
        <Route path="/encode" element={<EncodePage />} />
        <Route path="/add-driver" element={<AddDriver />} />
        <Route path="/add-violation" element={<AddViolation />} />
        <Route path="/violatorslist" element={<ViolatorList />} />
        {/* </Route> */}

        {/* <Route
          path="/contacts"
          element={<Contacts />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </StrictMode>
  );
}
