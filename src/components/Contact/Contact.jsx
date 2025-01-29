import React, {useState} from 'react'
import './Contact.css'
import { BsMailboxFlag } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";

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
    }
  ])
  return (
    <section className="contacts">
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
              <h3>{value.title} <i>{value.icon}</i></h3>
              <h4>{value.value} </h4>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Contact