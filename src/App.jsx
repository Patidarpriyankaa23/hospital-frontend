import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Homepage';
import Navbar from './Component/Navbar';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Verifyemail from './Pages/Verifyemail';
import { ToastContainer } from 'react-toastify';
import GetUser from './Pages/GetUser';
import DoctorSignUp from './Doctor/DoctorSignUp';
import DrSendEmail from './Doctor/DrSendEmail';
import GetAllDr from './Doctor/GetAllDr';
import Footer from './Component/Footer';
import DrLogin from './Doctor/DrLogin';
import Addappointment from './Appointment/Addappointment';
import UpdateAppointment from './Appointment/UpdateAppointment';
import DeleteAppointment from './Appointment/DeleteAppointment';
import ShowAppointments from './Appointment/ShowAppointment';
function App() {
  return (
    <Router>
      <div>
      <Navbar/>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/verify' element={<Verifyemail />} />
          <Route path='/me' element={<GetUser/>}/>

         <Route path='/drsignup' element={<DoctorSignUp/>}/>
         <Route path='/drlogin' element={<DrLogin/>}/>
         <Route path='/drsendemail' element={<DrSendEmail/>}/>
         <Route path='/get-all' element={<GetAllDr/>}/>

         <Route path='/add' element={<Addappointment/>}/>
         <Route path='/appointment/update/:id' element={<UpdateAppointment/>}/>
         <Route path='/delete' element={<DeleteAppointment/>}/>
         <Route path='/all-appointments' element={<ShowAppointments />} />

        </Routes>
        <ToastContainer position='bottom-right' />
        <Footer/>
      </div>
    </Router>
  )
}

export default App