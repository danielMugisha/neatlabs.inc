import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import teamBg from '../assets/team.webp';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

export function Team() {
  const sectionRef = useRef(null);
  const chartRef = useRef(null);
  
  const members = [
    { name: 'Sarah Chen', role: 'Creative Director', avatar: 'SC' },
    { name: 'Marcus Rodriguez', role: 'Lead Developer', avatar: 'MR' },
    { name: 'Emma Thompson', role: 'UX Strategist', avatar: 'ET' },
    { name: 'David Kim', role: 'Brand Specialist', avatar: 'DK' }
  ];

  const chartData = [
    { label: 'Design', value: 85, color: '#fdc337', radius: 50 },
    { label: 'Development', value: 92, color: '#fd3480', radius: 30 },
    { label: 'Strategy', value: 78, color: '#9354eb', radius: 15 }
  ];

  const centerX = 60;
  const centerY = 60;

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  useEffect(() => {
    // Team members animation
    gsap.fromTo('.team-member', 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.team__grid',
          start: "top 80%",
          end: "bottom 20%"
        }
      }
    );
  }, []);

  return (
    <section id="team" className="team" ref={sectionRef}>
      <div className="team__container">
        {/* Left side with background image and chart card */}
        <div className="team__left" style={{ backgroundImage: `url(${teamBg})` }}>
          <div className="chart-card animated-chart-card" ref={chartRef}>
            <div className="chart-text">
              <div className="chart-header">
                <h3 className="chart-title">Skill Levels</h3>
                <p className="chart-description">A visual representation of our team's expertise in various domains.</p>
              </div>
              <div className="chart-legend">
                {chartData.map((item, index) => (
                  <div key={index} className="legend-item">
                    <div 
                      className="legend-color" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="legend-label">{item.label}</span>
                    <span className="legend-value">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="disc-chart">
              <svg viewBox="0 0 120 120" className="chart-svg">
                {/* Background circles */}
                {chartData.map((item, index) => (
                  <circle
                    key={`bg-${index}`}
                    cx={centerX}
                    cy={centerY}
                    r={item.radius}
                    fill="none"
                    stroke="rgba(0,0,0,0.1)"
                    strokeWidth="12"
                  />
                ))}
                
                {/* Progress circles */}
                {chartData.map((item, index) => {
                  const circumference = 2 * Math.PI * item.radius;
                  const offset = circumference - (item.value / 100) * circumference;
                  
                  return (
                    <circle
                      key={`progress-${index}`}
                      cx={centerX}
                      cy={centerY}
                      r={item.radius}
                      fill="none"
                      stroke={item.color}
                      strokeWidth="12"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      className={`chart-ring ring-${index}`}
                      style={{
                        '--circumference': circumference,
                        '--offset': offset,
                        animationDelay: `${index * 0.3 + 1}s`
                      }}
                    />
                  );
                })}
              </svg>
              <div className="chart-center">
                
              </div>
            </div>
            
            
          </div>
        </div>

        {/* Right side with team content */}
        <div className="team__right">
          <div className="team__header">
            <span className="section-label">The Team</span>
            <h2 className="section-title">Creative minds behind the magic</h2>
            <p className="team__description">
              Our diverse team brings together unique perspectives, skills, and experiences to create extraordinary results. We believe that the best solutions emerge when creative minds collaborate, challenge each other, and work toward a shared vision of excellence.
            </p>
            <button className="team__button">
              our team
              <span className="button-arrow">→</span>
            </button>
          </div>
          
          <div className="team__grid">
            {members.map((member, index) => (
              <div key={index} className="team-member">
                <div className="member__avatar">
                  {member.avatar}
                </div>
                <h3 className="member__name">{member.name}</h3>
                <p className="member__role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
