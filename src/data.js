import {
  DiJavascript1,
  DiHtml5,
  DiReact,
  DiNodejsSmall,
  DiGit,
  DiGithubBadge,
  DiMongodb,
  DiMysql,
  DiCss3,
} from "react-icons/di";

import { SiTailwindcss } from "react-icons/si";

import { SiNextdotjs, SiTypescript } from "react-icons/si";

import { SiRedux } from "react-icons/si";

export const projects = [
  {
    title: "GameHunt",
    description:
      "GameHunt is a website that allows you to search for games, find trending games, and see the top games of all time. Explore the gaming world with GameHunt.",
    techs: ["Next.js", "React.js", "TailwindCSS", "Server Components"],
    github: "https://github.com/FSuaverdez/game-hunt",
    image: "https://i.imgur.com/iXAVL80.png",
    live: "https://game-hunt-kappa.vercel.app/",
  },
  {
    title: "Tic Tac Toe",
    description:
      "A simple tic tac toe game that uses Zustand for state management. It's a simple game that can be played by two players. Players can play multiple rounds and see the overall score if they end the game.",
    techs: ["React.js", "TailwindCSS", "Zustand"],
    github: "https://github.com/FSuaverdez/tic-tac-toe",
    image: "https://i.imgur.com/1ViUN3m.jpeg",
    live: "https://tic-tac-toe-sable-two.vercel.app/",
  },
  {
    title: "TUP Newsletter",
    description:
      "TUP Newsletter is a capstone project that aims to provide that latest news and updates to the students of Techonological University of the Philippines.",
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
    component: <DiMysql className="text-blue-500 text-4xl" />,
    title: "MySQL",
  },
];
