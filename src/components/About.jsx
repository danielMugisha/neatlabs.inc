import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { number: 150, suffix: '+', label: 'Projects Completed' },
    { number: 50, suffix: '+', label: 'Happy Partners' },
    { number: 5, suffix: '', label: 'Years Experience' },
    { number: 98, suffix: '%', label: 'Client Satisfaction' }
  ];

  useEffect(() => {
    // Animate stats counters
    statsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.fromTo(stat, 
          { textContent: 0 },
          {
            textContent: stats[index].number,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
              end: "bottom 20%"
            }
          }
        );
      }
    });

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

  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="container">
        <div className="about__content">
          <div className="about__text">
            <span className="section-label">About Zeyna</span>
            <h2 className="section-title">
              We craft digital experiences that <span className="gradient-text">matter</span>
            </h2>
            <p className="section-subtitle">
              Our team of designers, developers, and strategists work together to create 
              innovative solutions that drive real business results. From startups to 
              Fortune 500 companies, we've helped brands tell their stories in the digital age.
            </p>
          </div>
          
          <div className="about__stats">
            {stats.map((stat, index) => (
              <div key={index} className="stat">
                <div className="stat__number">
                  <span 
                    ref={el => statsRef.current[index] = el}
                    className="stat__value"
                  >
                    0
                  </span>
                  <span className="stat__suffix">{stat.suffix}</span>
                </div>
                <p className="stat__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
