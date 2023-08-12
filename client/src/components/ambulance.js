import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import './ambulance.css';

const ambulanceServicesData = [
  { id: 1, name: 'City Ambulance', location: 'Mukundapur', available: true },
  { id: 2, name: 'Rapid Response EMS', location: 'Chandannagar', available: true },
  { id: 3, name: 'LifeSaver Ambulance', location: 'Beleghata', available: false },
  { id: 4, name: 'MediWheels Ambulance', location: 'Kolkata Medical College', available: true },
  // Add more ambulance service data here
];

const AmbulanceServicesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [availableFilter, setAvailableFilter] = useState('all');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAvailableFilterChange = (event) => {
    setAvailableFilter(event.target.value);
  };

  const filteredServices = ambulanceServicesData.filter(
    (service) =>
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (availableFilter === 'all' || (availableFilter === 'available' && service.available) || (availableFilter === 'unavailable' && !service.available))
  );

  return (
    <>
    < Navbar />
    <div className="ambulance-services-list-container">
      <h1>Ambulance Services List</h1>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by service name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          value={availableFilter}
          onChange={handleAvailableFilterChange}
        >
          <option value="all">All</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
      </div>
      <ul className="services-list">
        {filteredServices.map((service) => (
          <li key={service.id} className="service-item">
            <h3>{service.name}</h3>
            <p>Location: {service.location}</p>
            <p>Status: {service.available ? 'Available' : 'Unavailable'}</p>
            <button className='doctors_btn'>Book Now</button>
          </li>
        ))}
      </ul>
      <button className='doctors_btn'><NavLink className="doctors_navlink" to="/Feedback">Feedback</NavLink></button>
    </div>
    </>
  );
};

export default AmbulanceServicesList;
