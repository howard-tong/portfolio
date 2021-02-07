import React, { useRef } from 'react';
import {
  Navbar,
  Intro,
  About,
  Margins,
} from './components';
import { Experience } from './components/Experience';
import './scss/style.scss';

const App = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const scrollOptions = {
      behavior: 'smooth',
      block: 'start',
      inline: 'start'
    };
    switch (section) {
      case 'about':
        if (aboutRef && aboutRef.current) {
          aboutRef.current.scrollIntoView(scrollOptions);
        }
        return;
      case 'experience':
        if (aboutRef && aboutRef.current) {
          experienceRef.current.scrollIntoView(scrollOptions);
        }
        return;
      case 'contact':
        if (aboutRef && aboutRef.current) {
          contactRef.current.scrollIntoView(scrollOptions);
        }
        return;
      default:
        return;
    }
  };
  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />
      <Intro />
      <About scrollRef={aboutRef} />
      <Experience scrollRef={experienceRef} />
      <Margins />
    </div>
  );
}

export default App;
