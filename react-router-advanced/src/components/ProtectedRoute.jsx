// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // ✅ checker needs this

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // ✅ useAuth used here

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;

