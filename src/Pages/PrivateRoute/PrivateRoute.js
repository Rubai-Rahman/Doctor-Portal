import { CircularProgress } from "@mui/material";

import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = () => {
  const { user, isLoading } = useAuth();
  let location = useLocation();
  if (isLoading) {
    return <CircularProgress />;
  }
  if (user.email) {
    return <Outlet/>;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
