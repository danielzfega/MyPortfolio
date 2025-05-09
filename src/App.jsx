import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'

function App() {
  const homeRef = useRef();
  const aboutRef = useRef();
  const projectsRef = useRef();
  const expRef = useRef();
  
  const scrollToSection = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <main>
        <Navbar scrollToSection={scrollToSection} refs={{ homeRef, aboutRef, projectsRef, expRef }} />
        <main>
          <section ref={homeRef}><Home /></section>
          <section ref={aboutRef}><About /></section>
          <section ref={projectsRef}><Projects /></section>
          <section ref={expRef}><Experience /></section>
        </main>
      </main>
    </>
  )
}

export default App
