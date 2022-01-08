import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  const changeMode = () => {
    setDarkMode(prevState => !prevState)
  }

  return (
    <div className={`${darkMode && 'dark bg-black'}`}>
      <div className={`${darkMode ? 'bg-dark ' : 'bg-light'} h-screen `}>
        <div className='p-3 max-w-7xl mx-auto'>
          <Navbar changeMode={changeMode} darkMopde={darkMode} />
          <Hero />
        </div>
      </div>
      <Projects />
    </div>
  )
}

export default App
