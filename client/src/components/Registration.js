import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Registration.css';
import log_reg_page_pic from "./image/log_reg_page_pic.jpg";
import Modal from 'react-modal';

function RegistrationForm({ type }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  const [registrationSuccessModalOpen, setRegistrationSuccessModalOpen] = useState(false);
  const [alreadyRegisteredModalOpen, setAlreadyRegisteredModalOpen] = useState(false);
  const [status, setStatus] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email); // Use 'email' instead of 'contact'
    formData.append('password', password);
    formData.append('avatar', image);
  
    try {
      const response = await axios.post('http://localhost:3001/register', formData);
      setStatus(response.data.sucess);
      console.log(status);
      
      console.log(response.data);
      if (status) {
        setName('');
        setEmail('');
        setPassword('');
        setImage('');
        setRegistrationSuccessModalOpen(true);
      } else {
        setAlreadyRegisteredModalOpen(true);
      }
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
            <h1>Register {type}</h1>
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
              <button className="button" type="submit" >
                <span className="button-content">Register</span>
              </button>
            </form>
          </div>
        </section>
        <Modal
          isOpen={registrationSuccessModalOpen}
          onRequestClose={() => setRegistrationSuccessModalOpen(false)}
          contentLabel="Registration Success"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>Registration Successful!</h2>
          <p>Your registration has been successfully submitted.</p>
          <button onClick={() => setRegistrationSuccessModalOpen(false)}>Close</button>
        </Modal>
        <Modal
          isOpen={alreadyRegisteredModalOpen}
          onRequestClose={() => setAlreadyRegisteredModalOpen(false)}
          contentLabel="Already Registered"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <h2>Already Registered</h2>
          <p>You are already registered with this email address.</p>
          <button onClick={() => setAlreadyRegisteredModalOpen(false)}>Close</button>
        </Modal>
      </main>
    </>
  );
}

export default RegistrationForm;

