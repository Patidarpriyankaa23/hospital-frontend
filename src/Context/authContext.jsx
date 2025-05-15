// src/Context/authContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import api from "../axiosInstance";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await api.get("/user/me");
        setUser(res.data.user);
        setIsLoggedIn(true);
        localStorage.setItem("isLoggedIn", JSON.stringify(true));
      } catch (error) {
        console.log(error);
        setUser({});
        setIsLoggedIn(false);
        localStorage.setItem("isLoggedIn", JSON.stringify(false));
      }
    }
    fetchUser();
  }, []);

  function signup(user) {
    setUser(user);
  }

  function drsignup(user) {
    setUser(user);
  }

  function login(user) {
    setUser(user);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  }

  function logout() {
    setUser({});
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", JSON.stringify(false));
  }

  return (
    <AuthContext.Provider
      value={{ user, signup, drsignup, isLoggedIn, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
