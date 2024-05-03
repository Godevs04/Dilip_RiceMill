// import React from 'react';
import logo from '../../images/navlogo.png';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='container'>
      <div className='logo-container'>
        <img src={logo} alt="logo" className='logo' />
      </div>
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
      <ul className='link-container'>
        <li><a href="/home">Home</a></li>
        <li><a href="/rice-items">Rice Items</a></li>
        <li><a href="/cattle-items">Cattles Items</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/foods">Foods & Festivals</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
