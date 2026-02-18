import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__main">
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="logo__text">Zeyna</span>
              </div>
              <p className="footer__tagline">
                Crafting digital experiences that drive growth and inspire audiences worldwide.
              </p>
            </div>
            
            <div className="footer__contact">
              <h4>Get in touch</h4>
              <div className="contact__item">
                <strong>Address:</strong>
                <p>123 Innovation Street<br />San Francisco, CA 94107</p>
              </div>
              <div className="contact__item">
                <strong>Email:</strong>
                <p>hello@zeyna.com</p>
              </div>
              <div className="contact__item">
                <strong>Phone:</strong>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="footer__links">
              <div className="link-group">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Brand Strategy</a></li>
                  <li><a href="#">Digital Products</a></li>
                  <li><a href="#">Performance</a></li>
                  <li><a href="#">Growth Marketing</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4>Company</h4>
                <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#portfolio">Portfolio</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
            </div>
            
            <div className="footer__social">
              <h4>Follow us</h4>
              <div className="social__links">
                <a href="#" className="social__link">Twitter</a>
                <a href="#" className="social__link">LinkedIn</a>
                <a href="#" className="social__link">Dribbble</a>
                <a href="#" className="social__link">Instagram</a>
              </div>
            </div>
          </div>
          
          <div className="footer__bottom">
            <div className="footer__divider"></div>
            <div className="footer__legal">
              <p>&copy; 2024 Zeyna Agency. All rights reserved.</p>
              <div className="legal__links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
