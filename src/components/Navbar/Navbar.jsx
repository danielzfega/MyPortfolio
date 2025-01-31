import React, { useState } from 'react'
import './Navbar.css'
// import Contact from '../Contact/Contact';

const Navbar = ({scrollToSection, refs}) => {
    // alert(activeTab)
    // console.log("Active Tab:", activeTab);
    
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
        <nav>
            {
                listNav.map((value, key) => (
                    <span 
                        id='navLinks'
                        key={key} 
                        className='active'
                        onClick={() => scrollToSection(value.ref)}

                    >
                        {value.name}
                    </span>
                ))
            }
        </nav>
    </header>
  )
}
// const mapDispatchToProps = (dispatch) => ({
//     changeActiveTab: (value) => dispatch(changeActiveTab(value))
// });

// const mapStateToProps = (state) => {
//     console.log("Redux State:", state); // Debugging
//     return {
//         activeTab: state.activeTab // Ensure `state.activeTab` exists
//     };
// };

export default Navbar;

