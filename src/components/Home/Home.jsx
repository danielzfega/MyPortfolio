// import React, { useState, useRef, useEffect } from "react";
// import "./Home2.css";
// import me from "../../images/fega.png";

// const Home = () => {
//   const [typedText, setTypedText] = useState("");
//   const [hasAnimated, setHasAnimated] = useState(false);

//   useEffect(() => {
//     if (!hasAnimated) return;

//     const fullText = "hi, Fega here.";
//     let index = 0;

//     const typingInterval = setInterval(() => {
//       setTypedText((prev) => prev + fullText.charAt(index));
//       index++;

//       if (index >= fullText.length) {
//         clearInterval(typingInterval);
//       }
//     }, 150);

//     return () => clearInterval(typingInterval);
//   }, [hasAnimated]);

//   const homeRef = useRef();
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !hasAnimated) {
//           setHasAnimated(true);
//         }
//       },
//       { threshold: 0.3 }
//     );

//     if (homeRef.current) {
//       observer.observe(homeRef.current);
//     }

//     return () => {
//       if (homeRef.current) {
//         observer.unobserve(homeRef.current);
//       }
//     };
//   }, [hasAnimated]);

//   return (
//     <div
//       className={`home-container ${hasAnimated ? "animation-active" : ""}`}
//       ref={homeRef}
//     >
//       {/* LEFT SIDE: TEXT */}
//       <div className="text-box">
//         <p className="hiTxt">
//           <b>
//             {typedText.split("Fega").map((part, index, array) => (
//               <React.Fragment key={index}>
//                 {part}
//                 {index < array.length - 1 && (
//                   <span className="hiTxtSpan">Fega</span>
//                 )}
//               </React.Fragment>
//             ))}
//           </b>
//           <span className="blinking-cursor">|</span>
//         </p>
//         <p className="intro">
//           Hello 👋, and welcome to my portfolio website. I am an enthusiastic
//           Software Engineer, currently based in Nigeria who is passionate about
//           building projects that combine aesthetics with modern innovation, AI,
//           and startups.
//         </p>

//           <div className="radio-wrapper">
//             <input className="input" name="btn" id="value-3" type="radio"/>
//             <div className="btn">
//               Download my CV<span aria-hidden=""></span>
//               <span className="btn__glitch" aria-hidden="">ERROR</span>
//               <label className="number">r3</label>
//             </div> 
//           </div>
//       </div>

//       {/* RIGHT SIDE: IMAGE */}
//       <div className="image-box">
//         <img src={me} alt="Fega" />
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, {useState, useRef, useEffect} from 'react'
import './Home.css'
import me from "/fega.png";

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  useEffect(() => {
    if (!hasAnimated) return;
  
    const fullText = "hhi, Fega here.";
    let index = 0;
  
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText.charAt(index));
      index++;
  
      if (index >= fullText.length) {
        clearInterval(typingInterval);
      }
    }, 200); // Adjust typing speed here
  
    return () => clearInterval(typingInterval);
  }, [hasAnimated]);



  const homeRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );
  
    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
  
    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, [hasAnimated]);

  return (
       <div
      className={`home-container ${hasAnimated ? "animation-active" : ""}`}
      ref={homeRef}
    >
      {/* LEFT SIDE: TEXT */}
      <div className="heroText">
        <p className="hiTxt">
          <b>
            {typedText.split("Fega").map((part, index, array) => (
              <React.Fragment key={index} >
                {part}
                {index < array.length - 1 && (
                  <span className="hiTxtSpan">Fega</span>
                )}
              </React.Fragment>
            ))}
          </b>
          <span className="blinking-cursor">|</span>
        </p>
        <p className="intro">
          Software Engineer, Roblox Developer.
        </p>

          
          <button class="button">
              <span class="button_lg">
                  <span class="button_sl"></span>
                  <span class="button_text">Download my CV</span>
              </span>
          </button>
      </div>

      {/* RIGHT SIDE: IMAGE */}
      {/* <div className="myPic">
        <img src={me} alt="my photo" />
      </div> */}
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