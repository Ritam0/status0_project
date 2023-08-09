import React, { useState } from 'react';
import Navbar from './Navbar'
import './Medical_store.css';

const medicalStoresData = [
  { id: 1, name: 'Healthy Pharmacy', location: 'Mukundapur', isOpen: true },
  { id: 2, name: 'MediCare Pharmacy', location: 'Chandannagar', isOpen: false },
  { id: 3, name: 'Wellness Drugstore', location: 'Beleghata', isOpen: true },
  { id: 4, name: 'Caring Pharmacy', location: 'Kolkata Medical College', isOpen: true },
  // Add more medical store data here
];

const MedicalStoresList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpenFilter, setIsOpenFilter] = useState('all');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenFilterChange = (event) => {
    setIsOpenFilter(event.target.value);
  };

  const filteredStores = medicalStoresData.filter(
    (store) =>
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (isOpenFilter === 'all' || (isOpenFilter === 'open' && store.isOpen) || (isOpenFilter === 'closed' && !store.isOpen))
  );

  return (
    <>
    < Navbar />
    <div className="medical-stores-list-container">
      <h1>Medical Stores List</h1>
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search by store name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          value={isOpenFilter}
          onChange={handleOpenFilterChange}
        >
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="closed">Closed</option>
        </select>
      </div>
      <ul className="stores-list">
        {filteredStores.map((store) => (
          <li key={store.id} className="store-item">
            <h3>{store.name}</h3>
            <p>Location: {store.location}</p>
            <p>Status: {store.isOpen ? 'Open' : 'Closed'}</p>
            <button className='doctors_btn'>Order</button>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default MedicalStoresList;
