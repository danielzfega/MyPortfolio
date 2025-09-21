import React, { useState } from "react";
import { FaHome, FaUser, FaEnvelope, FaGithub, FaMoon, FaSun } from "react-icons/fa";
import "./Navbar2.css"; // custom CSS file for styling

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const navItems = [
    { href: "/", label: "Home", icon: <FaHome /> },
    { href: "/about", label: "About", icon: <FaUser /> },
    { href: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const socials = [
    { name: "GitHub", url: "https://github.com/", icon: <FaGithub /> },
  ];

  return (
    <div className={`navbar-container ${darkMode ? "dark" : ""}`}>
      <nav className="navbar">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-icon" title={item.label}>
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
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </div>
  );
}


// import React, { useState } from 'react'
// import './Navbar.css'
// import { MdAttachEmail } from "react-icons/md";
// import { FaLinkedin, FaGithub } from "react-icons/fa";
// // import Contact from '../Contact/Contact';

// const Navbar = ({scrollToSection, refs}) => {
//     // alert(activeTab)
//     // console.log("Active Tab:", activeTab);
//     const [isMenuOpen, setIsMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     const [listNav] = useState([
//         { name: 'Home', ref: refs.homeRef },
//         { name: 'About', ref: refs.aboutRef },
//         { name: 'Projects', ref: refs.projectsRef },
//         { name: 'Experience', ref: refs.expRef },
//     ]);
    
  
//   return (
//     <header>
//         <div className="leftNav">
//             <p>Daniels Fega</p>
//             <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
//                 {
//                     listNav.map((value, key) => (
//                         <span 
//                             id='navLinks'
//                             className='navLinks'
//                             key={key} 
//                             // className='active'
//                             onClick={() => scrollToSection(value.ref)}

//                         >
//                             {value.name}
//                         </span>
//                     ))
//                 }
//             </nav>
//         </div>

//         <div className="rightNav">
//             <i><MdAttachEmail/></i>
//             <i>
//                 <a href="https://github.com/OghenefegaOmajene"><FaGithub/></a>
//             </i>
//             <i>
//                 <a href="https://www.linkedin.com/in/daniels-fega-0291b12a9/"><FaLinkedin/></a>
//             </i>
//         </div>

//         <div className="menu-toggle">
//             <input type="checkbox" id="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
//             <label htmlFor="checkbox" className="toggle">
//             <div className="bars" id="bar1"></div>
//             <div className="bars" id="bar2"></div>
//             <div className="bars" id="bar3"></div>
//             </label>
//         </div>
//     </header>
//   )
// }


// export default Navbar;

