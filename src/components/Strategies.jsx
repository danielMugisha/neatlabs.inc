import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Strategies.css';

// Import strategy images
import strategy1 from '../assets/strategy_1.webp';
import strategy2 from '../assets/strategy_2.webp';
import strategy3 from '../assets/strategy_3.webp';
import strategy4 from '../assets/strategy_4.webp';
import strategy5 from '../assets/strategy_5.webp';

gsap.registerPlugin(ScrollTrigger);

export function Strategies() {
  const sectionRef = useRef(null);
  const [openAccordion, setOpenAccordion] = useState(0);

  // Array of images corresponding to each accordion item
  const strategyImages = [
    strategy5, // Brand Strategy & Identity
    strategy1, // Digital Product Design  
    strategy2, // Web Development
    strategy3, // Marketing Automation
    strategy4  // Analytics & Optimization
  ];

  const accordionItems = [
    {
      title: "Brand Strategy & Identity",
      grayContent: "Strategic Foundation & Market Positioning",
      blackContent: "We craft compelling brand narratives that resonate with your target audience and differentiate you from competitors. Our comprehensive approach includes market research, competitor analysis, brand positioning, and visual identity development that creates lasting emotional connections with your customers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#000000">
            <path d="M226-106v-748h22v81h554l-70 172 70 172H248v323h-22Zm22-645v300-300Zm252.71 202Q522-549 537-563.97q15-14.98 15-37.24t-14.97-37.03Q522.05-653 499.79-653 479-653 464-638.03q-15 14.98-15 37.24t15.21 37.03Q479.42-549 500.71-549ZM248-451h521l-60-150 60-150H248v300Z"></path>
        </svg>
      )
    },
    {
      title: "Digital Product Design", 
      grayContent: "User Experience & Interface Design",
      blackContent: "Our design team creates intuitive user experiences that drive engagement and conversion across all digital touchpoints. We focus on user-centered design principles, conducting thorough research and testing to ensure every interaction is meaningful and drives your business objectives forward.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="none" stroke="#ffffff" strokeWidth="3">
          <path d="M360-240h240v-80H360v80Zm120-120q75 0 127.5-52.5T660-540q0-75-52.5-127.5T480-720q-75 0-127.5 52.5T300-540q0 75 52.5 127.5T480-360Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
        </svg>
      )
    },
    {
      title: "Web Development",
      grayContent: "Custom Development & Technology Solutions",
      blackContent: "Custom-built websites and applications using cutting-edge technology for optimal performance and scalability. Our development process emphasizes clean code, responsive design, and robust architecture that grows with your business needs and delivers exceptional user experiences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
          <path d="M320-242 80-482l242-242 43 43-199 199 197 197-43 43Zm318 2-43-43 199-199-197-197 43-43 240 240-242 242Z"/>
        </svg>
      )
    },
    {
      title: "Marketing Automation",
      grayContent: "Process Optimization & Lead Nurturing",
      blackContent: "Streamline your marketing processes with intelligent automation systems that nurture leads and boost ROI. We implement sophisticated workflows that personalize customer journeys, optimize conversion funnels, and provide detailed analytics to maximize your marketing effectiveness.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
          <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z"/>
        </svg>
      )
    },
    {
      title: "Analytics & Optimization",
      grayContent: "Performance Tracking & Growth Analysis",
      blackContent: "Data-driven insights and continuous optimization to maximize your digital performance and business growth. Our analytics framework provides deep visibility into user behavior, conversion patterns, and growth opportunities, enabling informed decisions that drive sustainable success.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff">
          <path d="M280-280h80v-200h-80v200Zm160 0h80v-400h-80v400Zm160 0h80v-120h-80v120ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/>
        </svg>
      )
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
                  <div className="accordion-title-wrapper">
                    {item.icon && <span className="accordion-title-icon">{item.icon}</span>}
                    <h3 className="accordion-title">{item.title}</h3>
                  </div>
                  <span className="accordion-icon">
                    {openAccordion === index ? '−' : '+'}
                  </span>
                </div>
                <div className="accordion-content">
                  <p className="accordion-gray-text">{item.grayContent}</p>
                  <p className="accordion-black-text">{item.blackContent}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="strategy__image-right">
            {openAccordion >= 0 && (
              <img 
                key={openAccordion}
                src={strategyImages[openAccordion]} 
                alt={`${accordionItems[openAccordion].title} visualization`}
                className="strategy-image"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}