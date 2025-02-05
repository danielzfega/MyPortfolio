import React, { useState, useRef, useEffect } from 'react'
import { FaHtml5, FaJava, FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { TbBrandJavascript, TbBrandCSharp } from "react-icons/tb";
import { RiNextjsFill } from "react-icons/ri";
import './Skills.css'

const Skills = () => {
  const skillsRef = useRef();
  const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
      );
  
      if (skillsRef.current) {
        observer.observe(skillsRef.current);
      }
  
      return () => {
        if (skillsRef.current) {
          observer.unobserve(skillsRef.current);
        }
      };
    }, []);

  const[listSkills] = useState([
    {
      icon: <FaHtml5 />,
      name: 'HTML'
    },
    {
      icon: <IoLogoCss3 />,
      name: 'CSS'
    },
    {
      icon: <TbBrandJavascript />,
      name: 'JavaScript'
    },
    {
      icon: <BiLogoTypescript />,
      name: 'TypeScript'
    },
    {
      icon: <FaReact />,
      name: 'ReactJs'
    },
    {
      icon: <RiNextjsFill />,
      name: 'Next Js'
    },
    {
      icon: <IoLogoNodejs />,
      name: 'NodeJS'
    },
    {
      icon: <BiLogoPostgresql />,
      name: 'SQL'
    },
    {
      icon: <FaJava />,
      name: 'JAVA'
    },
    {
      icon: <TbBrandCSharp />,
      name: 'C#'
    },
  ])
  return (
    <div className={`skills animation ${isVisible ? 'animation-active' : ''}`} ref={skillsRef}>
      <div className="title">
        These are My Skills
      </div>
      <div className="titleDesc">
        Here is a list of my skillset. Hopefully as time progresses, I'll pick up a ton more along the way in my Software Engineering journey ‼️
      </div>
      <div className="skillList">
        {
          listSkills.map((value, key) =>(
            <div key={key} className="skillItem">
              <i>{value.icon}</i>
              <h3>{value.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills