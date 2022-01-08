import { BsFillSunFill } from 'react-icons/bs'

const links = [
  { title: 'About Me', target: '#about' },
  { title: 'Projects', target: '#projects' },
]

const Navbar = ({ changeMode, darkMode }) => {
  return (
    <nav className='flex flex-col lg:flex-row lg:justify-between mt-10 justify-center items-center w-full  px-6 text-black dark:text-sky-400 '>
      <div className='flex flex-col lg:flex-row'>
        <a
          href='/'
          className='text-5xl transform transition-all hover:-translate-y-0.5 border-b-2 border-transparent hover:border-solid hover:border-b-2  active:translate-y-0.5  hover:border-sky-500 font-bold drop-shadow-lg  duration-75 ease-in-out inline-block  '
        >
          Frannz.Dev
        </a>
        <ul className='flex flex-col mt-4 lg:mt-0 lg:ml-16 lg:flex-row gap-6 lg:gap-10 items-center justify-center font-bold text-2xl'>
          {links.map(link => (
            <li key={link.title}>
              <a
                href={link.target}
                className='outline-none transform transition-all hover:-translate-y-0.5 border-b-2 border-transparent hover:border-solid hover:border-b-2  active:translate-y-0.5  hover:border-sky-500 font-bold drop-shadow-lg  duration-75 ease-in-out inline-block'
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-4 lg:mt-0  flex flex-col-reverse items-center justify-center lg:flex-row lg:items-end-end text-xl'>
        <button type='button' onClick={changeMode}>
          <BsFillSunFill
            className='text-gray-700 dark:text-yellow-500 lg:mr-10 my-5 transform transition-all hover:-translate-y-0.5 active:translate-y-0.5 duration-75 ease-in-out'
            fontSize={30}
          />
        </button>
        <a
          href='#contact'
          className='bg-sky-500 font-bold p-3 rounded-full text-white shadow-md inline-block tranform hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0.5 transition-all duration-75 ease-in-out dark:shadow-sky-500/30'
        >
          Contact Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar
