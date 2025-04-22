import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const location = useLocation();
  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
