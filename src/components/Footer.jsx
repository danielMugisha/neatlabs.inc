import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    // Footer content reveal animation
    gsap.fromTo('.footer__content > *', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "bottom 20%"
        }
      }
    );

    // Cards stagger animation
    gsap.fromTo('.footer__card', 
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          end: "bottom 15%"
        }
      }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>
      <div className="container">
        <div className="footer__content">
          
          {/* Header */}
          <div className="footer__header">
            <h2 className="footer-title">Ready to Transform Your Business?</h2>
            <div className="footer__description">
              <p>Join hundreds of companies who trust Neat Labs to deliver exceptional </p>
              <p>digital solutions. Let's build something amazing together.</p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="footer__main" ref={cardsRef}>
            
            {/* Contact Card */}
            <div className="footer__card footer__card--contact">
              <div className="card__header">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <h3 className="card__title">Get In Touch</h3>
              </div>
              <div className="card__content">
                <div className="contact__item">
                  <span className="contact__label">Email</span>
                  <span className="contact__value">frontdesk@neatlabs.com</span>
                </div>
                <div className="contact__item">
                  <span className="contact__label">Phone</span>
                  <span className="contact__value">+250 782 035 9037</span>
                </div>
                <div className="contact__item">
                  <span className="contact__label">Address</span>
                  <span className="contact__value">Kigali, Rwanda</span>
                </div>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="footer__card footer__card--newsletter">
              <div className="card__header">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 11a9 9 0 0 1 9 9"/>
                    <path d="M4 4a16 16 0 0 1 16 16"/>
                    <circle cx="5" cy="11" r="1"/>
                  </svg>
                </div>
                <h3 className="card__title">Stay Updated</h3>
              </div>
              <div className="card__content">
                <p className="newsletter__description">
                  Subscribe to our newsletter for insights, tips, and exclusive content.
                </p>
                <form className="newsletter__form">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="form__input"
                    required
                  />
                  <button type="submit" className="form__button">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Navigation Card */}
            <div className="footer__card footer__card--navigation">
              <div className="card__header">
                <div className="card__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 6v6"/>
                    <path d="m21 12-6-6-6 6-6-6"/>
                  </svg>
                </div>
                <h3 className="card__title">Quick Links</h3>
              </div>
              <div className="card__content">
                <div className="nav__columns">
                  <div className="nav__column">
                    <a href="#" className="footer__link">About Us</a>
                    <a href="#" className="footer__link">Our Services</a>
                    <a href="#" className="footer__link">Portfolio</a>
                    <a href="#" className="footer__link">Case Studies</a>
                  </div>
                  <div className="nav__column">
                    <a href="#" className="footer__link">Blog</a>
                    <a href="#" className="footer__link">Careers</a>
                    <a href="#" className="footer__link">Contact</a>
                    <a href="#" className="footer__link">Support</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="footer__bottom">
            <div className="footer__brand">
              <div className="footer__logo">
                <span className="logo__text">Neat Labs</span>
              </div>
              <div className="footer__social">
                <a href="#" className="social__link" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="social__link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="social__link" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                
              </div>
            </div>

            <div className="footer__legal">
              <div className="footer__copyright">
                <p>&copy; 2026 Neatlabs. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}