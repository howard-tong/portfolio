import React from 'react';
import me from './images/me.jpg';

const Intro = () => (
  <div id="intro" className="container">
    <div className="d-flex align-items-center justify-content-center">
      <img className="photo" src={me} alt="me" />
      <div>
        <h6 className="greeting text-light">Hi, my name is</h6>
        <h1 className="name">Howard Tong.</h1>
        <h3 className="subtitle">I'm a software engineer.</h3>
      </div>
    </div>
  </div>
);

export default Intro;