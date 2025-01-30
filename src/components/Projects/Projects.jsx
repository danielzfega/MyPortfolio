import React, {useState} from 'react'
import { FaPersonCircleQuestion, FaEarthAmericas, FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import homestyler from '../../images/homestyler.png'
import studyhub from '../../images/studyhub.png'
import weather1 from '../../images/weather1.0.png'
import './Projects.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => { 
  const [listProjects] = useState([
    {
      name: 'HomeStyler | Interior Home Decor',
      des: 'A frontend design for an imaginary company that provides home interior decor services based on the SRS given by Aptech Computer Learning as part of a project',
      mission: 'Front-end Developer, Team Leader, System analysis and design',
      language: 'HTML5, CSS3, ReactJs...',
      images: homestyler
    },
    {
      name: 'StudyHub | E-Learning Website',
      des: 'Prototypes for About page and Blog page designs for a modern fullstack E-Learning Website project.',
      mission: 'Front-end Developer, System design',
      language: 'HTML5, CSS3, ReactJs...',
      images: studyhub
    },
    {
      name: 'Weather App Demo v1.0 ',
      des: 'A real time weather tracking web application which uses an API to get current weather data and displays to the user.',
      mission: 'Front-end Developer, system analysis and design',
      language: 'HTML5, CSS3, Javascript, ReactJs...',
      images: weather1
    }
  ])
  return (
    <div>
      <section className="projects">
        <div className="title">
          My Projects
        </div>
        <div className="projectsDesc">
          Here is a preview  of some of my most IMPRESSIVE works during the course of my learning. Adding to this list is one of my top priorities as time goes on.
        </div>
        <div className="list">
          <Swiper
            effect={'coverflow'}
            grabCursor = {true}
            centeredSlides = {true}
            loop = {true}
            slidesPerView={1}
            autoplay={{
              delay: 3000, // 3 seconds delay between slides
              disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination = {{el: '.swiperPagination', clickable: true}}
            // navigation = {{
            //   nextEl: 'swiperBtnNext', 
            //   prevEl: 'swiperBtnPrev',
            //   clickable: true,
            // }}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
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

                        <div>
                          <h4>Role</h4>
                          <div className="missionTxt">{value.mission}</div>
                        </div>

                      </div>

                      <div className="mission">
                        <div className='missionIcon'><FaEarthAmericas/></div>

                        <div>
                          <h4>Language</h4>
                          <div className="missionTxt">{value.language}</div>
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
