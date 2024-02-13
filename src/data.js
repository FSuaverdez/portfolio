import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiGithubBadge,
  DiMongodb,
  DiPhp,
  DiMysql,
  DiCss3,
} from "react-icons/di";

import { SiTailwindcss } from "react-icons/si";

import { SiNextdotjs, SiTypescript } from "react-icons/si";

import { SiRedux } from "react-icons/si";

export const projects = [
  {
    title: "TUP Newsletter",
    description:
      "TUP Newsletteris a capstone project that aims to provide that latest news and updates to the students of Techonological University of the Philippines",
    techs: ["MERN Stack", "TailwindCSS", "Redux Toolkit"],
    github: "https://github.com/FSuaverdez/tup-newsletter",
    image: "https://i.imgur.com/f4AA5VP.png",
  },
  {
    title: "GetSeatGo",
    description:
      "Movie ticket reservation web application that helps a cinema sell seat tickets online using paypal payment method. Customers can select the specific seats that will make them comfortable.",
    techs: ["Node.js", "EJS", "Mongodb"],
    github: "https://github.com/FSuaverdez/GetSeatGo",
    image: "https://i.imgur.com/LXSas3Z.png",
  },

  {
    title: "GameShop",
    description:
      "E-commerce web application that aims to sell gaming products like games and gaming peripherals.",
    techs: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/FSuaverdez/GameShop",
    live: null,
    image: "https://i.imgur.com/qU7EDXl.png",
  },
  {
    title: "Google Clone",
    description:
      "A google clone web application that uses RapidAPI to search google results and present it to the user.",
    techs: ["React.js", "RapidAPI"],
    github: "https://github.com/FSuaverdez/google-clone",
    image: "https://i.imgur.com/UvvOTFr.jpg",
  },
  {
    title: "GameHunt",
    description:
      "A React Native application that finds the latest and trending video games and providing description of the game with the help of RAWG ",
    techs: ["React Native", "RAWG API"],
    github: "https://github.com/FSuaverdez/GameHunt",
    live: null,
    image: "https://i.imgur.com/15QHvmh.png",
  },
];

export const skills = [
  {
    component: <DiJavascript1 className="text-yellow-300 text-4xl" />,
    title: "JavaScript",
  },
  {
    component: <DiReact className="text-cyan-500 text-4xl" />,
    title: "React.JS",
  },
  {
    component: <SiNextdotjs className="text-gray-800 text-3xl" />,
    title: "Next.JS",
  },
  {
    component: <SiTypescript className="text-blue-500 text-3xl" />,
    title: "TypeScript",
  },
  {
    component: <DiNodejsSmall className="text-green-500 text-4xl" />,
    title: "Node.JS",
  },
  {
    component: <SiTailwindcss className="text-[#01b7d6] text-3xl" />,
    title: "TailwindCSS",
  },
  {
    component: <DiHtml5 className="text-red-500 text-4xl" />,
    title: "HTML",
  },
  {
    component: <DiCss3 className="text-blue-500 text-4xl" />,
    title: "CSS",
  },

  {
    component: <SiRedux className="text-[#764abc] text-4xl" />,
    title: "Redux",
  },
  {
    component: <DiReact className="text-cyan-500 text-4xl" />,
    title: "React Native",
  },
  {
    component: <DiGit className="text-orange-500 text-4xl" />,
    title: "Git",
  },
  {
    component: <DiGithubBadge className="text-gray-500 text-4xl" />,
    title: "Github",
  },
  {
    component: <DiMongodb className="text-green-500 text-4xl" />,
    title: "MongoDB",
  },
  {
    component: <DiPhp className="text-blue-500 text-4xl" />,
    title: "PHP",
  },
  {
    component: <DiMysql className="text-blue-500 text-4xl" />,
    title: "MySQL",
  },
];
