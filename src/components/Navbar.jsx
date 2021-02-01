import React from 'react';
import logo from './images/ht-logo.JPG';

const Navbar = () => (
  <div id="navbar" className="navbar navbar-expand-sm navbar-dark">
    <div className="navbar-brand logo">
      <div className="diamond">
        <img className="logo-image" src={logo} alt="logo" />
      </div>
    </div>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mx-2">
        <button className="btn bg-transparent nav-link">
          About
        </button>
      </li>
      <li className="nav-item mx-2">
        <button className="btn bg-transparent nav-link">
          Experience
        </button>
      </li>
      <li className="nav-item mx-2">
        <button className="btn bg-transparent nav-link">
          Contact
        </button>
      </li>
    </ul>
  </div>
);

export default Navbar;