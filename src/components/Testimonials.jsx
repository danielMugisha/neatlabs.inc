import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('next');
  const intervalRef = useRef(null);
  
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
    },
    {
      quote: "Outstanding creativity and flawless execution. Zeyna delivered beyond our wildest expectations and transformed our brand identity.",
      author: "David Park",
      position: "Marketing Director, BrandCorp",
      avatar: "DP"
    }
  ];

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 600);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 50);
    }, 600);
  };

  const getPrevIndex = () => (currentIndex - 1 + testimonials.length) % testimonials.length;
  const getNextIndex = () => (currentIndex + 1) % testimonials.length;
  const getFarLeftIndex = () => (currentIndex - 2 + testimonials.length) % testimonials.length;
  const getFarRightIndex = () => (currentIndex + 2) % testimonials.length;

  // Get position class for each card based on current index
  const getCardPosition = (cardIndex) => {
    const diff = (cardIndex - currentIndex + testimonials.length) % testimonials.length;
    switch(diff) {
      case 0: return 'current';
      case 1: return 'next';
      case 2: return 'far-right';
      case 3: return 'prev';
      default: return 'current';
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered && !isAnimating) {
      intervalRef.current = setInterval(() => {
        nextTestimonial();
      }, 4000); // Change every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, isAnimating]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-label testimonials-label">Client Stories</span>
          <h2 className="section-title testimonials-title">Real brands, Real results.</h2>
          <div className="testimonials__description">
            <p>Reimagine your brand's digital presence with Neatlabs —</p>
            <p>where next-gen design meets</p>
            <p>cutting-edge technology.</p>
          </div>
        </div>
        
        <div className="testimonials__carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className={`carousel__track ${isAnimating ? `sliding-${direction}` : ''}`}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial testimonial--${getCardPosition(index)}`}>
                <blockquote className="testimonial__quote">
                  "{testimonial.quote}"
                </blockquote>
                <div className="testimonial__author">
                  <div className="author__avatar">
                    {testimonial.avatar}
                  </div>
                  <div className="author__info">
                    <h4 className="author__name">{testimonial.author}</h4>
                    <p className="author__position">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel__indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel__dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (!isAnimating) {
                    setCurrentIndex(index);
                  }
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
