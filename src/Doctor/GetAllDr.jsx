import React, { useState, useEffect } from 'react';
import api from '../axiosInstance';

const GetAllDr = () => {
    const [doctors, setDoctors] = useState([]);

    const [filters, setFilters] = useState({
    });

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await api.get('/doctor/get-all', { doctors });
                setDoctors(response.data);  
            } catch (error) {
                console.log(error);
            }
        };

        fetchDoctors();
    }, [filters]);  

    const handleFilterChange = (e) => {
        setFilters(e.target.value)
        };

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center mb-8">Doctors</h2>
            
            <div className="flex flex-wrap gap-4 mb-6">
                <input
                    type="text"name="search" value={filters.search}onChange={handleFilterChange}placeholder="Search by name or qualification" className="px-4 py-2 border rounded-lg shadow-sm w-full md:w-64"
                />
                <select
                    name="specialization" value={filters.specialization}onChange={handleFilterChange} className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full md:w-64"
                    >
                    <option value="">Specialization</option>
                    <option value="Cardiology">Cardiology</option>
                    <option value="Neurology">Neurology</option>
                    <option value="Orthopedics">Orthopedics</option>
                </select>

                <select name="available" value={filters.available} onChange={handleFilterChange} className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full md:w-64"
                >
                    <option value="">Availability</option>
                    <option value="true">Available</option>
                    <option value="false">Not Available</option>
                </select>

                <select name="status"value={filters.status} onChange={handleFilterChange}className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full md:w-64"
                >
                    <option value="">Status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
        <div className="bg-white shadow-md rounded-lg p-6">
            <ul className="space-y-4">
                {doctors.length > 0 ? (
                    doctors.map(doctor => (
                        <li key={doctor._id} className="p-4 border-b border-gray-200">
                            <h3 className="text-xl font-semibold">{doctor.doctorName}</h3>
                            <p className='text-gray-600'>{doctor.specialization}</p>
                            <p className='text-gray-500'>Years of Experience: {doctor.yearsOfExperience}</p>
                            <p className='text-gray-500'>Status: <span className={doctor.status === 'active' ? 'text-green-500' : 'text-red-500'}>
                                        {doctor.status === 'active' ? 'Active' : 'Inactive'}
                                    </span></p>
                            <p className="text-gray-500">Availability: <span className={doctor.available ? 'text-green-500' : 'text-red-500'}>
                                        {doctor.available ? 'Available' : 'Not Available'}
                                    </span>
                                </p>
                        </li>
                    ))
                ) : (
                    <p className='text-center text-gray-500'>No doctors found matching the criteria.</p>
                )}
            </ul>
        </div>
        </div>
    );
};
export default GetAllDr;
