import React, {useState, useRef, useEffect} from 'react';
import { FaGlobeAmericas } from "react-icons/fa";
import { IoFolderOpen, IoLogoGithub } from "react-icons/io5";
import './Projects.css'
import projects from '../../json/projects.json'


const Projects = () => { 
  const projectsRef = useRef();
  const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
      );
  
      if (projectsRef.current) {
        observer.observe(projectsRef.current);
      }
  
      return () => {
        if (projectsRef.current) {
          observer.unobserve(projectsRef.current);
        }
      };
    }, []);

  // const [listProjects] = useState([
  //   {
  //     name: 'ZaiganAI',
  //     des: 'A fully autonomous financial transactions anomaly detection AI model',
  //     role: 'Full Stack Developer, AI / ML Engineer',
  //     language: 'Angular, CSS3, Typescript',
  //     images: zaiganAI,
  //     link: 'https://zaigan-ai.vercel.app/home'
  //   },
  //   {
  //     name: 'FluffScoop',
  //     des: 'A full stack website for ordering desserts and ice-cream',
  //     role: 'Full Stack Developer, System design',
  //     language: 'NextJS, Typescript, Material UI...',
  //     images: fluffscoop,
  //     link: ''
  //   },
  //   {
  //     name: 'FundR',
  //     des: 'A full stack loan web application for customers with flexible loan types and payment integration',
  //     role: 'Full Stack Developer, System Design',
  //     language: 'ReactJs, CSS3, Javascript',
  //     images: fundR,
  //     link: 'https://fund-r.vercel.app/'
  //   },
  //   {
  //     name: 'HomeStyler',
  //     des: 'A frontend design for an imaginary company that provides home interior decor services based on the SRS given by Aptech Computer Learning as part of a semester project',
  //     role: 'Front-end Developer, Team Leader, System design',
  //     language: 'HTML5, CSS3, ReactJs...',
  //     images: homestyler,
  //     link: 'https://home-styler-weld.vercel.app'
  //   },
  //   {
  //     name: 'E-Commerce Card',
  //     des: 'A re-usable animated eCommerce product card template.',
  //     role: 'Front-end Developer',
  //     language: 'HTML5, CSS3, Javascript',
  //     images: productCard,
  //     link: ''
  //   },
  //   {
  //     name: 'StudyHub',
  //     des: 'Prototypes for About page and Blog page designs for a modern fullstack E-Learning Website project.',
  //     role: 'Front-end Developer, Collaborator, System design',
  //     language: 'HTML5, CSS3, ReactJs...',
  //     images: studyhub,
  //     link: ''
  //   },
  //   {
  //     name: 'Weather App v1.0 ',
  //     des: 'A real time weather tracking web application which uses an API to get current weather data and displays to the user.',
  //     role: 'Front-end Developer, system analysis and design',
  //     language: 'HTML5, CSS3, Javascript, ReactJs...',
  //     images: weather1,
  //     link: ''
  //   }
  // ])
  return (
    <div>
      <section className={`projects animation ${isVisible ? 'animation-active' : ''}`} ref={projectsRef}>
          <p className='projectTitle'>/projects</p>

          <div className="projectBox">
            {
              projects.map((project, key) => (
                <div key={key} className='project'>
                  <div className="projectHead">
                    <i style={{color: "#64ffda", fontSize: "30px"}}><IoFolderOpen/></i>

                    <div className="linkIcons">
                      <i><a href={project.githubLink}><IoLogoGithub/></a></i>
                      <i><a href={project.liveDemo}><FaGlobeAmericas/></a></i>
                    </div>
                  </div>

                  <div className="projectContent">
                    <p className='projectName'><b>{project.name}</b></p>
                    <p style={{color: "#8892b0"}}>{project.desc}</p>

                    <p style={{color: "#8892b0"}}>{project.languages}</p>
                    <p style={{color: "#8892b0"}}><i><b>{project.role}</b></i></p>
                  </div>
                </div>
              ))
            }
          </div>
          
      </section>
    </div>
  )
}

export default Projects
