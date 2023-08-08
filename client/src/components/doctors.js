import Navbar from './Navbar'
import React, { useState } from 'react';
import './doctors.css';

const doctorsData = [
  { id: 1, name: 'Dr. Parijat Debchoudhry', specialization: 'Cardiologist', Experience: '20+ years', Location: 'Mukundapur AMRI Hospital', Fees: '500', },
  { id: 2, name: 'Dr. Soumyakanti Dutta', specialization: 'Cardiologist', Experience: '15+ years', Location: 'Chandannagar Hospital', Fees: '1200' },
  { id: 3, name: 'Dr. Sumanta Chatterjee', specialization: 'Dermatologist', Experience: '14+ years', Location: 'beleghata ID Hospital', Fees: '700' },
  { id: 4, name: 'Dr. Soumyabrata acharya', specialization: 'Pediatrician', Experience: '10+ years', Location: 'SSKM Hospital', Fees: '800' },
  { id: 5, name: 'Dr. Dipanwita Roy', specialization: 'Pediatrician', Experience: '5+ years', Location: 'KOLkata Medical College & Hospital', Fees: '1000' },
  // Add more doctor data here
];

const DoctorsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleBookNow = (doctorName) => {
    alert(`Booking appointment with Dr. ${doctorName}`);
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
              <div className="details">
                <h3>{doctor.name}</h3>

                <div>

                  <p>Specialization: {doctor.specialization}</p>
                  <p>Experience: {doctor.Experience}</p>
                </div>
                <div>

                  <p>Location: {doctor.Location}</p>
                  <p>Fees: {doctor.Fees}</p>
                </div>

              </div>
              <div className="actions">
                <button onClick={() => handleBookNow(doctor.name)}>Book Now</button>
              </div>
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
