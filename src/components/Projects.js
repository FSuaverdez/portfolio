import { DiGithubBadge } from "react-icons/di";
import { FiSearch } from "react-icons/fi";
import { projects } from "../data";
const Projects = () => {
  return (
    <div className="p-3 max-w-7xl mx-auto" id="projects">
      <div className="px-6 mt-5 max-w-7xl ">
        <h2
          id="projects"
          className="text-4xl lg:text-6xl font-bold border-b-2 border-gray-500 dark:text-sky-500 dark:border-sky-500"
        >
          Projects
        </h2>
        <p className="text-lg md:text-2xl lg:text-3xl mt-5 lg:mt-10 dark:text-white">
          My personal and academic projects.
        </p>
        <div className="p-3 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(
            ({ title, description, techs, github, live, image }) => (
              <div
                key={title}
                className="rounded-lg transform hover:-translate-y-0.5 bg-white  shadow-xl mx-auto duration-75 ease-in-out hover:shadow-2xl hover:dark:shadow-sky-500  flex flex-col  dark:bg-gray-200 col-span-1"
              >
                <img
                  src={image}
                  alt="thumbnail"
                  className="w-full object-cover object-center rounded-t-lg h-52"
                />
                <div className="p-3 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-xl font-bold text-sky-600 px-3">
                      {title}
                    </h3>
                    <p className="text-gray-600 px-3">{description}</p>
                    <ul className="px-3 text-sm mt-2 underline underline-offset-2 text-gray-400 flex flex-wrap gap-4">
                      {techs.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>

                  <ul className="text-xl mt-5 text-gray-900 flex justify-around items-center  lg:justify-start lg:gap-10">
                    <li>
                      <a
                        href={github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex justify-center items-center hover:text-sky-500"
                      >
                        <DiGithubBadge className=" text-4xl" />
                        <p>Github</p>
                      </a>
                    </li>
                    {live && (
                      <li>
                        <a
                          href={live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex justify-center items-center hover:text-sky-500"
                        >
                          <FiSearch className="text-2xl" />
                          <p>Visit Live</p>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
