import React from 'react';
import './Portfolio.css';

export function Portfolio() {
  const projects = [
    {
      year: '2024',
      title: 'FinTech Revolution',
      category: 'Financial Technology',
      image: '/portfolio/fintech.jpg'
    },
    {
      year: '2024',
      title: 'EcoSmart Platform',
      category: 'Sustainability',
      image: '/portfolio/eco.jpg'
    },
    {
      year: '2023',
      title: 'HealthFlow App',
      category: 'Healthcare',
      image: '/portfolio/health.jpg'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="portfolio__header">
          <span className="section-label">Case Studies</span>
          <h2 className="section-title">Recent work that drives results</h2>
        </div>
        
        <div className="portfolio__grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project__image">
                <div className="project__placeholder">
                  {project.title.charAt(0)}
                </div>
                <div className="project__overlay">
                  <span className="project__arrow">→</span>
                </div>
              </div>
              <div className="project__content">
                <span className="project__year">{project.year}</span>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
