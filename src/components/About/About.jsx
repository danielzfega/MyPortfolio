
import React, { useState, useRef, useEffect } from "react";
import "./About.css";
import me from "../../images/fega.png";
import { TbCaretRight } from "react-icons/tb";

const About = () => {
  const aboutRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
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
    { name: "Nest.js" },
    { name: "Tailwind CSS" },
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
    <div className={`about animation ${isVisible ? "animation-active" : ""}`} ref={aboutRef}>
        <div className="aboutTxt">
          <p className="aboutTxtHead"><b>/about me</b></p>
          <p className="randomAboutP">I am currently a <b>Software Engineering student</b> at <span style={{color: "#64ffda"}}>Aptech Education</span>, exploring the possibilities of backend technologies using <span style={{color: "#64ffda"}}>Java</span>, SpringBoot & Prisma. I am a Fullstack Web Developer & Roblox Games Developer.</p>
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
        <img src={me} alt="" />
      </div>
    </div>
  );
};

export default About;
