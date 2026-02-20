import React, { useState, useEffect } from 'react';
import './Header.css';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState('EN');

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'French' },
    { code: 'KIN', name: 'Kinyarwanda' }
  ];

  const handleLanguageChange = (langCode) => {
    setActiveLanguage(langCode);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    
    if (targetId === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = 80; // Adjust based on your header height
        const elementPosition = targetElement.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="container">
        <div className="header__content">
          <div className="header__logo">
            <a href="#" className="logo">
              <span className="logo__text">Neat Labs</span>
            </a>
            <div className="header__location">
              <svg className="location__icon" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#666"/>
              </svg>
              <span className="location__text">Kigali, Rwanda</span>
            </div>
          </div>

          <nav className="header__nav">
            <ul className="nav__list">
              <li><a href="#" className="nav__link" onClick={(e) => handleSmoothScroll(e, 'home')}>Home</a></li>
              <li><a href="#about" className="nav__link" onClick={(e) => handleSmoothScroll(e, 'about')}>About</a></li>
              <li><a href="#features" className="nav__link" onClick={(e) => handleSmoothScroll(e, 'features')}>Services</a></li>
              <li><a href="#team" className="nav__link" onClick={(e) => handleSmoothScroll(e, 'team')}>Team</a></li>
              <li><a href="#contact" className="nav__link" onClick={(e) => handleSmoothScroll(e, 'contact')}>Contact</a></li>
            </ul>
          </nav>

          <div className="header__actions">
            <div className="language-switcher">
              <div className="lang-section">
                <button
                  className={`lang-btn ${activeLanguage === 'EN' ? 'lang-btn--active' : ''}`}
                  onClick={() => handleLanguageChange('EN')}
                >
                  EN
                </button>
              </div>
              <div className="lang-divider"></div>
              <div className="lang-section">
                <button
                  className={`lang-btn ${activeLanguage === 'FR' ? 'lang-btn--active' : ''}`}
                  onClick={() => handleLanguageChange('FR')}
                >
                  FR
                </button>
              </div>
              <div className="lang-divider"></div>
              <div className="lang-section">
                <button
                  className={`lang-btn ${activeLanguage === 'KIN' ? 'lang-btn--active' : ''}`}
                  onClick={() => handleLanguageChange('KIN')}
                >
                  KIN
                </button>
              </div>
            </div>
            <button className="btn-primary">
              Start A Project
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
