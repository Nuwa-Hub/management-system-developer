import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element, path }) {
  const user = useSelector((state) => state?.user?.currentUser);

  if (user == null || user == false) {
    return <Navigate to="/login" />;
  }
  return user ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
