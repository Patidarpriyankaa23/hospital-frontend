import React, { useState } from 'react';
import api from '../axiosInstance';
import { toast } from 'react-toastify';

function UpdateAppointment() {
    const [appointmentId, setAppointmentId] = useState("");
    const [status, setStatus] = useState("");
    const [patientId, setPatientId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!appointmentId || !status || !patientId) {
            toast.error("All fields are required!");
            return;
        }

        try {
            const response = await api.put(`/appointment/update/${appointmentId}`, {
                status,
                patientId,
            });
            toast.success("Appointment updated successfully!");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error updating appointment");
        }
    };

    return (
        <div className="min-h-screen bg-white flex justify-center items-center px-4">
            <div className="bg-gray-50 rounded-3xl shadow-xl w-full max-w-lg p-6">
                <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Update Appointment</h2>
                <form action="" onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="appointmentId" className="block text-sm font-medium text-gray-700">Appointment ID</label>
                        <input type="text"value={appointmentId}onChange={(e) => setAppointmentId(e.target.value)} className="mt-1 block w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter Appointment ID"/>
                    </div>

                    <div>
                        <label>Status</label>
                        <input type="text"value={status}onChange={(e) => setStatus(e.target.value)}className="mt-1 block w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter Status"/>
                    </div>

                    <div>
                        <label>Patient ID</label>
                        <input type="text" value={patientId} onChange={(e) => setPatientId(e.target.value)} className="mt-1 block w-full p-4 bg-gray-100 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter Patient ID" />
                    </div>

                    <button type="submit" className="w-full py-4 bg-pink-900 text-white text-lg font-semibold rounded-xl hover:bg-black transition-all duration-300">Update Appointment</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateAppointment;
