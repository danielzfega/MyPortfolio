import React, { useState } from 'react'
import './Navbar.css'
import { connect } from 'react-redux';
import {changeActiveTab} from '../../redux/action'

// import Logo from '../../images/logo.png'

const Navbar = ({activeTab = 'Home'}) => {
    // alert(activeTab)
    console.log("Active Tab:", activeTab);
    
    const [listNav] = useState(['Home', 'Skills', 'Projects', 'Contact']);
    
  
  return (
    <header>
        <div className="logo">
            <h1>Daniels Fega</h1>
        </div>
        <nav>
            {
                listNav.map((value, key) => (
                    <span 
                        key={key} 
                        className={activeTab === value ? 'active' : ''}
                        onClick={() => changeActiveTab(value)}
                    >
                        {value}
                    </span>
                ))
            }
        </nav>
    </header>
  )
}
const mapDispatchToProps = (dispatch) => ({
    changeActiveTab: (value) => dispatch(changeActiveTab(value))
});

const mapStateToProps = (state) => {
    console.log("Redux State:", state); // Debugging
    return {
        activeTab: state.activeTab // Ensure `state.activeTab` exists
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

