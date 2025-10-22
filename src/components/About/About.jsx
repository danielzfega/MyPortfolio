
import React, { useState, useRef, useEffect } from "react";
import "./About.css";
import me from "../../images/coffee.jpeg";
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
    {name: "Html5"},
    {name: "Css3"},
    {name: "Javascript ES6+"},
    { name: "Typescript" },
    {name: "Java"},
    {name: "SpringBoot"},
    {name: "Python"},
    {name: "Django"},
    {name: "FastAPI"},
    { name: "Node.js" },
    { name: "Nest.js" },
    { name: "Tailwind CSS" },
    { name: "Lua" },
    { name: "Sql" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Angular" },
    { name: "React Native" },
    { name: "Flutter" },
    {name: "Dart"},
    {name: "Go"},
    {name: "Rust"},
    { name: "C#" },
    {name: "C"},    
    { name: "Php" },
  ];

  return (
    <div className={`about animation ${isVisible ? "animation-active" : ""}`} ref={aboutRef}>
        <div className="aboutTxt">
          <p className="aboutTxtHead"><b>/about me</b></p>
          <h4 className="randomAboutP"><b>Software Engineer</b>  exploring <span style={{color: "rgb(103, 176, 72)"}}>Python, Rust and Go</span></h4>
          <h4>Intrigued by B2B Saas, AI startups and Agentic AI.</h4>
          <h4>Fullstack Web & Mobile Developer, Roblox Games Developer.</h4>
          <p>Here are some technologies I work with:</p>

          <div className="techStack">
            {
              listTechStack.map((techStack, key) => (
                <p key={key}><i style={{color: "rgb(103, 176, 72)"}}><TbCaretRight /></i>{techStack.name}</p>
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
