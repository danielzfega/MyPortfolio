import React, { useState } from 'react'
import './Navbar.css'
// import Contact from '../Contact/Contact';

const Navbar = ({scrollToSection, refs}) => {
    // alert(activeTab)
    // console.log("Active Tab:", activeTab);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [listNav] = useState([
        { name: 'Home', ref: refs.homeRef },
        { name: 'Skills', ref: refs.skillsRef },
        { name: 'Projects', ref: refs.projectsRef },
        { name: 'Contact', ref: refs.contactRef },
    ]);
    
  
  return (
    <header>
        <div className="logo">
            <h1>Daniels Fega</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            {
                listNav.map((value, key) => (
                    <span 
                        id='navLinks'
                        className='navLinks'
                        key={key} 
                        // className='active'
                        onClick={() => scrollToSection(value.ref)}

                    >
                        {value.name}
                    </span>
                ))
            }
        </nav>

        <div className="menu-toggle">
            <input type="checkbox" id="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
            <label htmlFor="checkbox" className="toggle">
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
            </label>
        </div>
    </header>
  )
}


export default Navbar;

