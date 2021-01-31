import React from 'react';
import {
  Navbar,
  Intro,
  About,
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
    </div>
  );
}

export default App;
