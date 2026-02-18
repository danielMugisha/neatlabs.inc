import React, { useState } from 'react';
import './Testimonials.css';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "Zeyna transformed our digital presence completely. The results exceeded our expectations and drove 300% increase in conversions.",
      author: "Sarah Johnson",
      position: "CEO, TechFlow",
      avatar: "SJ"
    },
    {
      quote: "Working with Zeyna was a game-changer. Their strategic approach and innovative design helped us stand out in a crowded market.",
      author: "Michael Chen",
      position: "Founder, EcoVentures",
      avatar: "MC"
    },
    {
      quote: "The team's attention to detail and user experience expertise resulted in a 250% boost in user engagement across our platform.",
      author: "Lisa Rodriguez",
      position: "Product Director, InnovateLab",
      avatar: "LR"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label">Client Stories</span>
          <h2 className="section-title">What our clients say</h2>
        </div>
        
        <div className="testimonials__carousel">
          <div className="testimonial">
            <blockquote className="testimonial__quote">
              "{testimonials[currentIndex].quote}"
            </blockquote>
            
            <div className="testimonial__author">
              <div className="author__avatar">
                {testimonials[currentIndex].avatar}
              </div>
              <div className="author__info">
                <h4 className="author__name">{testimonials[currentIndex].author}</h4>
                <p className="author__position">{testimonials[currentIndex].position}</p>
              </div>
            </div>
          </div>
          
          <div className="carousel__controls">
            <button onClick={prevTestimonial} className="carousel__btn carousel__btn--prev">
              ←
            </button>
            <div className="carousel__dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`carousel__dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button onClick={nextTestimonial} className="carousel__btn carousel__btn--next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
