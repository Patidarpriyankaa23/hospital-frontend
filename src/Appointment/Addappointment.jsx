import React, {useState} from 'react'
import api from '../axiosInstance';
import { toast } from 'react-toastify';

function Addappointment() {
    const[patientId, setPatientId] = useState("");
    const[doctorId, setDoctorId] = useState("");
    const [disease, setDisease] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!patientId || !doctorId || !disease) {
            toast.error("All fields are required!");
            return;
          }
          
          try {
            const response = await api.post("/appointment/add", {patientId,
                doctorId,
                disease,
            });
            toast.success("Appointment created successfully!");
          } catch (error) {
            toast.error(error.response?.data?.message || "Error creating appointment");
          }
        };

  return (
    <div className="min-h-screen bg-white flex justify-center items-center px-4">
        <div className="bg-gray-50 rounded-3xl shadow-xl w-full max-w-lg p-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Create Appointment</h2>
        <form action="" onSubmit={handleSubmit} className="space-y-6">

            <div>
            <label htmlFor="patientId" className="block text-sm font-medium text-gray-700">Patient ID</label>
            <input type="text" value={patientId}  onChange={(e) => setPatientId(e.target.value)}  className="mt-1 block w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Patient ID" />
            </div>

            <div>
            <label>Doctor ID</label>
            <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} className="mt-1 block w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Doctor ID" />
            </div>

            <div>
                <label>Disease</label>
                <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)}  className="mt-1 block w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter Disease"/>
            </div>
            <button type="submit" className="w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black transition-all duration-300">Create Appointment</button>
        </form>
    </div>
    </div>
  )
};

export default Addappointment