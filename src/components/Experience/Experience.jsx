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
      <p className='expHeadTxt'>/experience</p>
      <div className="expBox">
        <div className="organisation">SnapiLabs</div>

        <div className="expDesc">
          <p>Intern @ SnapiLabs</p>
          <p>AUG 2024 - NOV 2024</p>
          <p>Ventured into an impactful internship at SnapiLabs, transforming theoretical knowledge into practical skills, gaining hands-on experience and increasing expertise in frontend web development</p>
        </div>
      </div>

      <div className="footer">
        <p>Built and designed by Daniels Fega, &copy; 2025</p>
      </div>
    </section>
  )
}

export default Experience