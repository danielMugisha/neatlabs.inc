import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const projectsRef = useRef(null);
  const partnersRef = useRef(null);
  const yearsRef = useRef(null);
  const satisfactionRef = useRef(null);

  useEffect(() => {
    // Section reveal animation
    gsap.fromTo('.about__content > *', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%"
        }
      }
    );

    // Stats counter animation
    gsap.fromTo([projectsRef.current, partnersRef.current, yearsRef.current, satisfactionRef.current], 
      { innerHTML: 0 },
      {
        innerHTML: (i, target) => {
          if (target === projectsRef.current) return 150;
          if (target === partnersRef.current) return 50;
          if (target === yearsRef.current) return 5;
          if (target === satisfactionRef.current) return 98;
        },
        duration: 2,
        ease: "power2.out",
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "bottom 20%"
        },
        onUpdate: function() {
          // Add suffixes back during animation
          if (projectsRef.current) projectsRef.current.innerHTML = Math.round(projectsRef.current.innerHTML) + '+';
          if (partnersRef.current) partnersRef.current.innerHTML = Math.round(partnersRef.current.innerHTML) + '+';
          if (satisfactionRef.current) satisfactionRef.current.innerHTML = Math.round(satisfactionRef.current.innerHTML) + '%';
        }
      }
    );
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__container">
        <div className="about__left">
          <div className="about__pill">About Neatlabs</div>
        </div>
        <div className="about__content-right">
          <div className="about__text">
            <p className="about__description">
              We're passionate about creating innovative digital solutions that help businesses thrive. Our expert team builds products that deliver measurable results for brands worldwide.
            </p>
          </div>
          <button className="about__button">
            WHO WE ARE ?
            <span className="button-arrow">→</span>
          </button>
        </div>
      </div>
      
      <div className="about__container">
        <div className="about__chart-left">
          <div className="chart-container">
            <div className="chart-header">
              <div className="chart-title">Q4 DATASET 1</div>
              <div className="chart-main-number">
                <span>36,157</span>
                <div className="chart-growth-pill">
                  <span className="growth-icon">↗</span>
                  <span>+12.5%</span>
                </div>
              </div>
            </div>
            
            <svg className="growth-chart" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="statsGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#d6fd6f" stopOpacity="0.8"/>
                <stop offset="100%" stopColor="#d6fd6f" stopOpacity="0.1"/>
              </linearGradient>
              <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="2,2"/>
              </pattern>
            </defs>
            
            {/* Y-axis labels */}
            <text x="35" y="35" textAnchor="end" fontSize="10" fill="#666">50k</text>
            <text x="35" y="65" textAnchor="end" fontSize="10" fill="#666">40k</text>
            <text x="35" y="95" textAnchor="end" fontSize="10" fill="#666">30k</text>
            <text x="35" y="125" textAnchor="end" fontSize="10" fill="#666">20k</text>
            
            {/* Grid lines */}
            <rect width="400" height="150" fill="url(#grid)"/>
            
            {/* Horizontal dotted lines */}
            <line x1="40" y1="35" x2="360" y2="35" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="40" y1="65" x2="360" y2="65" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="40" y1="95" x2="360" y2="95" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="3,3"/>
            <line x1="40" y1="125" x2="360" y2="125" stroke="#d0d0d0" strokeWidth="1" strokeDasharray="3,3"/>
            
            {/* Main line */}
            <path 
              className="animated-line"
              d="M 40 120 L 80 100 L 120 85 L 160 95 L 200 70 L 240 55 L 280 65 L 320 45 L 360 30" 
              fill="none" 
              stroke="#000000" 
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Data points */}
            <circle cx="40" cy="120" r="4" fill="#000000"/>
            <circle cx="80" cy="100" r="4" fill="#000000"/>
            <circle cx="120" cy="85" r="4" fill="#000000"/>
            <circle cx="160" cy="95" r="4" fill="#000000"/>
            <circle cx="200" cy="70" r="4" fill="#000000"/>
            <circle cx="240" cy="55" r="4" fill="#000000"/>
            <circle cx="280" cy="65" r="4" fill="#000000"/>
            <circle cx="320" cy="45" r="4" fill="#000000"/>
            <circle cx="360" cy="30" r="4" fill="#000000"/>
          </svg>
          </div>
        </div>
        
        <div className="about__stats-right" ref={statsRef}>
          <div className="about-stat-card">
            <div className="stat-number" ref={projectsRef}>0+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-number" ref={partnersRef}>0+</div>
            <div className="stat-label">Happy Partners</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-number" ref={yearsRef}>0</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="about-stat-card">
            <div className="stat-number" ref={satisfactionRef}>0%</div>
            <div className="stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
