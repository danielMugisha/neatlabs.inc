import React from 'react';
import './Features.css';

export function Features() {
  const features = [
    {
      icon: '🎨',
      title: 'Brand Strategy',
      description: 'Comprehensive brand identity and positioning that resonates with your target audience.'
    },
    {
      icon: '📱',
      title: 'Digital Products',
      description: 'User-centered design and development for web and mobile applications that drive engagement.'
    },
    {
      icon: '⚡',
      title: 'Performance',
      description: 'Lightning-fast, optimized experiences that convert visitors into customers.'
    },
    {
      icon: '🚀',
      title: 'Growth Marketing',
      description: 'Data-driven strategies to scale your business and maximize ROI across all channels.'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features__header">
          <span className="section-label">Our Services</span>
          <h2 className="section-title">Premium solutions for modern brands</h2>
        </div>
        
        <div className="features__grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature__icon">{feature.icon}</div>
              <h3 className="feature__title">{feature.title}</h3>
              <p className="feature__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
