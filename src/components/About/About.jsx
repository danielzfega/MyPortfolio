
import React, { useState, useRef, useEffect } from "react";
import "./About.css";
import Fega from "../../images/Fega.png";
import { TbCaretRight } from "react-icons/tb";
// import html from "../../images/html.png";
// import css from "../../images/css3(2).png";
// import javascript from "../../images/javascript.png";
// import typescript from "../../images/typescript.png";
// import nodejs from "../../images/nodejs.png";
// import sql from "../../images/postgesql.png";
// import reactjs from "../../images/react.png";
// import nextjs from "../../images/nextjs.png";
// import angular from "../../images/angular.png";
// import reactNative from "../../images/reactNative.png";
// import c from "../../images/c.png";
// import csharp from "../../images/Csharp.png";
// import java from "../../images/java.png";
// import php from "../../images/php.png";
// import lua from '../../images/Lua.png'
// import spring from '../../images/spring.png'
// import springBoot from '../../images/spring-boot.png'

const About = () => {
  const skillsRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

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

  // List of skill images
  const listTechStack = [
    {name: "Html 5"},
    {name: "Css 3"},
    {name: "Javascript ES6+"},
    { name: "Typescript" },
    { name: "Node.js" },
    { name: "Lua" },
    { name: "Sql" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Angular" },
    { name: "React Native" },
    { name: "C" },
    { name: "C#" },
    { name: "Java" },
    // {name: "Spring"},
    {name: "SpringBoot"},
    { name: "Php" },
  ];

  return (
    <div className={`about animation ${isVisible ? "animation-active" : ""}`} ref={skillsRef}>
        <div className="aboutTxt">
          <p className="aboutTxtHead">/about me</p>
          <p>I am currently a <b>Software Engineering student</b> at <span style={{color: "#64ffda"}}>Aptech Education</span>, exploring the possibilities of backend technologies using <span style={{color: "#64ffda"}}>Java</span>, SpringBoot & Prisma. I am a Fullstack Web Developer & Roblox Games Developer.</p>
          <p>Here are some technologies I have been working with:</p>

          <div className="techStack">
            {
              listTechStack.map((techStack, key) => (
                <p key={key}><i style={{color: "#64ffda"}}><TbCaretRight /></i>{techStack.name}</p>
              ))  
            }
            
          </div>

          {/* { 
            listTechStack.map((techStack, key) => (
              <div className="techStack">   
                  <p key={key}>{techStack.name.slice(0, 5)}</p>
                  <p>{techStack.name.slice(5, 10)}</p>
              </div>
            ))
          } */}
        </div>


      <div className="aboutImg">
        <img src={Fega} alt="" />
      </div>
    </div>
  );
};

export default About;
