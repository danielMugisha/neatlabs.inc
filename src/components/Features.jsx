import React from 'react';
import './Features.css';

export function Features() {
  const features = [
    {
      icon: '💻',
      title: 'Web Development & Systems',
      description: 'Custom websites and enterprise systems built with cutting-edge technology to drive your business forward.'
    },
    {
      icon: '🔗',
      title: 'ERP & POS Integration',
      description: 'Seamless integration of Enterprise Resource Planning and Point of Sale systems to streamline your operations.'
    },
    {
      icon: '📢',
      title: 'Brand Advertising',
      description: 'Strategic brand campaigns that elevate your presence and create lasting connections with your audience.'
    },
    {
      icon: '📱',
      title: 'Digital Marketing',
      description: 'Data-driven digital strategies across all channels to maximize your online reach and ROI.'
    },
    {
      icon: '🎯',
      title: 'Field Marketing',
      description: 'On-ground marketing activations and events that create meaningful brand experiences in real-world settings.'
    },
    {
      icon: '💼',
      title: 'Business Consultation',
      description: 'Expert strategic guidance to optimize your business processes and unlock new growth opportunities.'
    }
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features__header">
          <span className="features-label">We Offer</span>
          <h2 className="section-title features-title">Comprehensive solutions for modern enterprises</h2>
          <p className="features-desc">From digital transformation to strategic growth, we deliver end-to-end services that propel your business to new heights.</p>
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
