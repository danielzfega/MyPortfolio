import React, {useState, useRef, useEffect} from 'react'
import './Home.css'



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
    // <div className={`home animation ${isVisible ? 'animation-active' : ''}`} ref={homeRef}>
    <div className={`home animation ${hasAnimated ? 'animation-active' : ''}`} ref={homeRef}>
    {/* <div className="home" ref={homeRef}> */}
      <div className="helloBanner">
        <p className="hiTxt">
          <b>
            {
              typedText.split("Fega").map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && <span className="hiTxtSpan">Fega</span>}
                </React.Fragment>
              ))
            }
          </b>
          <span className="blinking-cursor">|</span>
        </p>


        {/* <p className="hiTxt"><b>hi, <span className="hiTxtSpan">Fega</span> here.</b></p> */}
        {/* <p><i>Fullstack Web Developer, App Developer, Roblox Dev...</i></p> */}
        <p className="intro">Hello 👋, and welcome to my portfolio website. I am an enthusiastic Software Engineer, currently based in Nigeria who is passionate about building projects that combine aesthetics with modern innovation, AI and startups.</p>

        <a href="" className='downloadCv'>Download My CV</a>
      </div>

      {/* <div className="intro">
        <h1 className='name'>MY NAME IS <span className='nameSpan'>DANIELS FEGA</span></h1>
        <p>Hello 👋, and welcome to my portfolio website. I am an enthusiastic Software Enginner who is passionate about building projects that combine aesthetics with modern innovation.</p>
        <a href="" className='downloadCv'>Download My CV</a>
      </div>

      <div className="myPic">
        <img src={myPic} alt="" />
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