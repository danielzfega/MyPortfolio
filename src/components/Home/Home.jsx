import React, {useState, useRef, useEffect} from 'react'
import avatar from '../../images/avatar.png'
import myPic from '../../images/myPic.png'
import './Home.css'
import { FaCalendarAlt, FaLaptopCode } from "react-icons/fa";
import { GiNigeria } from "react-icons/gi";
import { FaMale } from "react-icons/fa";
// import {Swiper, SwiperSlide} from 'swiper/react'
// import {Navigation, Pagination, Autoplay, EffectCube} from 'swiper/modules';


// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import 'swiper/css/effect-cube'


const Home = () => {
  const homeRef = useRef();
  const [isVisible, setIsVisible] = useState(false)
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { threshold: 0.3 } // Trigger when 30% of the section is visible
      );
  
      if (homeRef.current) {
        observer.observe(homeRef.current);
      }
  
      return () => {
        if (homeRef.current) {
          observer.unobserve(homeRef.current);
        }
      };
    }, []);

  return (
    <div className={`home animation ${isVisible ? 'animation-active' : ''}`} ref={homeRef}>

      <div className="intro">
        <h1 className='name'>MY NAME IS <span className='nameSpan'>DANIELS FEGA</span></h1>
        <p>Hello 👋, and welcome to my portfolio website. I am an enthusiastic Software Enginner who is passionate about building projects that combine aesthetics with modern innovation.</p>
        <a href="" className='downloadCv'>Download My CV</a>
      </div>

      <div className="myPic">
        <img src={myPic} alt="" />
      </div>

    </div>
  )
}

export default Home



{/* <Swiper
            effect={'cube'}
            // grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            modules={[Pagination, EffectCube, Navigation, Autoplay]}
            className="myHomeSwiper"
            autoplay={{
              delay: 3000, // 3 seconds delay between slides
              disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
          >
           {
              swapPics.map((value, key) => (
                <SwiperSlide key={key} className='picSlideShow'>
                  <img src={value.picImg} alt="" />
                </SwiperSlide>
              
            ))}
          </Swiper> */}