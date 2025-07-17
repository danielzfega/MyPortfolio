import React, {useState, useRef, useEffect} from 'react'
import { IoCalendar } from "react-icons/io5";
import { TbCaretRight } from "react-icons/tb";
import './Experience.css'

const Experience = () => {
  const expRef = useRef();
  const [isVisible, setIsVisible] = useState(false)
  const [expSelect, setExpSelect] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!expRef.current.contains(e.target)) {
        setExpSelect(null);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
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
        <div 
          className={`organisation ${expSelect === 'snapi' ? 'active' : ''}`}
          onClick={() => setExpSelect('snapi')}
        >
          <p>SnapiLabs</p>
        </div>

        <div className="expDesc">
          <p><b>Intern @ <span style={{color: "#64ffda"}}>SnapiLabs</span></b></p>
          <p>AUG 2024 - NOV 2024</p>
          <p><i style={{color: "#64ffda"}}><TbCaretRight /></i>Ventured into an impactful internship at SnapiLabs, transforming theoretical knowledge into practical skills, gaining hands-on experience and increasing expertise in frontend web development</p>
        </div>
      </div>

      <div className="expBox">
        <div 
          className={`organisation ${expSelect === 'snapi' ? 'active' : ''}`}
          onClick={() => setExpSelect('snapi')}
        >
          <p>Revixor AI</p>
        </div>

        <div className="expDesc">
          <p><b>Founder, Software Engineer @ <span style={{color: "#64ffda"}}>Revixor AI</span></b></p>
          <p>JUL 2025 - present</p>
          <p><i style={{color: "#64ffda"}}><TbCaretRight /></i>Maintaining and implementing AI features across the platform, pushing updates & marketing</p>
        </div>
      </div>

      <div className="footer">
        <p>Built and designed by Daniels Fega, &copy; 2025</p>
      </div>
    </section>
  )
}

export default Experience