import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Strategies.css';

gsap.registerPlugin(ScrollTrigger);

export function Strategies() {
  const sectionRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordionItems = [
    {
      title: "Brand Strategy & Identity",
      content: "We craft compelling brand narratives that resonate with your target audience and differentiate you from competitors."
    },
    {
      title: "Digital Product Design", 
      content: "Our design team creates intuitive user experiences that drive engagement and conversion across all digital touchpoints."
    },
    {
      title: "Web Development",
      content: "Custom-built websites and applications using cutting-edge technology for optimal performance and scalability."
    },
    {
      title: "Marketing Automation",
      content: "Streamline your marketing processes with intelligent automation systems that nurture leads and boost ROI."
    },
    {
      title: "Analytics & Optimization",
      content: "Data-driven insights and continuous optimization to maximize your digital performance and business growth."
    }
  ];

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? -1 : index);
  };

  useEffect(() => {
    // Section reveal animation
    gsap.fromTo('.strategies__content > *', 
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
    <section id="strategies" className="strategies" ref={sectionRef}>
      <div className="strategies__container">
        {/* Upper Section */}
        <div className="strategies__upper">
          <div className="strategies__left">
            <div className="strategies__pill">Smart Solutions</div>
            <h2 className="strategies__title">
              Modern Digital solutions for growth
            </h2>
          </div>
          <div className="strategies__right">
            <p className="strategies__description">
              Reimagine your brand's digital presence with Neatlabs — where next-gen design meets cutting-edge technology.
            </p>
          </div>
        </div>

        {/* Lower Section */}
        <div className="strategies__lower">
          <div className="strategy__accordion-left">
            {accordionItems.map((item, index) => (
              <div key={index} className={`accordion-item ${openAccordion === index ? 'active' : ''}`}>
                <div 
                  className="accordion-header"
                  onClick={() => handleAccordionClick(index)}
                >
                  <h3 className="accordion-title">{item.title}</h3>
                  <span className="accordion-icon">
                    {openAccordion === index ? '−' : '+'}
                  </span>
                </div>
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="strategy__image-right">
            <img src="/api/placeholder/600/400" alt="Digital innovation" />
          </div>
        </div>
      </div>
    </section>
  );
}