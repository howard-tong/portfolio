import React from 'react';
import {
  Navbar,
  Intro,
} from './components';
import { Experience } from './components/Experience';
import './scss/style.scss';

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Experience />
    </div>
  );
}

export default App;
