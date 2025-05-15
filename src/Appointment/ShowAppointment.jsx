import React, { useEffect, useState } from 'react';
import api from '../axiosInstance';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ShowAppointments() {
    const [appointments, setAppointments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const response = await api.get('/appointment/getall');
                setAppointments(response.data);
            } catch (error) {
                toast.error('Error fetching appointments');
            }
        };

        fetchAppointments();
    }, []);

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this appointment?")) return;

        try {
            await api.delete('/appointment/delete', { data: { appointmentId: id } });
            toast.success('Appointment deleted successfully');

            setAppointments((prevAppointments) =>
                prevAppointments.filter((a) => a._id !== id)
            );
        } catch (error) {
            toast.error(error.response?.data?.message || 'Error deleting appointment');
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-3xl font-semibold mb-4">All Appointments</h2>
            <table className="w-full table-auto bg-white rounded-xl shadow-md">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="px-4 py-2">ID</th>
                        <th className="px-4 py-2">Patient ID</th>
                        <th className="px-4 py-2">Doctor ID</th>
                        <th className="px-4 py-2">Disease</th>
                        <th className="px-4 py-2">Status</th>
                        <th className="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment) => (
                        <tr key={appointment._id} className="border-b">
                            <td className="px-4 py-2">{appointment._id}</td>
                            <td className="px-4 py-2">{appointment.patientId}</td>
                            <td className="px-4 py-2">{appointment.doctorId}</td>
                            <td className="px-4 py-2">{appointment.disease}</td>
                            <td className="px-4 py-2">{appointment.status}</td>
                            <td className="px-4 py-2 space-x-2">
                                <button
                                    onClick={() => navigate(`/appointment/update/${appointment._id}`)}
                                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-800"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(appointment._id)}
                                    className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-800"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ShowAppointments;
