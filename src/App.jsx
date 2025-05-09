import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  const homeRef = useRef();
  const skillsRef = useRef();
  const projectsRef = useRef();
  const contactRef = useRef();
  
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <main>
        <Navbar scrollToSection={scrollToSection} refs={{ homeRef, skillsRef, projectsRef, contactRef }} />
        <main>
          <section ref={homeRef}><Home /></section>
          <section ref={skillsRef}><About /></section>
          <section ref={projectsRef} className='project'><Projects /></section>
          <section ref={contactRef} className='contact'><Contact /></section>
        </main>
      </main>
    </>
  )
}

export default App
