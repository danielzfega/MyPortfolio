// import React, { useState, useRef, useEffect } from 'react'
// import html from '../../images/html5.jpg'
// import css from '../../images/css3.png'
// import javascript from '../../images/javascript.png'
// import typescript from '../../images/typescript.png'
// import nodejs from '../../images/nodejs.png'
// import sql from '../../images/postgesql.png'
// import reactjs from '../../images/react.png'
// import nextjs from '../../images/nextjs.png'
// import angular from '../../images/angular.png'
// import reactNative from '../../images/react-native.webp'
// import c from '../../images/c.png'
// import csharp from '../../images/csharp.svg'
// import java from '../../images/java.png'
// import php from '../../images/php.png'
// import './Skills.css'

// import { Swiper, SwiperSlide } from 'swiper/react';

// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import { EffectCoverflow, Pagination } from 'swiper/modules';

// const Skills = () => {
//   const skillsRef = useRef();
//   const [isVisible, setIsVisible] = useState(false)
  
//     useEffect(() => {
//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           setIsVisible(entry.isIntersecting);
//         },
//         { threshold: 0.3 } // Trigger when 30% of the section is visible
//       );
  
//       if (skillsRef.current) {
//         observer.observe(skillsRef.current);
//       }
  
//       return () => {
//         if (skillsRef.current) {
//           observer.unobserve(skillsRef.current);
//         }
//       };
//     }, []);


//   return (
//     <div className={`skills animation ${isVisible ? 'animation-active' : ''}`} ref={skillsRef}>
//       <div className="title">
//         These are My Skills
//       </div>
//       <div className="titleDesc">
//         Here is a list of my skillset. Hopefully as time progresses, I'll pick up a ton more along the way in my Software Engineering journey ‼️
//       </div>
//       <div className="skillList">
//         {
//           listSkills.map((value, key) =>(
//             <Swiper
//               effect={'coverflow'}
//               grabCursor={true}
//               centeredSlides={true}
//               slidesPerView={'auto'}
//               coverflowEffect={{
//                 rotate: 50,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 1,
//                 slideShadows: true,
//               }}
//               pagination={true}
//               modules={[EffectCoverflow, Pagination]}
//               className="mySwiper"
//             >
//               <SwiperSlide>
//                 <div key={key} className="skillItem">
                
//                 </div>
//               </SwiperSlide>
//             </Swiper>
//           ))
//         }
//       </div>
//     </div>
//   )
// }

// export default Skills



import React, { useState, useRef, useEffect } from "react";
import "./Skills.css";

import html from "../../images/html.png";
import css from "../../images/css3(2).png";
import javascript from "../../images/javascript.png";
import typescript from "../../images/typescript.png";
import nodejs from "../../images/nodejs.png";
import sql from "../../images/postgesql.png";
import reactjs from "../../images/react.png";
import nextjs from "../../images/nextjs.png";
import angular from "../../images/angular.png";
import reactNative from "../../images/reactNative.png";
import c from "../../images/c2.png";
import csharp from "../../images/csharp.svg";
import java from "../../images/java.png";
import php from "../../images/php.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const Skills = () => {
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
  const listSkills = [
    { image: html },
    { image: css },
    { image: javascript },
    { image: typescript },
    { image: nodejs },
    { image: sql },
    { image: reactjs },
    { image: nextjs },
    { image: angular },
    { image: reactNative },
    { image: c },
    { image: csharp },
    { image: java },
    { image: php },
  ];

  return (
    <div
      className={`skills animation ${isVisible ? "animation-active" : ""}`}
      ref={skillsRef}
    >
      <div className="title">These are My Skills</div>
      <div className="titleDesc">
        Here is a list of my skillset. Hopefully, as time progresses, I'll pick
        up a ton more along the way in my Software Engineering journey ‼️
      </div>
      <div className="skillList">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000, // 3 seconds delay between slides
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          pagination={{
            // dynamicBullets: true,
            clickable: true 
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {listSkills.map((skill, index) => (
            <SwiperSlide key={index}>
              {/* <div className="skillItem"> */}
                <img src={skill.image} alt={skill.name} className="skillImage" />
              {/* </div> */}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Skills;
