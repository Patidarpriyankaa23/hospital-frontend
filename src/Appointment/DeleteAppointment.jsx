import React, { useState } from 'react';
import api from '../axiosInstance';
import { toast } from 'react-toastify';

function DeleteAppointment() {
    const [appointmentId, setAppointmentId] = useState("");

    const handleDelete = async (e) => {
        e.preventDefault();

        if (!appointmentId) {
            toast.error("Appointment ID is required!");
            return;
        }

        try {
            const response = await api.delete(`/appointment/delete`, {
                data: { appointmentId }
            });
            toast.success("Appointment deleted successfully");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error deleting appointment");
        }
    };

    return (
        <div className="min-h-screen bg-white flex justify-center items-center px-4">
            <div className="bg-gray-50 rounded-3xl shadow-xl w-full max-w-lg p-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Delete Appointment</h2>
                <form action="" onSubmit={handleDelete} className="space-y-6">
                    <div>
                        <label htmlFor="appointmentId" className="block text-sm font-medium text-gray-700">Appointment ID</label>
                        <input type="text" value={appointmentId} onChange={(e) => setAppointmentId(e.target.value)} className="mt-1 block w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter Appointment ID"/>
                    </div>

                    <button type="submit" className="w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black transition-all duration-300">Delete Appointment</button>
                </form>
            </div>
        </div>
    );
}

export default DeleteAppointment;
