import React, { useState } from 'react'
import { useAuth } from '../Context/authContext';
import { toast } from 'react-toastify';
import api from '../axiosInstance';
import { Link, useNavigate } from 'react-router-dom';

function Verifyemail() {
    const [otp, setOtp] = useState("");

    const navigate = useNavigate()
    const { user } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/user/verify", { email: user.email, otp },
            );

            if (response.status === 200) {
                toast.success("Email verified successful")
            }
            navigate("/login")
        } catch (error) {
            toast.error(error.response?.data?.message || "Internal server error.")
            console.log(error);
        }
    }
    const handleResend = async (e) => {
        e.preventDefault();
        console.log(user);

        try {
            const resend = await api.post("/user/resend", { email: user.email },
            );
            if (resend.status === 200) {
                toast.success("email resend successfully")
            }

        } catch (error) {
            toast.error(error.resend?.data?.message || "Internal Server error")
            console.log(error);

        }
    }

    return (
        <div className='min-h-screen bg-white flex justify-center items-center'>
            <div className='bg-gray-50 rounded-3xl shadow-xl w-full max-w-lg p-6 my-10'>
                <h2 className='text-3xl font-semibold text-center text-gray-800-950-800 mb-6'>Verify Email </h2>

                <form action="" onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="otp">OTP</label>
                        <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-3' type="text" placeholder='Enter otp' value={otp} onChange={(e) => setOtp(e.target.value)} /></div>

                    <button className='w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black ransition-all duration-300 mb-5'>Verify otp</button>
                </form>

                <div>
                    <button className='w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black ransition-all duration-300' onClick={handleResend}>Resend OTP</button>
                </div>

                <div className='mt-6 text-center'>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Verifyemail;