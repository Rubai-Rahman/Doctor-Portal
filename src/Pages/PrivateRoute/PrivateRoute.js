import { CircularProgress } from "@mui/material";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = () => {
  const location = useLocation();
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <CircularProgress />;
  } else
    return user.email ? (
      <Outlet />
    ) : (
      <Navigate to="/login" replace state={{ from: location }} />
    );
};

export default PrivateRoute;
