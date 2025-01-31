import React, {useState, useRef, useEffect} from 'react'
import './Contact.css'
import { BsMailboxFlag } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import CustomHook from '../CustomHook';


const Contact = () => {
  const contactRef = useRef();
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '+234-4104-9407',
      icon: <LuPhoneCall/>
    },
    {
      title: 'Email',
      value: 'omajeneoghenefega11@gmail.com',
      icon: <BsMailboxFlag/> 
    },
    {
      // title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/oghenefega-omajene-0291b12a9/',
      icon: <FaLinkedin />,
    },
    {
      // title: 'GitHub',
      link: 'https://github.com/OghenefegaOmajene',
      icon: <FaGithub />, 
    }
  ])

  return (
    <section className={`contacts animation ${isVisible ? 'animation-active' : ''}`} ref={contactRef}>
      <div className="title">
        Contact Me
      </div>
      <div className='contactDesc'>
        Want to create a visually stunning masterpiece that combines modern innovations and trending designs? I've got you. Contact me on any of these platforms and let's get started  
      </div>
      <div className="listContact">
        {
          listContacts.map((value, key) =>(
            <div key={key} className="listContactItem">
              <h3>{value.title}  <a href={value.link}><i>{value.icon}</i></a></h3>
             
              <h4>{value.value} </h4>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Contact