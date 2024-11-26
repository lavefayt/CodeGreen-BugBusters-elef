import React from "react";
import useAuth from "../hooks/useAuth";
import { AuthContextType } from "../types/user.types";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const RequireAuth = ({ forAdmin }: { forAdmin: boolean }) => {
  const { auth }: AuthContextType = useAuth();
  const location = useLocation();

  return auth?.isAdmin && forAdmin ? (
    <Outlet />
  ) : auth?.accessToken ? (
    !auth?.isAdmin && !forAdmin ? (
      <Outlet />
    ) : (
      <Navigate
        to="/unauthorized"
        state={{ from: location }}
        replace
      />
    )
  ) : (
    <Navigate
      to="/login"
      state={{ from: location }}
      replace
    />
  );
};

export default RequireAuth;
