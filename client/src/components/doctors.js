import Navbar from './Navbar'
import React, { useState } from 'react';
import './doctors.css';

const doctorsData = [
  { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
  { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
  { id: 3, name: 'Dr. Michael Johnson', specialization: 'Pediatrician' },
  // Add more doctor data here
];

const DoctorsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSpecializationChange = (event) => {
    setSelectedSpecialization(event.target.value);
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedSpecialization === '' ||
        doctor.specialization.toLowerCase().includes(selectedSpecialization.toLowerCase()))
  );

  return (
    <> 
    < Navbar />
    <div className="doctors-list-container">
      <h1>Doctors List</h1>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by doctor's name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          value={selectedSpecialization}
          onChange={handleSpecializationChange}
        >
          <option value="">All Specializations</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Pediatrician">Pediatrician</option>
          {/* Add more specialization options here */}
        </select>
      </div>
      <ul className="doctors-list">
        {filteredDoctors.map((doctor) => (
          <li key={doctor.id} className="doctor-item">
            <h3>{doctor.name}</h3>
            <p>Specialization: {doctor.specialization}</p>
          </li>
        ))}
      </ul>
      <div className="feedback-form">
        <h2>Leave Feedback</h2>
        <textarea
          rows="4"
          placeholder="Enter your feedback here..."
          value={feedback}
          onChange={handleFeedbackChange}
        />
        <button id='doctors_submit_btn' onClick={() => setFeedback('')}>Submit Feedback</button>
      </div>
    </div>
    </>
  );
};

export default DoctorsList;
