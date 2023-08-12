import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';

const MyProfile = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({});
  const [uri, setUri] = useState('https://mgcfeni.edu.bd/midea/featuredimage/featuredimage2019-03-04-13-47-19_5c7d1e5732a77.jpg');
  

  const callProfile = async () => {
    try {
      const token = localStorage.getItem('token');
      const mail = localStorage.getItem('mail');
      if(!token){
        navigate('/login');
      }
      const response = await axios.get('http://localhost:3001/profile', {
        params: {
          mail:mail
        }
      });

      const data = response.data.user;
      console.log(data);
      setUserDetails(data);
      setUri(data.avatar.secure_url);
      
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
      // await axios.get("http://localhost:3001/logout", {
      //   headers: {
      //     Cookie: "token"
      //   },
      //   withCredentials: true // Include credentials, if needed (for cookies)
      // });
      localStorage.clear();

      window.alert("Logged out");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }
  const ListService=()=>{
    navigate("/customer");
  }

  return (
    <div className='main_body'>
      {/* <Navbar /> */}
        <div className="main_card">
          <div className="pic_card">
            <img src={uri} alt="" className="image" />
          </div>
          <div className="details">
            <ul>
              <li>Name:{userDetails.name}</li>
              <li>UserId:{userDetails._id}</li>
              <li>Email:{userDetails.email}</li>
              <li></li>
            </ul>
          </div>
          <button onClick={logoutProfile}>logout</button>
          <button onClick={ListService}>List Your Service</button>
        </div>
    </div>
  );
};

export default MyProfile;
