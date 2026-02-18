import './Showcase.css'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

export function Showcase() {
  const cardRef = useRef(null)
  const leftStatRef = useRef(null)
  const rightStatRef = useRef(null)
  const slidingBgRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 })
    
    // Initial state - left card starts with green background
    gsap.set(cardRef.current, { scale: 1, opacity: 1 })
    gsap.set(leftStatRef.current, { backgroundColor: '#d6fd70' })
    gsap.set(rightStatRef.current, { backgroundColor: 'white' })
    gsap.set(slidingBgRef.current, { x: 0, opacity: 0 })
    
    // Animation sequence
    tl.to(cardRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.8,
      ease: "back.in(1.7)"
    })
    .to(cardRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)"
    })
    .set(leftStatRef.current, {
      backgroundColor: '#d6fd70'
    })
    .set(rightStatRef.current, {
      backgroundColor: 'white'
    })
    .set(slidingBgRef.current, {
      x: 0,
      opacity: 1
    }, "+=2")
    .to(slidingBgRef.current, {
      x: '110%',
      duration: 0.6,
      ease: "power2.inOut"
    })
    .set(leftStatRef.current, {
      backgroundColor: 'white'
    }, "-=0.3")
    .set(rightStatRef.current, {
      backgroundColor: '#d6fd70'
    }, "-=0.3")
    .set(slidingBgRef.current, {
      opacity: 0
    })
    
  }, [])
  return (
    <section className="showcase">
      <div className="showcase__container">
        <div className="showcase__image-left">
          <img src="/src/assets/beneath_hero1.webp" alt="Neat Labs Preview 1" />
        </div>
        <div className="showcase__image-right">
          <img src="/src/assets/beneath_hero2.webp" alt="Neat Labs Preview 2" />
          <div className="showcase__card" ref={cardRef}>
            <div className="showcase__stats">
              <div className="sliding-background" ref={slidingBgRef}></div>
              <div className="stat-card" ref={leftStatRef}>
                <div className="stat-label">users</div>
                <div className="stat-number">1765</div>
                <div className="stat-pill">
                  <span className="stat-icon">↗</span>
                  <span className="stat-percent">4%</span>
                </div>
              </div>
              <div className="stat-card" ref={rightStatRef}>
                <div className="stat-label">new users</div>
                <div className="stat-number">437</div>
                
                <div className="stat-pill">
                  <span className="stat-icon">↗</span>
                  <span className="stat-percent">9%</span>
                </div>
              </div>
            </div>
            <div className="showcase__chart">
              chart here
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}