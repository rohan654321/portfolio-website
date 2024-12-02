import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Navbar onNavClick={handleNavClick} />
      <div className="bubble-container">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bubble"></div>
        ))}
      </div>
      <div id="home">
        <Home active={activeSection === 'home'} />
      </div>
      <div id="about">
        <About active={activeSection === 'about'} />
      </div>
      <div id="skills-container">
        <Skills active={activeSection === 'skills-container'} />
      </div>
      <div id="container">
        <Projects active={activeSection === 'container'} />
      </div>
      <div id="contact">
        <Contact active={activeSection === 'contact'} />
      </div>
    </>
  );
};

export default App;
