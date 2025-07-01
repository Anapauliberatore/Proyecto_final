import React, { createContext, useState, useEffect } from "react";

export const LoginPermisoContext = createContext();

export function LoginPermisoProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem("token") !== null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(token !== null);
  }, []);

  const login = () => {
    localStorage.setItem("token", "sesion-activa");
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <LoginPermisoContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginPermisoContext.Provider>
  );
}
