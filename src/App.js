import React from 'react';
import {
  Navbar,
  Intro,
  About,
  Margins,
} from './components';
import { Experience } from './components/Experience';
import './scss/style.scss';

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Experience />
      <Margins />
    </div>
  );
}

export default App;
