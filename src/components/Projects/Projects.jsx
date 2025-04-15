import React, {useState, useRef, useEffect} from 'react'
import { FaPersonCircleQuestion, FaEarthAmericas, FaArrowLeft, FaArrowRight, FaCode } from 'react-icons/fa6'
import homestyler from '../../images/homestyler.png'
import studyhub from '../../images/studyhub.png'
import weather1 from '../../images/weather1.0.png'
import productCard from '../../images/productCard.png'
import fluffscoop from '../../images/fluffscoop.png'
import fundR from '../../images/fundR.png'
import zaiganAI from '../../images/ZaiganAI.png'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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

  const [listProjects] = useState([
    {
      name: 'ZaiganAI',
      des: 'A fully autonomous financial transactions anomaly detection AI model',
      role: 'Full Stack Developer, AI / ML Engineer',
      language: 'Angular, CSS3, Typescript',
      images: zaiganAI,
      link: 'https://zaigan-ai.vercel.app/home'
    },
    {
      name: 'FluffScoop',
      des: 'A full stack website for ordering desserts and ice-cream',
      role: 'Full Stack Developer, System design',
      language: 'NextJS, Typescript, Material UI...',
      images: fluffscoop,
      link: ''
    },
    {
      name: 'FundR',
      des: 'A full stack loan web application for customers with flexible loan types and payment integration',
      role: 'Full Stack Developer, System Design',
      language: 'ReactJs, CSS3, Javascript',
      images: fundR,
      link: 'https://fund-r.vercel.app/'
    },
    {
      name: 'HomeStyler',
      des: 'A frontend design for an imaginary company that provides home interior decor services based on the SRS given by Aptech Computer Learning as part of a semester project',
      role: 'Front-end Developer, Team Leader, System design',
      language: 'HTML5, CSS3, ReactJs...',
      images: homestyler,
      link: 'https://home-styler-weld.vercel.app'
    },
    {
      name: 'E-Commerce Card',
      des: 'A re-usable animated eCommerce product card template.',
      role: 'Front-end Developer',
      language: 'HTML5, CSS3, Javascript',
      images: productCard,
      link: ''
    },
    {
      name: 'StudyHub',
      des: 'Prototypes for About page and Blog page designs for a modern fullstack E-Learning Website project.',
      role: 'Front-end Developer, Collaborator, System design',
      language: 'HTML5, CSS3, ReactJs...',
      images: studyhub,
      link: ''
    },
    {
      name: 'Weather App v1.0 ',
      des: 'A real time weather tracking web application which uses an API to get current weather data and displays to the user.',
      role: 'Front-end Developer, system analysis and design',
      language: 'HTML5, CSS3, Javascript, ReactJs...',
      images: weather1,
      link: ''
    }
  ])
  return (
    <div>
      <section className={`projects animation ${isVisible ? 'animation-active' : ''}`} ref={projectsRef}>
        <div className="title">
          My Projects
        </div>
        <div className="projectsDesc">
          Here is a preview  of some of my most IMPRESSIVE works during the course of my learning. Adding to this list is one of my top priorities as time goes on.
        </div>
        <div className="list">
          <Swiper
            // effect={'coverflow'}
            grabCursor = {true}
            centeredSlides = {true}
            loop = {true}
            slidesPerView={1}
            autoplay={{
              delay: 4500, // 3 seconds delay between slides
              disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
            // coverflowEffect={{
            //   rotate: 0,
            //   stretch: 0,
            //   depth: 100,
            //   modifier: 2.5,
            // }}
            pagination={{
              dynamicBullets: true,
            }}
            // pagination = {{el: '.swiperPagination', clickable: true}}
            // navigation = {{
            //   nextEl: 'swiperBtnNext', 
            //   prevEl: 'swiperBtnPrev',
            //   clickable: true,
            // }}
            modules={[Pagination, Autoplay]}
            // modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className='swiperContainer'
          >
            {
              listProjects.map((value, key) => (
                <SwiperSlide key={key}>
                  <div className='item'>

                    <div className="images">
                      <img src={value.images} alt="" />
                    </div>

                    <div className="content">
                      <h3>{value.name}</h3>

                      <div className="contentDesc">{value.des}</div>

                        <div className="mission">
                          <div className='missionIcon'><FaPersonCircleQuestion/></div>

                          <div className='projectInfo'>
                            <h4>Role</h4>
                            <div className="missionTxt">{value.role}</div>
                          </div>

                        </div>

                        <div className="mission">
                          <div className='missionIcon'><FaEarthAmericas/></div>

                          <div className='projectInfo'>
                            <h4>Language</h4>
                            <div className="missionTxt">{value.language}</div>
                          </div>
                          
                        </div>

                        <div className="mission">
                          <div className='missionIcon'><FaCode/></div>

                          <div className='projectInfo'>
                            <h4>Link</h4>
                            <div className="projectLink"> <a href={value.link} id='theLink'>{value.link}</a></div>
                          </div>
                          
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
             ))}
          </Swiper>
          
          {/* <div className="swiperController">
            <div className="swiperBtnPrev">
                <i><FaArrowLeft/></i>
            </div>
            <div className="swiperBtnNext">
               <i><FaArrowRight/></i>
            </div>
            <div className="swiperPagination"></div>
          </div> */}
           
        </div>
      </section>
    </div>
  )
}

export default Projects
