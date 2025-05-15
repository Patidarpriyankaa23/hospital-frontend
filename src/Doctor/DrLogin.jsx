import React, { useState } from "react";
import api from "../axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function DrLogin() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const res = await api.post('/doctor/drlogin',{email, password},
            );
            if(res.status == 200){
                toast.success("Login Successfull") 
            navigate("/")
        }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message)
        }
    }
    return(
    <div className='min-h-screen bg-white flex justify-center items-center'>
        <div className="bg-gray-50 rounded-3xl shadow-xl w-full max-w-lg p-6 my-10">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">Doctor ogin</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="email">Email</label>
            <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder="email" required onChange={(e) => setemail(e.target.value)} /></div>

            <div>
                <label htmlFor="password">Password</label>
            <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} /></div>
            <button className='w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black ransition-all duration-300' type="submit">Login</button>
        </form>
        <div className="mt-4 text-center">
            <Link to="/" className='self-end text-black font-semibold underline mr-1'>Home</Link>
        </div>
    </div>
    </div>
    );
}
export default DrLogin;