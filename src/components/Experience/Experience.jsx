import React, {useState, useRef, useEffect} from 'react'
import './Experience.css'

const Experience = () => {
  const expRef = useRef();
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (expRef.current) {
      observer.observe(expRef.current);
    }

    return () => {
      if (expRef.current) {
        observer.unobserve(expRef.current);
      }
    };
  }, []);


  return (
    <section className={`exp animation ${isVisible ? 'animation-active' : ''}`} ref={expRef}>
      
    </section>
  )
}

export default Experience