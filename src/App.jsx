import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'

function App() {
  
  return (
    <>
      <main>
          <Navbar/>
          <Home/>
          <Skills></Skills>
          <Projects></Projects>
          <Contact></Contact>
      </main>
    </>
  )
}

export default App
