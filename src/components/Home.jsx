import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Home = ({ isEnglish }) => {
  return (
    <>
      {isEnglish === false ? (
        <section name="< inicio />" className="h-screen dark:bg-light p-4">
          <div className="max-w-screen-xl mx-auto h-full pr-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
              <div className="flex justify-center items-center ">
                <h2 className="mt-36 font-oswald xl:pl-0 xl:text-[90px]  lg:text-[80px] sm:text-[55px] text-center  text-[60px] font-bold text-white dark:text-gray-900 ">
                  Kevin, Full Stack Developer
                </h2>
              </div>

              <div className="h-[2px] bg-white mt-4 dark:bg-black"></div>
              <div className="flex justify-center items-center">
                <span className="text-lg font-fireCode text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold ">
                  <Typewriter
                    options={{
                      strings: [
                        "Entusiasta por el Desarrollo Web",
                        "Amante del mundo IT",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <div className="2xl:hidden flex flex-row text-white dark:text-black justify-center gap-10 py-4">
                <a
                  className="hover:rotate-6 hover:-rotate-6 duration-200"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
                  aria-label="Linkedin"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  className="hover:rotate-6 hover:-rotate-6 duration-200"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Laoset"
                  aria-label="github"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  className="hover:rotate-6 hover:-rotate-6 duration-200"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:kevin143corman@gmail.com"
                  aria-label="mail"
                >
                  <HiOutlineMail size={30} />
                </a>
              </div>
              <div className="flex justify-center items-center ">
                <Link
                  to="< proyectos />"
                  smooth
                  duration={500}
                  className="font-fireCode group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold  bg-nuevo hover:scale-110 duration-200 cursor-pointer"
                >
                  Proyectos
                  <span className="group-hover:rotate-90 duration-300 pl-1">
                    <MdDoubleArrow size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div name="< home />" className="h-screen dark:bg-light p-4">
          <div className="max-w-screen-xl mx-auto h-full pr-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
              <div className="flex justify-center items-center ">
                <h2 className="mt-36 font-oswald xl:pl-0 xl:text-[90px]  lg:text-[80px] sm:text-[55px] text-center  text-[60px] font-bold text-white dark:text-gray-900 ">
                  Kevin, Full Stack Developer
                </h2>
              </div>

              <div className="h-[2px] bg-white mt-4 dark:bg-black"></div>
              <div className="flex justify-center items-center">
                <span className="text-lg font-fireCode text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold ">
                  <Typewriter
                    options={{
                      strings: [
                        "Enthusiastic about Web Development",
                        "Lover of the IT world",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </span>
              </div>
              <div className="2xl:hidden flex flex-row text-white dark:text-black justify-center gap-10 py-4">
                <a
                  className="hover:rotate-6 hover:-rotate-6 duration-200"
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
                  aria-label="linkedin"
                >
                  <FaLinkedin size={30} />
                </a>
                <a
                  className="hover:rotate-6 hover:-rotate-6 duration-200"
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Laoset"
                  aria-label="github"
                >
                  <FaGithub size={30} />
                </a>
                <a
                  className="hover:rotate-6 hover:-rotate-6 duration-200"
                  target="_blank"
                  rel="noreferrer"
                  href="mailto:kevin143corman@gmail.com"
                  aria-label="mail"
                >
                  <HiOutlineMail size={30} />
                </a>
              </div>
              <div className="flex justify-center items-center ">
                <Link
                  to="< projects />"
                  smooth
                  duration={500}
                  className="font-fireCode group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold  bg-nuevo hover:scale-110 duration-200 cursor-pointer"
                >
                  Projects
                  <span className="group-hover:rotate-90 duration-300 pl-1">
                    <MdDoubleArrow size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
