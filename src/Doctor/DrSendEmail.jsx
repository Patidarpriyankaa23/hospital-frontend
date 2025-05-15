import React, { useState } from 'react'
import { toast } from 'react-toastify';
import api from '../axiosInstance';
import { Link, useNavigate } from 'react-router-dom';

function SendEmail() {
    const[email, setEmail] = useState("");
    const[otp, setOtp] = useState("");
 console.log(email);
 
    const navigate = useNavigate()

    const handleVerify = async (e) => {
        e.preventDefault();

        if (!email || !otp) {
            toast.error('Email and otp is required');
            return;
        }
        try {
            const response = await api.post("/doctor/drverify", {email, otp},
            );
            toast.success('Doctor email verified successfully!');

            navigate("/drlogin")
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error sending email');
        }
    }
    const handleResend = async () => {
        if (!email) {
          toast.error('Enter email first to resend OTP');
          return;
        }
        try {
            const res = await api.post("doctor/drsendemail", { email });
            toast.success('OTP resent successfully');
        } catch (error) {
            toast.error(err.response?.data?.message || 'Error resending OTP');
        }
    }
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='bg-gray-50 rounded-3xl shadow-xl w-full max-w-lg p-6'> 
        <h2 className='text-3xl font-semibold text-center mb-6'>Verify Doctor Email</h2>

        <form action="" onSubmit={handleVerify}className="space-y-6">
            <div>
                <input type="email" placeholder='enter dr email' value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" />

                <input type="text" placeholder='enter otp' value={otp} onChange={(e) => setOtp(e.target.value)} className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' />
            </div>
            <button type='submit'  className="w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black transition-all duration-300">Verify OTP</button>

            <button type='button' onClick={handleResend} className='w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black transition-all duration-300'>Resend Email</button>
        </form>

        <div className='mt-6 text-center'>
                    <Link to="/login">Login</Link>
                </div>
     </div>
     </div>
  )
}

export default SendEmail;