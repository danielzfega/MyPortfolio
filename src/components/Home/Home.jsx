import React from 'react'
import avatar from '../../images/avatar.png'
import './Home.css'
import { FaLaptopCode } from "react-icons/fa";
import { GiNigeria } from "react-icons/gi";
import { FcCalendar } from "react-icons/fc";
import { FaMale } from "react-icons/fa";

const Home = () => {
  return (
    <section className='home'>

      <div className="content">
        <div className="name">
          MY NAME IS <span className='nameSpan'>DANIELS FEGA</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, recusandae! Commodi, veniam quis quibusdam sequi debitis eveniet impedit laborum, molestiae quidem, earum aut tenetur? Magni sit hic quam fugit illum.
        </div>
        <a href="">Download My CV</a>
      </div>

      <div className="avatar">
        <div className="card">
          <img src={avatar} alt="" />
          <div className="info">
            <div><FaLaptopCode /> Developer</div>
            <div><GiNigeria /> Nigerian</div>
            <div><FcCalendar /> 11th November</div>
            <div><FaMale /> Male</div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home