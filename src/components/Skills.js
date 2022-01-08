import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiGithubBadge,
  DiMongodb,
  DiJava,
  DiPhp,
  DiMysql,
} from 'react-icons/di'

const skills = [
  {
    component: <DiJavascript1 className='text-yellow-300 text-4xl' />,
    title: 'JavaScript',
  },
  {
    component: <DiHtml5 className='text-red-500 text-4xl' />,
    title: 'HTML',
  },
  {
    component: <DiReact className='text-cyan-500 text-4xl' />,
    title: 'React.JS',
  },
  {
    component: <DiNodejsSmall className='text-green-500 text-4xl' />,
    title: 'Node.JS',
  },
  {
    component: <DiReact className='text-cyan-500 text-4xl' />,
    title: 'React Native',
  },
  {
    component: <DiGit className='text-orange-500 text-4xl' />,
    title: 'Git',
  },
  {
    component: <DiGithubBadge className='text-gray-500 text-4xl' />,
    title: 'Github',
  },
  {
    component: <DiMongodb className='text-green-500 text-4xl' />,
    title: 'MongoDB',
  },
  {
    component: <DiJava className='text-red-500 text-4xl' />,
    title: 'Java',
  },
  {
    component: <DiPhp className='text-blue-500 text-4xl' />,
    title: 'PHP',
  },
  {
    component: <DiMysql className='text-blue-500 text-4xl' />,
    title: 'MySQL',
  },
]
const Skills = () => {
  return (
    <div className='p-3 max-w-7xl mx-auto' id='about'>
      <div className='px-6 mt-5 max-w-7xl '>
        <h2 className='text-4xl lg:text-6xl font-bold border-b-2 border-gray-500 dark:text-sky-500 dark:border-sky-500'>
          Skills
        </h2>
        <div className='mt-5 lg:mt-10 flex flex-wrap mx-auto max-w-4xl  gap-6'>
          {skills.map(skill => (
            <div className='rounded-lg transform hover:-translate-y-0.5 bg-white p-3 shadow-xl text-center mx-auto flex flex-col justify-center items-center duration-75 ease-in-out hover:shadow-2xl w-28 h-28 hover:dark:shadow-sky-500'>
              {skill.component}
              <p className='font-bold mt-3'>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
