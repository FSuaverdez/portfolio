import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const changeMode = () => {
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className={`${darkMode ? 'dark bg-black' : 'bg-gray-50'}`}>
      <div className={`${darkMode ? 'bg-dark ' : 'bg-light'} h-screen `}>
        <div className='p-3 max-w-7xl mx-auto'>
          <Navbar changeMode={changeMode} darkMopde={darkMode} />
          <Hero />
        </div>
      </div>
      <About />
      <Skills />
    </div>
  )
}

export default App
