import React from 'react';

const About = ({ scrollRef }) => (
  <div id="section" className="container" ref={scrollRef}>
    <h1 className="header">About Me</h1>
    <p className="primary-color">
      Hi, I’m Howard. I am a software engineer in the Bay Area. I enjoy building the frontend of
      web and mobile applications. In the process of building these apps, I enjoy learning new
      technologies and applying different design principles that make it easier for me to build clean
      and efficient apps. 
    </p>
    <br />
    <p className="primary-color">
      My interest in web development began with a simple Smart Mirror passion project with
      two friends when I was studying at UC Davis. With no frontend experience and equipped
      with only Google searches and a 3-month summer break, I developed the user interface of
      this project in JavaScript, HTML, and CSS. We faced a number of issues. To name a few,
      we were hindered by the quirks of JavaScript, had little to no experience with source
      code management, and didn’t know how we would integrate each of our respective pieces
      to make a cohesive application. Yet, we tackled each hurdle one after another until we
      created a product that we were proud of. Moving forward, I met great people and faced
      great challenges in my roles at Truckxi and Stanford that ultimately helped me to refine
      my web development skills and perhaps more importantly, grow as a person. I am excited
      to continue to learn, and I am thankful every step of the way.
    </p>
    <br />
    <p className="primary-color">
      Here are some of the technologies I’ve been working with recently:
    </p>
  </div>
);

export default About;