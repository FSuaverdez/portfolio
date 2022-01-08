import { useState } from 'react'
import emailjs, { init } from '@emailjs/browser'
import { AiFillLinkedin, AiFillGithub, AiFillMail } from 'react-icons/ai'

const Contact = () => {
  init(process.env.REACT_APP_USER_ID)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  const sendEmail = e => {
    e.preventDefault()

    if (name && email && message) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then(
          result => {
            console.log(result.text)
            setError(false)
            setSuccess(true)
          },
          error => {
            console.log(error.text)
            setError(true)
            setSuccess(false)
          }
        )
    }
  }
  return (
    <div className='p-3 max-w-7xl mx-auto pb-10' id='about'>
      <div className='px-6 mt-5 max-w-7xl '>
        <h2
          id='contact'
          className='text-4xl lg:text-6xl font-bold border-b-2 border-gray-500 dark:text-sky-500 dark:border-sky-500'
        >
          Contact Me
        </h2>
        <p className='text-lg md:text-xl lg:text-2xl mt-2  dark:text-white'>
          Feel free to contact me!
        </p>
        <div className='flex flex-wrap mt-3 items-center gap-5 py-4'>
          <h3 className='text-3xl dark:text-white'>Socials:</h3>
          <ul className='flex items-center justify-center gap-4'>
            <li>
              <a
                href='https://www.linkedin.com/in/fsuaverdez/'
                rel='noreferrer'
                target='_blank'
              >
                <AiFillLinkedin className='text-4xl text-sky-400' />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/fsuaverdez/'
                rel='noreferrer'
                target='_blank'
              >
                <AiFillGithub className='text-4xl text-gray-900 dark:text-gray-300' />
              </a>
            </li>
            <li>
              <a
                href='mailto: sfrannz@gmail.com'
                rel='noreferrer'
                target='_blank'
              >
                <AiFillMail className='text-4xl text-red-600' />
              </a>
            </li>
          </ul>
        </div>
        <form
          onSubmit={sendEmail}
          className='text-lg max-w-4xl mx-auto dark:text-white'
        >
          <div className='text-center'>
            {error && (
              <p className='text-red-500 py-3'>
                Error occured. Please reload the page and try again.
              </p>
            )}
            {success && (
              <p className='text-green-500 py-3'>Message Sent Successfully!</p>
            )}
          </div>
          <label htmlFor='name' className='font-bold mt-4 inline-block'>
            Name:
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            className='w-full p-3'
            type='text'
            id='name'
            name='name'
          />
          <label htmlFor='email' className='font-bold mt-4 inline-block'>
            Email:
          </label>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='w-full p-3'
            type='email'
            id='email'
            name='email'
          />
          <label htmlFor='message' className='font-bold mt-4 inline-block'>
            Message:
          </label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            className='w-full p-3 h-40 resize-none'
            id='message'
            name='message'
          />
          <div className='text-center'>
            <button
              className=' bg-sky-500 text-white font-bold rounded-full px-5 py-2'
              type='submit'
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
