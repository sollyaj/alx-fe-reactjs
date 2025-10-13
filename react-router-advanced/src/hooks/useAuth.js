// src/hooks/useAuth.js
import { useState, useEffect } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // This mimics checking for an auth token or user session
  useEffect(() => {
    const authStatus = localStorage.getItem("auth") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  // A simple login/logout toggle for demonstration
  const login = () => {
    localStorage.setItem("auth", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.setItem("auth", "false");
    setIsAuthenticated(false);
  };

  return { isAuthenticated, login, logout };
};
