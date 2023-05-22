const About = () => {
  return (
    <div className="mt-10 lg:mt-20 p-3 max-w-7xl mx-auto" id="about">
      <div className="px-6 mt-5 max-w-7xl ">
        <h2 className="text-4xl lg:text-6xl font-bold border-b-2 border-gray-500 dark:text-sky-500 dark:border-sky-500">
          About Me
        </h2>
        <p className=" text-xl md:text-2xl lg:text-2xl mt-5 lg:mt-10 dark:text-black dark:bg-gray-200 bg-white shadow-lg rounded-lg p-4 text-slate-600 lg:leading-relaxed hover:shadow-2xl hover:dark:shadow-sky-500 transform hover:-translate-y-0.5 duration-75 ease-in-out ">
          I'm a full-stack developer who loves learning new skills and creating
          exciting projects. With a strong background in web development, I'm
          well-versed in the latest front-end and back-end technologies and
          frameworks. I take pride in delivering clean, efficient, and
          well-documented code, and I'm committed to producing high-quality
          results that exceed my clients' expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
