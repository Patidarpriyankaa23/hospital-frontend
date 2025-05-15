import React, {user, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../axiosInstance';
import useAuth from '../Context/authContext';
import { toast } from 'react-toastify';

function SignUp() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [location, setLocation] = useState("");

  const navigate = useNavigate()

  const { signup } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/user/signup', { firstName, lastName, password, dateOfBirth, email, gender, phoneNum, location },
      );

      if (response.status === 201) {
        signup(response.data.user)
        toast.success("Signup successful! Verify your email now.")
      }

      navigate("/verify")

    } catch (error) {
      console.log(error.response);
      toast.error(error.response?.data?.message || "Something went wrong")
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className='min-h-screen bg-white flex justify-center items-center'>

      <div className='bg-gray-50 rounded-3xl shadow-xl w-full max-w-lg p-6 my-10'>

        <h2 className='text-3xl font-semibold text-center text-gray-800-950-800 mb-6'>Sign Up</h2>

        <form onSubmit={handleSubmit} id='signupForm' className="space-y-6">

            <div>
          <label htmlFor="firstName">FirstName</label>
          <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:right-2 focus:ring-blue-400' type="text" placeholder='firstname' onChange={(e) => setFirstName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="lastName">LastName</label>
          <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='lastname' onChange={(e) => setLastName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="password">Password</label>
          <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div>
            <label htmlFor="date of birth">Date Of Birth</label>
          <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="date" placeholder='date' onChange={(e) => setDateOfBirth(e.target.value)} />
          </div>

          <div>
            <label htmlFor="email">Email</label>
          <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='flex items-center gap-x-4'>
            <label htmlFor="gender">Gender:</label>

            <div className='flex items-center'>
              <label htmlFor="male">Male</label>
              <input id='male' type="radio" name="gender" value="male" className="radio radio-secondary ml-2"  onChange={handleGenderChange}
          checked={gender === 'male'} />
            </div>

            <div className='flex items-center'>
              <label htmlFor="female">Female</label>
              <input id='female' type="radio" name="gender" value='female' className="radio radio-secondary ml-2"  onChange={handleGenderChange}
          checked={gender === 'female'}/>
            </div>
          </div>

            <div>
              <label htmlFor="phonenumber">PhoneNum</label>
          <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='phonenum' onChange={(e) => setPhoneNum(e.target.value)} />
          </div>

          <div>
            <label htmlFor="location">Location</label>
          <input className='w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400' type="text" placeholder='location' onChange={(e) => setLocation(e.target.value)} />
          </div>
          <button className='w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black transition-all duration-300' type='submit'>Sign Up</button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
