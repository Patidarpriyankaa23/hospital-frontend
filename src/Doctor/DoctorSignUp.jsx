import React, { useState } from 'react'
import api from '../axiosInstance';
import useAuth from '../Context/authContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function DoctorSignUp() {
    const [doctorName, setDoctorName] = useState("");
  const [qualifications, setQualifications] = useState("")
  const [specialization, setSpecialization] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [ yearsOfExperience, setYearsofExperience] = useState("");
    const[password, setPassword] = useState("")
 
  const { drsignup } = useAuth();

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await api.post('/doctor/drsignup', {
          doctorName,
          qualifications,
          specialization,
          phoneNumber,
          email,
          yearsOfExperience,
         password,
        });
        if (response.status === 201) {
            drsignup(response.data.user);
            toast.success("Doctor signup successful! Please verify your email.");
        }
        navigate("/drsendemail")
        } catch (error) {
          console.log(error.response);
          toast.error(error.response?.data?.message || "Something went wrong");
        }
      };

  return (
    <div className='min-h-screen bg-white flex justify-center items-center'>

    <div className='bg-gray-50 rounded-3xl shadow-xl w-full max-w-lg p-6 my-10'>

      <h2 className='text-3xl font-semibold text-center text-gray-800-950-800 mb-6'>Doctor Sign Up</h2>

      <form onSubmit={handleSubmit} id='signupForm' className="space-y-6">

          <div>
        <label htmlFor="doctorName">DoctortName</label>
        <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:right-2 focus:ring-blue-400' type="text" placeholder='doctorname' onChange={(e) => setDoctorName(e.target.value)} />
        </div>

        <div>
          <label htmlFor="qualifications">Qualifications</label>
        <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='qualifications' onChange={(e) => setQualifications(e.target.value)} />
        </div>

        <div>
          <label htmlFor="specialization">Specialization</label>
        <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='specialization' onChange={(e) => setSpecialization(e.target.value)} />
        </div>

        <div>
            <label htmlFor="phonenumber">PhoneNumber</label>
        <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="tel" placeholder='phonenumber' onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>

        <div>
          <label htmlFor="email">Email</label>
        <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label htmlFor=" yearsOfExperience">YearsofExperience</label>
        <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="number" placeholder=' yearsOfExperience' onChange={(e) => setYearsofExperience(e.target.value)} />
        </div>

        <div>
          <label htmlFor="password">password</label>
        <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </div>


        <button className='w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black transition-all duration-300' type='submit'> Doctor Sign Up</button>
      </form>
      <div className="mt-6 text-center">
        <Link to="/login">Login</Link>
      </div>
    </div>
  </div>
);
}
export default DoctorSignUp;
