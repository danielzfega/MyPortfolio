import React, { useState } from "react";
import { FaHouse, FaUser, FaRegFolderOpen, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { IoSunnyOutline, IoMoon } from "react-icons/io5";
import "./Navbar2.css"; // custom CSS file for styling

export default function Navbar({scrollToSection, refs}) {
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { label: "Home", icon: <FaHouse />, ref: refs.homeRef },
    { label: "About", icon: <FaUser />, ref: refs.aboutRef },
    { label: "Projects", icon: <FaRegFolderOpen />, ref: refs.projectsRef },
    { label: "Experience", icon: <FaBriefcase />, ref: refs.expRef },
    { label: "Contact", icon: <FaEnvelope />, ref: refs.contactRef },
  ];


  const socials = [
    { name: "GitHub", url: "https://github.com/404khai", icon: <FaGithub /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/daniels-fega-0291b12a9", icon: <FaLinkedin /> },
  ];

  return (
    <div className={`navbar-container ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">
        {navItems.map((item) => (
          <a key={item.label} onClick={() => scrollToSection(item.ref)} className="nav-icon" title={item.label}>
            {item.icon}
          </a>
        ))}

        <div className="separator" />

        {socials.map((social) => (
          <a key={social.name} href={social.url} className="nav-icon" title={social.name} target="_blank" rel="noreferrer">
            {social.icon}
          </a>
        ))}

        <div className="separator" />

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="nav-icon"
          title="Toggle Theme"
        >
          {darkMode ? <IoMoon /> : <IoSunnyOutline />}
        </button>
      </nav>
    </div>
  );
}

