import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [ulVisible, setUlVisible] = useState(true);

  const handleToggleClick = () => {
    setUlVisible(!ulVisible);
  };
  return (
    <div className='nav-cont'>

      <nav className="navbar">

        <div className="mobile">

          <img src='#' className="navbar-brand"></img>

          <div className="tglbtn">
            <input type="checkbox" id="checkbox" onClick={handleToggleClick} />
            <label htmlFor="checkbox" className="toggle">
              <div className="bars" id="bar1"></div>
              <div className="bars" id="bar2"></div>
              <div className="bars" id="bar3"></div>
            </label>

          </div>
        </div>
        <ul id='navuls' style={{ height: ulVisible ? '' : '150px' }}>
          <li><NavLink className="nav-link" to="/">Home</NavLink></li>
          <li><NavLink className="nav-link" to="/About">Our Services</NavLink></li>
          <li><NavLink className="nav-link" to="/About">About Us</NavLink></li>
          <li><NavLink className="nav-link" to="/About">LogIn</NavLink></li>
        </ul>



      </nav>

    </div>
  )
}

export default Navbar