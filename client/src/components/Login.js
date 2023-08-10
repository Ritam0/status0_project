import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import './Registration.css';
import log_reg_page_pic from "./image/log_reg_page_pic.jpg";

function LoginForm () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    
    const data = {
        email: email,
        password: password
      };

    try {
      const response = await axios.post('http://localhost:3001/login', data);
      console.log('Login successful:', response.data);
      
      setEmail('');
      setPassword('');

      window.alert('Login successful');
    } catch (error) {
      console.error('Login error:', error);
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
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Email ID" type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>
              <div className="form-control">
                <input className="reg_input reg_input-alt" placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                <span className="reg_input-border reg_input-border-alt"></span>
              </div>
              <button className="button" type="submit">
                <span className="button-content">Login</span>
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default LoginForm;
