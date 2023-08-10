import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import digicureicon from "./image/digicureicon.png";
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


          <NavLink className="nav-link" to="/" >

            <img src={digicureicon} className="navbar-brand"></img>
          </NavLink>

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
          <li>
            <NavLink className="nav-link" to="/">Our Services</NavLink>
          {/* <a className="nav-link" href="#services_main">Our Services</a> */}
          </li>
          <li><NavLink className="nav-link" to="/About">About Us</NavLink></li>
          <li><NavLink className="nav-link" to="/Registration">Login/Register</NavLink></li>
        </ul>



      </nav>

    </div>
  )
}

export default Navbar