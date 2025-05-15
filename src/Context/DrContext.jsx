// src/Context/DrContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import api from "../axiosInstance";

export const DoctorAuthContext = createContext();

export function DoctorAuthProvider({ children }) {
  const [doctor, setDoctor] = useState({});
  const [isDoctorLoggedIn, setIsDoctorLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isDoctorLoggedIn")) || false
  );

  useEffect(() => {
    async function fetchDoctor() {
      try {
        const res = await api.get("/doctor/get-all");
        setDoctor(res.data.doctor);
        setIsDoctorLoggedIn(true);
        localStorage.setItem("isDoctorLoggedIn", JSON.stringify(true));
      } catch (error) {
        console.error(error);
        setDoctor({});
        setIsDoctorLoggedIn(false);
        localStorage.setItem("isDoctorLoggedIn", JSON.stringify(false));
      }
    }
    fetchDoctor();
  }, []);

  function drSignup(doctor) {
    setDoctor(doctor);
  }

  function drLogin(doctor) {
    setDoctor(doctor);
    setIsDoctorLoggedIn(true);
    localStorage.setItem("isDoctorLoggedIn", JSON.stringify(true));
  }

  function drLogout() {
    setDoctor({});
    setIsDoctorLoggedIn(false);
    localStorage.setItem("isDoctorLoggedIn", JSON.stringify(false));
  }

  return (
    <DoctorAuthContext.Provider
      value={{ doctor, drSignup, isDoctorLoggedIn, drLogin, drLogout }}
    >
      {children}
    </DoctorAuthContext.Provider>
  );
}

export const useDoctorAuth = () => useContext(DoctorAuthContext);
