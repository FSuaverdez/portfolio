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
  DiCss3,
} from 'react-icons/di';

export const projects = [
  {
    title: 'GetSeatGo',
    description:
      'Movie ticket reservation web application that helps a cinema sell seat tickets online using paypal payment method.',
    techs: ['Node.js', 'EJS', 'Mongodb'],
    github: 'https://github.com/FSuaverdez/GetSeatGo',
    live: 'https://get-seat-go.herokuapp.com/',
    image: 'https://i.imgur.com/LXSas3Z.png',
  },
  {
    title: 'GameShop',
    description:
      'E-commerce web application that aims to sell gaming products like games and gaming peripherals.',
    techs: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    github: 'https://github.com/FSuaverdez/GameShop',
    live: null,
    image: 'https://i.imgur.com/qU7EDXl.png',
  },
  {
    title: 'Google Clone',
    description:
      'A google clone web application that uses RapidAPI to search google results and present it to the user.',
    techs: ['React.js', 'RapidAPI'],
    github: 'https://github.com/FSuaverdez/google-clone',
    live: 'https://fsuaverdez.github.io/google-clone/#/search',
    image: 'https://i.imgur.com/UvvOTFr.jpg',
  },
  {
    title: 'GameHunt',
    description:
      'A React Native application that finds the latest and trending video games and providing description of the game with the help of RAWG ',
    techs: ['React Native', 'RAWG API'],
    github: 'https://github.com/FSuaverdez/GameHunt',
    live: null,
    image: 'https://i.imgur.com/15QHvmh.png',
  },
];

export const skills = [
  {
    component: <DiJavascript1 className='text-yellow-300 text-4xl' />,
    title: 'JavaScript',
  },
  {
    component: <DiHtml5 className='text-red-500 text-4xl' />,
    title: 'HTML',
  },
  {
    component: <DiCss3 className='text-blue-500 text-4xl' />,
    title: 'CSS',
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
];
