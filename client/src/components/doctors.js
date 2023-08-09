import Navbar from './Navbar'
import React, { useState } from 'react';
import Modal from 'react-modal';
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

  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleOpenModal = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

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
            type="text" className='doctors_find_input'
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
              {/* ... (other details) */}
              <button className='doctors_btn' onClick={() => handleOpenModal(doctor)}>View Details</button>
            </li>
          ))}
        </ul>
        {selectedDoctor && (
          <Modal
            isOpen={true}
            onRequestClose={handleCloseModal}
            contentLabel="Doctor Details"
            className="modal"
            overlayClassName="modal-overlay"
          >
            <h2>Doctor Details</h2>
            <p><b>Name:</b> {selectedDoctor.name}</p>
            <p><b>Specialization:</b> {selectedDoctor.specialization}</p>
            <p><b>Experience:</b> {selectedDoctor.Experience}</p>
            <p><b>Location:</b> {selectedDoctor.Location}</p>
            <p><b>Fees:</b> {selectedDoctor.Fees}</p>
            <button className='doctors_btn' onClick={handleCloseModal}>Close</button>
          </Modal>
        )}
        <div className="feedback-form">
          <h2>Leave Feedback</h2>
          <textarea
            rows="4"
            id='doctors_feedback_textarea'
            placeholder="Enter your feedback here..."
            value={feedback}
            required
            onChange={handleFeedbackChange}
          />
          <button className='doctors_btn' onClick={() => setFeedback('')}>Submit Feedback</button>
        </div>
      </div>
      
    </>
  );
};

export default DoctorsList;
