import React, {useState, useRef, useEffect} from 'react'
import { IoCalendar } from "react-icons/io5";
import { TbCaretRight } from "react-icons/tb";
import './Experience.css'

const Experience = () => {
  const expRef = useRef();
  const [isVisible, setIsVisible] = useState(false)
  // const [expSelect, setExpSelect] = useState(false)

  // useEffect(() => {
  //   const handleClickOutside = (e) => {
  //     if (!expRef.current.contains(e.target)) {
  //       setExpSelect(null);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => document.removeEventListener("mousedown", handleClickOutside);
  // }, []);
  
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
      <p className='expHeadTxt'><b>/experience</b></p>
      <div className="expBox">
        <div 
          className="organisation"
        >
          <p>SnapiLabs</p>
        </div>

        <div className="expDesc">
          <p className='title'><b>Frontend Intern</b></p>
          <p className='duration'>AUG 2024 - NOV 2024</p>
          <p><i style={{color: "rgb(151, 141, 0)"}}><TbCaretRight /></i>Ventured into an impactful internship at SnapiLabs, transforming theoretical knowledge into practical skills, gaining hands-on experience and increasing expertise in frontend web development</p>
        </div>
      </div>

      <div className="expBox">
        <div className="organisation">
          <p>HNG13</p>
        </div>

        <div className="expDesc">
          <p className='title'><b>Backend Intern</b></p>
          <p className='duration'>OCT 2025 - NOV 2025</p>
          <p><i style={{color: "rgb(151, 141, 0)"}}><TbCaretRight /></i>Developed RESTful API projects with Django and FastAPI, implementing natural language parsed search & agentic ai bots while working closely with expert mentors.</p>
        </div>
      </div>

      <div className="footer">
        <p>Built and designed by Daniels Fega, &copy; 2025</p>
      </div>
    </section>
  )
}

export default Experience