import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../Context/authContext';
import api from '../axiosInstance';

function GetUser() {
  const { user, isLoggedIn, logout } = useAuth();
  const [loading, setLoading] = useState("")

  useEffect(() => {
    
    if (isLoggedIn && !user?.firstName) {
      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [isLoggedIn, user]);
  const fetchUserData = async () => {
    try {
      const response = await api.get("/user/me"); 
      const userData = response.data.user;
      if (userData) {
        setLoading(false);
        toast.success('User fetched successfully.');
      }
    } catch (error) {
      setLoading(false);
      setError('Failed');
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className="profile-container min-h-screen bg-gray-100 flex justify-center items-center">
      <div className='bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 my-10'>
      <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>User Profile</h2>

      <div>
        <div className='space-y-4'>

       <div> <p className='text-lg font-medium text-gray-700'><strong>First Name:</strong> {user?.firstName}</p></div>
        <div><p className='text-lg font-medium text-gray-700'><strong>Last Name:</strong> {user?.lastName}</p></div>
         <div><p className='text-lg font-medium text-gray-700'><strong>Email:</strong> {user?.email}</p></div>
         <div><p className='text-lg font-medium text-gray-700'><strong>Phone Number:</strong> {user?.phoneNum}</p></div>
         <div> <p className='text-lg font-medium text-gray-700'><strong>Date of Birth:</strong> {user?.dateOfBirth}</p></div>
         <div><p className='text-lg font-medium text-gray-700'><strong>Gender:</strong> {user?.gender}</p></div>
         <div><p className='text-lg font-medium text-gray-700'><strong>Location:</strong> {user?.location}</p></div>
        </div>
       <div className="mt-6 text-center"><button onClick={logout} className='w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black transition-all duration-300'>Logout</button></div> 
      </div>
    </div>
    </div>
  );
}

export default GetUser;
