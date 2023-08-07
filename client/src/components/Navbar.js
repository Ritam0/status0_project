import { NavLink } from 'react-router-dom';
import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='nav-cont'>
      <nav className="navbar">
          <img src='#' className="navbar-brand"></img>
        <ul>
            <li><NavLink className="nav-link" to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/About">About Us</NavLink></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar