import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const changeMode = () => {
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'bg-gray-100'}`}>
      <div className={`${darkMode ? 'bg-dark ' : 'bg-light'} lg:h-full  `}>
        <div className='p-3 max-w-7xl mx-auto'>
          <Navbar changeMode={changeMode} darkMopde={darkMode} />
          <Hero />
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className='text-center py-5 border-t-2 dark:text-white'>
        All Right Reserved 2022 - Frannz Suaverdez
      </footer>
    </div>
  )
}

export default App
