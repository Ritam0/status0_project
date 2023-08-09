import React, { useState } from 'react';
import Navbar from './Navbar'
import './Registration.css';
import log_reg_page_pic from "./image/log_reg_page_pic.jpg"

function RegistrationForm({ type }) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState('');
  // You can add more form fields here

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log(`Type: ${type}, Name: ${name}, Contact: ${contact}, Password: ${password}, Image: ${image}`);
    // Clear form fields after submission
    setName('');
    setContact('');
    setPassword('');
    setImage('');
  };

  return (
    <>
      < Navbar />

      <main id='reg_main'>

        <section id='reg_left_sec'>
          <img src={log_reg_page_pic} alt="pic" />
        </section>


        <section id='reg_right_sec'>
          <div className="registration-form-container">
            <h1>Login/Register {type}</h1>
            <form onSubmit={handleSubmit}>

              {/* <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required /> */}

              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>


              {/* <label>Contact No</label>
          <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />*/}

              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Email ID" type='email' value={contact} onChange={(e) => setContact(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>


              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>


              {/* <label>Image URL</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />  */}

              {/* <div className="form-control">
            <input className="reg_input reg_input-alt" placeholder="Image URL" type='file' value={image} onChange={(e) => setImage(e.target.value)} required />
              <span className="reg_input-border reg_input-border-alt"></span>
          </div> */}


              <div className="file_upload_sec">
                <label htmlFor="input_file" id='input_file_label'>
                  <div className="input-div">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className="icon"><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
                  </div>
                  <span>Upload Image</span>
                </label>
                <input className="input-file" id='input_file' name="file" type="file" />
              </div>



              {/* Add more form fields here */}

              {/* <button type="submit">Register</button> */}
              <button className="button" type="submit">
                <span className="button-content" >Register</span>
              </button>
            </form>
          </div>
        </section>

      </main>
    </>
  );
}

export default RegistrationForm;
