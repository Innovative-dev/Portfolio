import React from 'react';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-white">
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Projects />
    </div>
  );
}

export default App;