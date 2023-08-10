import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
//import './MyProfile.css'

const MyProfile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});

  const callProfile = async () => {
    try {
      const response = await axios.get('http://localhost:3001/profile', {
        withCredentials: true
      });

      const data = response.data;
      console.log(data.user);
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
        withCredentials: true
      });

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
                <img src={userDetails.avatar.secure_url} alt="" />
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


