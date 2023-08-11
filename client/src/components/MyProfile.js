import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const MyProfile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const callProfile = async () => {
    try {
      const token = localStorage.getItem('token'); // Get the token from local storage
  
      if (!token) {
        throw new Error('Token not found in local storage');
      }
  
      const response = await axios.get('http://localhost:3001/profile', {
        headers: {
          Authorization: `Bearer ${token}` // Set the token in the Authorization header
        }
      });
  
      const data = response.data;
      setUserDetails(data.user);
    } catch (error) {
      console.error(error);
      navigate('/login'); // Navigate to login page
    }
  };
  

  useEffect(() => {
    callProfile();
  }, []);

  const logoutProfile = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/logout", {
        headers: {
          Cookie: "token"
        },
        withCredentials: true // Include credentials, if needed (for cookies)
      });

      localStorage.removeItem('token'); // Remove token from local storage
      window.alert("Logged out");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className='mp_bg'>
      <Navbar />
      <form className='my_profile' method='GET'>
        <div className='card_mp'>
          <h2 className='card-title_mp'>Hello, <span className='name1_mp'>{userDetails.name}</span></h2>
          <div className='card-content_mp'>
            <div className='user-details_mp'>
              <p><strong>Name:</strong> <span className='name_mp'>{userDetails.name}</span></p>
              <p><strong>User ID:</strong> <span className='userid_mp'>{userDetails._id}</span></p>
              <p><strong>Email:</strong> <span className='email_mp'>{userDetails.email}</span></p>
            </div>
          </div>
          <button className='logout_profile' method='GET' onClick={logoutProfile}>Log out</button>
        </div>
      </form>
    </div>
  );
};

export default MyProfile;
