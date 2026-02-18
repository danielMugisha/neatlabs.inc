import React from 'react';
import './BigCTA.css';

export function BigCTA() {
  return (
    <section className="big-cta">
      <div className="container">
        <div className="cta__content">
          <h2 className="cta__title">
            Build momentum with <span className="gradient-text">Zeyna™</span>
          </h2>
          <p className="cta__subtitle">
            Ready to transform your brand's digital presence? Let's create something extraordinary together.
          </p>
          <button className="btn-primary cta__button">
            Get A Quote
          </button>
        </div>
        
        <div className="cta__glow"></div>
      </div>
    </section>
  );
}
