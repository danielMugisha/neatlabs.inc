import React, { useState, useEffect } from 'react';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#" className="logo">
              <span className="logo__text">Neat Labs</span>
            </a>
          </div>

          <nav className="header__nav">
            <ul className="nav__list">
              <li><a href="#" className="nav__link">Home</a></li>
              <li><a href="#portfolio" className="nav__link">Portfolio</a></li>
              <li><a href="#about" className="nav__link">About</a></li>
              <li><a href="#team" className="nav__link">Team</a></li>
              <li><a href="#articles" className="nav__link">Articles</a></li>
              <li><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
          </nav>

          <div className="header__actions">
            <button className="btn-primary">
              Start A Project
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
