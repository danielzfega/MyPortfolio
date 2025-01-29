import React, {useState} from 'react'
import { useRef } from 'react';
import './Contact.css'
import { BsMailboxFlag } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import CustomHook from '../CustomHook';


const Contact = () => {
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

  const refTab = useRef();
  CustomHook(refTab);
  return (
    <section className="contacts" ref={refTab}>
      <div className="title">
        Contact Me
      </div>
      <div className='contactDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla delectus esse illo corrupti similique voluptates ducimus officia minus consequuntur, non vel iure vero maxime quidem praesentium alias culpa! Voluptatem, soluta.
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