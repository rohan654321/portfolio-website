import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="container mx-auto flex justify-between items-center">
        <h1>Rohan Mondal</h1>
        {/* Hamburger Icon for Mobile */}
        <button
          className="hamburger-icon"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <ul className="desktop-menu">
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#skills-container"><li>Skills</li></a>
          <a href="#container"><li>Projects</li></a>
          <a href="#contact"><li>Contact</li></a>
        </ul>

        {/* Mobile Popup Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#home" onClick={toggleMenu}><li>Home</li></a>
            <a href="#about" onClick={toggleMenu}><li>About</li></a>
            <a href="#skills-container" onClick={toggleMenu}><li>Skills</li></a>
            <a href="#container" onClick={toggleMenu}><li>Projects</li></a>
            <a href="#contact" onClick={toggleMenu}><li>Contact</li></a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
