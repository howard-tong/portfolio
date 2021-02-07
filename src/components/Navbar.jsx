import React from 'react';
import logo from './images/ht-logo.JPG';

const Navbar = ({ scrollToSection }) => {
  const debounce = (fn) => {
  // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) { 
        cancelAnimationFrame(frame);
      }
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        // Call our function and pass any params we received
        fn(...params);
      });
    };
  };

  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  // Update scroll position for first time
  storeScroll();

  return (
    <div id="navbar" className="navbar navbar-expand-sm navbar-dark">
      <div className="navbar-brand logo">
        <div className="diamond">
          <img className="logo-image" src={logo} alt="logo" />
        </div>
      </div>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mx-2">
          <button className="btn bg-transparent nav-link" onClick={() => scrollToSection('about')}>
            About
          </button>
        </li>
        <li className="nav-item mx-2">
          <button className="btn bg-transparent nav-link" onClick={() => scrollToSection('experience')}>
            Experience
          </button>
        </li>
        <li className="nav-item mx-2">
          <button className="btn bg-transparent nav-link" onClick={() => scrollToSection('contact')}>
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;