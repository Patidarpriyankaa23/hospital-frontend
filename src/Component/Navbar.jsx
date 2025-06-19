// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {useAuth} from '../Context/authContext';
// import {useDoctorAuth} from '../Context/DrContext';
// import { toast } from 'react-toastify';

// function Navbar() {
//   const { isLoggedIn: isUserLoggedIn, user, logout } = useAuth(); 
//   const { isDoctorLoggedIn, doctor, drLogout } = useDoctorAuth();
//   const navigate = useNavigate();

//   function handleLogout() {
//     if (isUserLoggedIn) {
//       logout();
//       toast.success("Logged out successfully");
//       navigate("/login");
//     } else if (isDoctorLoggedIn) {
//       drLogout();
//       toast.success("Doctor logged out successfully");
//       navigate("/drlogin");
//     }
//   }

//   return (
//     <div className="bg-pink-900 text-white p-4">
//       <div className="flex items-center justify-between container mx-auto">
//         <div className="flex items-center space-x-3">
//           <img
//             src="https://www.shutterstock.com/image-vector/beautiful-get-well-soon-card-260nw-185897024.jpg"
//             alt="Hospital Logo"
//             className="w-12 h-auto"
//           />
//           <span className="text-2xl font-bold">Get-Well Hospital</span>
//         </div>

//         <div className="hidden md:flex space-x-8">
//           <Link to="/" className="hover:text-blue-600">Home</Link>
//           <Link to="/get-all" className="hover:text-gray-300">Get All Doctors</Link>
//           <Link to="/all-appointments" className='hover:text-gray-300'>Show Appointment</Link>


//           {isUserLoggedIn ? (
//             <>
//               <span className="font-semibold text-white">
//                 Welcome, {user?.firstName || "User"}!
//               </span>
//               <Link to="/add" className="hover:text-gray-300">Add Appointment</Link>
//               <button onClick={handleLogout} className="hover:text-gray-300">Logout</button>
//             </>
//           ) : isDoctorLoggedIn ? (
//             <>
//               <span className="font-semibold text-white">
//                 Welcome, Dr.{doctor?.doctorName || "Doctor"}!
//               </span>
//               <Link to="/add" className="hover:text-gray-300">Add Appointment</Link>
//               <button onClick={handleLogout} className="hover:text-gray-300">Logout</button>
//             </>
//           ) : (
//             <>
//               <Link to="/login" className="hover:text-gray-300">Login</Link>
//               <Link to="/drlogin" className="hover:text-gray-300">Doctor Login</Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import { useDoctorAuth } from '../Context/DrContext';
import { toast } from 'react-toastify';

function Navbar() {
  const { isLoggedIn: isUserLoggedIn, user, logout } = useAuth();
  const { isDoctorLoggedIn, doctor, drLogout } = useDoctorAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (isUserLoggedIn) {
      logout();
      toast.success("Logged out successfully");
      navigate("/login");
    } else if (isDoctorLoggedIn) {
      drLogout();
      toast.success("Doctor logged out successfully");
      navigate("/drlogin");
    }
  };

  return (
    <nav className="bg-pink-900 text-white w-full">
      <div className="flex flex-col sm:flex-col md:flex-row justify-between items-start md:items-center gap-4 p-4 flex-wrap">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src="https://www.shutterstock.com/image-vector/beautiful-get-well-soon-card-260nw-185897024.jpg"
            alt="Hospital Logo"
            className="w-12 h-12 object-cover rounded"
          />
          <h1 className="text-xl md:text-2xl font-bold">Get-Well Hospital</h1>
        </div>

        {/* Right: All Menu Items Always Visible */}
        <div className="flex flex-wrap gap-4 items-center text-center">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/get-all" className="hover:text-blue-300">Get All Doctors</Link>
          <Link to="/all-appointments" className="hover:text-blue-300">Show Appointment</Link>

          {isUserLoggedIn ? (
            <>
              <span className="font-semibold">Welcome, {user?.firstName || 'User'}!</span>
              <Link to="/add" className="hover:text-blue-300">Add Appointment</Link>
              <button onClick={handleLogout} className="hover:text-blue-300">Logout</button>
            </>
          ) : isDoctorLoggedIn ? (
            <>
              <span className="font-semibold">Welcome, Dr.{doctor?.doctorName || 'Doctor'}!</span>
              <Link to="/add" className="hover:text-blue-300">Add Appointment</Link>
              <button onClick={handleLogout} className="hover:text-blue-300">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-300">Login</Link>
              <Link to="/drlogin" className="hover:text-blue-300">Doctor Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
