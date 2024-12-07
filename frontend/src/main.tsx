import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "react-activity/dist/Spinner.css";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "./pages/LoginPage.tsx";
import HomePage from "./pages/HomePage.tsx";
import SignUp from "./pages/SignUpPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";

import AdminLandingPage from "./pages/AdminHomePage.tsx";
import EncodePage from "./pages/EncodePage.tsx";
import ViolatorList from "./pages/ViolatorList.tsx";
import DriversList from "./pages/DriverList.tsx";
import DriverProfile from "./pages/DriverProfileSection.tsx";
import RegisterDriver from "./pages/RegisterDriver.tsx";
import AddDriver from "./pages/AddDriver.tsx";
import AddViolation from "./pages/AddViolation.tsx";
import Forgot from "./pages/Forgot.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.tsx";
import HomepageDriver from "./components/NotificationsList.tsx";
import RegistrationList from "./pages/RegistrationList.tsx";
import RequireAuth from "./components/RequireAuth.tsx";
import PersistLogin from "./components/PersistLogin.tsx";
import AddCar from "./pages/AddCar.tsx";
import Loading from "./components/Loading.tsx";
import { LoadingContextType } from "./types/loading.types.ts";
import useLoading from "./hooks/context-hooks/useLoading.ts";
import { LoadingProvider } from "./context/LoadingContext.tsx";
import { Slide, ToastContainer } from "react-toastify";
import ViewProfile from "./pages/ViewProfile.tsx";
import Protocols from "./components/Policies/protocols.tsx";
import Rules from "./components/Policies/rules.tsx";
import ChangePassword from "./pages/ChangePassword.tsx";

const Main = () => {
  const { appLoading }: LoadingContextType = useLoading();

  return appLoading ? (
    <div className="flex justify-center items-center h-screen bg-hoverbutton">
      <Loading loading={appLoading} />
    </div>
  ) : (
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

        <Route element={<PersistLogin />}>
          {/* FOR ALL LOGGED IN */}
          <Route
            path="/view-profile/:driverId"
            element={<ViewProfile />}
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
              path="/driverprofile"
              element={<DriverProfile />}
            />
            <Route
              path="/homepagedriver"
              element={<HomepageDriver />}
            />
            <Route
              path="/protocols"
              element={<Protocols />}
            />
            <Route
              path="/rules"
              element={<Rules />}
            />

            <Route 
            path="/changepassword"
            element = { <ChangePassword/> }
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
            <Route
              path="/registration-list"
              element={<RegistrationList />}
            />
            <Route
              path="/add-car"
              element={<AddCar />}
            />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="dark"
        transition={Slide}
        toastClassName={`text-xs`}
      />
      <AuthProvider>
        <LoadingProvider>
          <Main />
        </LoadingProvider>
      </AuthProvider>
    </StrictMode>
  );
}
