import React from 'react';

const Navbar = () => (
  <div id="navbar" className="navbar navbar-expand-sm navbar-dark">
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