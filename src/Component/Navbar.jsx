import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useAuth} from '../Context/authContext';
import useDoctorAuth from '../Context/DrContext';
import { toast } from 'react-toastify';

function Navbar() {
  const { isLoggedIn: isUserLoggedIn, user, logout } = useAuth(); 
  const { isDoctorLoggedIn, doctor, drLogout } = useDoctorAuth();
  const navigate = useNavigate();

  function handleLogout() {
    if (isUserLoggedIn) {
      logout();
      toast.success("Logged out successfully");
      navigate("/login");
    } else if (isDoctorLoggedIn) {
      drLogout();
      toast.success("Doctor logged out successfully");
      navigate("/drlogin");
    }
  }

  return (
    <div className="bg-pink-900 text-white p-4">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center space-x-3">
          <img
            src="https://www.shutterstock.com/image-vector/beautiful-get-well-soon-card-260nw-185897024.jpg"
            alt="Hospital Logo"
            className="w-12 h-auto"
          />
          <span className="text-2xl font-bold">Get-Well Hospital</span>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/get-all" className="hover:text-gray-300">Get All Doctors</Link>
          <Link to="/all-appointments" className='hover:text-gray-300'>Show Appointment</Link>


          {isUserLoggedIn ? (
            <>
              <span className="font-semibold text-white">
                Welcome, {user?.firstName || "User"}!
              </span>
              <Link to="/add" className="hover:text-gray-300">Add Appointment</Link>
              <button onClick={handleLogout} className="hover:text-gray-300">Logout</button>
            </>
          ) : isDoctorLoggedIn ? (
            <>
              <span className="font-semibold text-white">
                Welcome, Dr.{doctor?.doctorName || "Doctor"}!
              </span>
              <Link to="/add" className="hover:text-gray-300">Add Appointment</Link>
              <button onClick={handleLogout} className="hover:text-gray-300">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-gray-300">Login</Link>
              <Link to="/drlogin" className="hover:text-gray-300">Doctor Login</Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
