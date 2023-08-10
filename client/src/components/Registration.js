import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Registration.css';
import log_reg_page_pic from "./image/log_reg_page_pic.jpg";

function RegistrationForm({ type }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email); // Use 'email' instead of 'contact'
    formData.append('password', password);
    formData.append('avatar', image);
    console.log(formData);
  
    try {
      const response = await axios.post('http://localhost:3001/register', formData);
      console.log('Registration successful:', response.data);
  
      setName('');
      setEmail('');
      setPassword('');
      setImage('');

      window.alert('Registration succesful');
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <main id='reg_main'>
        <section id='reg_left_sec'>
          <img src={log_reg_page_pic} alt="pic" />
        </section>
        <section id='reg_right_sec'>
          <div className="registration-form-container">
            <h1>Login/Register {type}</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>
              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Email ID" type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>
              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>
              <div className="file_upload_sec">
                <label htmlFor="input_file" id='input_file_label'>
                  <div className="input-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                  </div>
                  <span>Upload Image</span>
                </label>
                <input
                    className="input-file"
                    id="input_file"
                    name="avatar" // Change 'file' to 'avatar'
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
              </div>
              <button className="button" type="submit">
                <span className="button-content">Register</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default RegistrationForm;

