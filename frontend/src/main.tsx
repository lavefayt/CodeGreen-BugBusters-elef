import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

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
<<<<<<< HEAD
import HomepageDriver from "./pages/HomepageDriver.tsx";
import { BackendError } from "./types/error.types.ts";

interface User {
  accessToken: string;
  isAdmin: boolean;
}
=======
import { AuthProvider } from "./context/AuthContext.tsx";
import RequireAuth from "./components/RequireAuth.tsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.tsx";
import useAuth from "./hooks/useAuth.ts";
import { AuthContextType } from "./types/user.types.ts";
>>>>>>> f3128715ec253dbfd3540eae96476e1c0b60bf3a

const Main = () => {
  const { auth }: AuthContextType = useAuth();
  useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/admin" element={<AdminLandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/driver" element={<DriversList />} />
        <Route path="/encode" element={<EncodePage />} />
        <Route path="/register-driver" element={<RegisterDriver />} />
        <Route path="/add-driver" element={<AddDriver />} />
        <Route path="/add-violation" element={<AddViolation />} />
        <Route path="/violatorslist" element={<ViolatorList />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/driverprofile" element={<DriverProfile />} />
=======
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
          element={<LoginPage />}
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
        <Route element={<RequireAuth forAdmin={false} />}>
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
        </Route>

        {/* ADMIN ROUTES */}
        <Route element={<RequireAuth forAdmin={true} />}>
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
        </Route>

        {/* <Route
          path="/contacts"
          element={<Contacts />}
        /> */}
>>>>>>> f3128715ec253dbfd3540eae96476e1c0b60bf3a
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
