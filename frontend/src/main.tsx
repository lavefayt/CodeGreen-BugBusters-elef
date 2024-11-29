import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "react-activity/dist/Spinner.css";

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
import UnauthorizedPage from "./pages/UnauthorizedPage.tsx";
<<<<<<< Updated upstream
import HomepageDriver from "./pages/HomepageDriver.tsx";
import RegistrationList from "./pages/RegistrationList.tsx";
=======
import useAuth from "./hooks/useAuth.ts";
import { AuthContextType } from "./types/user.types.ts";
import useRefresh from "./hooks/useRefresh.ts";
import useInterceptor from "./hooks/useInterceptor.ts";
import NotificationList from "./pages/NotificationList.tsx";
>>>>>>> Stashed changes

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* PUBLIC ROUTES */}
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage />
            // auth?.accessToken ? <Navigate to={location} /> : <LoginPage />
          }
        />
        <Route
          path="/signup"
          element={<SignUp />}
        />
        <Route
          path="/forgot"
          element={<Forgot />}
        />
        <Route
          path="/unauthorized"
          element={<UnauthorizedPage />}
        />

        {/* USER ROUTES */}
        {/* <Route element={<RequireAuth forAdmin={false} />}> */}
<<<<<<< Updated upstream
        <Route
          path="/homepage"
          element={<HomePage />}
        />
        <Route
          path="/about"
          element={<AboutPage />}
        />
        <Route
          path="/register-driver"
          element={<RegisterDriver />}
        />
        <Route
          path="/policies"
          element={<Policies />}
        />
        <Route
          path="/driverprofile"
          element={<DriverProfile />}
        />
=======
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register-driver" element={<RegisterDriver />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/driverprofile" element={<DriverProfile />} />
        <Route path="/notificationlist" element={<NotificationList />} />
>>>>>>> Stashed changes
        {/* </Route> */}

        {/* ADMIN ROUTES */}
        {/* <Route element={<RequireAuth forAdmin={true} />}> */}
        <Route
          path="/admin"
          element={<AdminLandingPage />}
        />
        <Route
          path="/driverslist"
          element={<DriversList />}
        />
        <Route
          path="/encode"
          element={<EncodePage />}
        />
        <Route
          path="/add-driver"
          element={<AddDriver />}
        />
        <Route
          path="/add-violation"
          element={<AddViolation />}
        />
        <Route
          path="/violatorslist"
          element={<ViolatorList />}
        />
        <Route
          path="/homepagedriver"
          element={<HomepageDriver />}
        />
        <Route
          path="/registration-list"
          element={<RegistrationList />}
        />

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
