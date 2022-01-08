import headline from '../img/heading.png'
import { FaSearch } from 'react-icons/fa'
const Hero = () => {
  return (
    <div className='flex flex-col-reverse items-center justify-center lg:flex-row lg:justify-between my-20 lg:mt-32 dark:text-white   px-6'>
      <div>
        <h1 className='font-bold text-5xl mt-20  lg:text-7xl lg:leading-normal text-center lg:text-left'>
          Hi! I’m Frannz,
          <br /> a Web Developer.
        </h1>
        <p className='text-gray-500 text-2xl font-semibold text-center lg:text-left'>
          I love learning things about technology!
        </p>
        <div className='mt-10 '>
          <a
            href='/'
            className='bg-sky-500 font-bold p-5 rounded-full text-white shadow-md  tranform hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0.5 transition-all duration-75 ease-in-out text-2xl  flex justify-start items-center w-fit shadow-sky-500-30 dark:shadow-sky-500/30 mx-auto lg:mx-0'
          >
            <FaSearch className='mr-4 font-bold' />
            My Projects
          </a>
        </div>
      </div>

      <img
        className='w-2/4 lg:w-2/5 lg:mb-10 animate-bounce-slow'
        src={headline}
        alt='computer'
      />
    </div>
  )
}

export default Hero
