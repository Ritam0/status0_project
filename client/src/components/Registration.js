import React, { useState } from 'react';
import Navbar from './Navbar'
import './Registration.css';

function RegistrationForm({ type }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [image, setImage] = useState('');
  // You can add more form fields here

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(`Type: ${type}, Name: ${name}, Contact: ${contact}, Image: ${image}`);
    // Clear form fields after submission
    setName('');
    setContact('');
    setImage('');
  };

  return (
    <>
      < Navbar />
      <div className="registration-form-container">
        <h1>Register {type}</h1>
        <form onSubmit={handleSubmit}>

          {/* <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /> */}

          <div class="form-control">
            <input class="reg_input reg_input-alt" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required  />
              <span class="reg_input-border reg_input-border-alt"></span>
          </div>


          {/* <label>Contact No</label>
          <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />*/}
          
          <div class="form-control">
            <input class="reg_input reg_input-alt" placeholder="Contact No" type='text' value={contact} onChange={(e) => setContact(e.target.value)} required  />
              <span class="reg_input-border reg_input-border-alt"></span>
          </div>


          {/* <label>Image URL</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />  */}

          <div class="form-control">
            <input class="reg_input reg_input-alt" placeholder="Image URL" type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
              <span class="reg_input-border reg_input-border-alt"></span>
          </div>





          {/* Add more form fields here */}

          {/* <button type="submit">Register</button> */}
          <button className="button" type="submit">
            <span className="button-content" >Register</span>
          </button>
        </form>
      </div>
    </>
  );
}

export default RegistrationForm;
