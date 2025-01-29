import React, { useState } from 'react'
import { FaHtml5 } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import './Skills.css'

const Skills = () => {
  const[listSkills] = useState([
    {
      icon: <FaHtml5 />,
      name: 'HTML'
    },
    {
      icon: <IoLogoCss3 />,
      name: 'CSS'
    },
    {
      icon: <TbBrandJavascript />,
      name: 'JavaScript'
    },
    {
      icon: <FaReact />,
      name: 'ReactJs'
    },
    {
      icon: <IoLogoNodejs />,
      name: 'NodeJS'
    },
    {
      icon: <BiLogoPostgresql />,
      name: 'SQL'
    },
    {
      icon: <FaJava />,
      name: 'JAVA'
    },
    {
      icon: <TbBrandCSharp />,
      name: 'C#'
    },
  ])
  return (
    <div className="skills">
      <div className="title">
        These are My Skills
      </div>
      <div className="titleDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aspernatur quam eos quasi maiores quas aliquid dignissimos animi voluptate velit rem at ad delectus dolor illo, corporis voluptatibus sunt ipsum?
      </div>
      <div className="skillList">
        {
          listSkills.map((value, key) =>(
            <div key={key} className="skillItem">
              <i>{value.icon}</i>
              <h3>{value.name}</h3>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills