import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = ({ isEnglish }) => {
  return (
    <>
      {isEnglish === false ? (
        <section
          name="< contacto />"
          className="w-full text-white md:h-screen bg-otroFondo dark:bg-light"
        >
          <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <h2 className="font-oswald text-5xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
                {"< Contacto />"}
              </h2>
              <p className="text-lg font-fireCode py-6 text-nuevoWhite dark:text-black dark:font-semibold ">
                Completa el formulario y ponte en contacto conmigo, también
                puedes encontrarme en otras redes sociales, como LinkedIn y
                Github.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <form
                action="https://getform.io/f/bf1a1a6e-d356-4db3-a0b1-952f823f3b85"
                method="POST"
                className="flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre"
                  className="border-2 border-solid border-slate-400 bg-colorCards p-2 shadow-sm rounded-md text-white bg-transparent dark:text-black dark:bg-slate-200 dark:shadow-nuevoOrange"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border-2 border-solid border-slate-400 bg-colorCards p-2 shadow-sm rounded-md text-white my-4 bg-transparent dark:bg-slate-200 dark:text-black dark:shadow-nuevoOrange"
                />
                <textarea
                  name="message"
                  placeholder="Mensaje"
                  rows="10"
                  className="border-2 border-solid border-slate-400 p-2 resize-none rounded-md bg-transparent shadow-sm text-white bg-colorCards dark:bg-slate-200 focus:outline-none dark:text-black dark:shadow-nuevoOrange"
                ></textarea>
                <button className=" font-fireCode font-bold text-lg  bg-nuevo cursor-pointer text-nuevoWhite px-6 py-3 my-8 items-center rounded-md hover:scale-105 duration-300">
                  Enviar
                </button>
              </form>
            </div>
            <div className="flex flex-row justify-center gap-8 align-middle text-center items-center 2xl:hidden">
              <a
                href="https://github.com/Laoset"
                className=" dark:text-black  text-white cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
                target="_blank"
                rel="noreferrer"
                alt="github"
              >
                <FaGithub size="2rem" />
              </a>
              <a
                href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
                className=" dark:text-black  text-white  cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
                target="_blank"
                rel="noreferrer"
                alt="linkedin"
              >
                <FaLinkedin size="2rem" />
              </a>
            </div>
            <div className="flex justify-center text-center pt-10">
              <h2 className="text-white text-sm text-center dark:text-black ">
                - Hecho con ❤️ por Alan Kevin Corman Samanamud -
              </h2>
            </div>
          </div>
        </section>
      ) : (
        <div
          name="< contact />"
          className="w-full text-white md:h-screen bg-otroFondo dark:bg-light"
        >
          <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="font-oswald text-5xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
                {"< Contact />"}
              </p>
              <p className="text-lg font-fireCode py-6 text-nuevoWhite dark:text-black dark:font-semibold ">
                Fill out the form and contact me, you can also find me on other
                social networks, such as LinkedIn and Github.
              </p>
            </div>

            <div className="flex justify-center items-center">
              <form
                action="https://getform.io/f/bf1a1a6e-d356-4db3-a0b1-952f823f3b85"
                method="POST"
                className="flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="border-2 border-solid border-slate-400 bg-colorCards p-2 shadow-sm rounded-md text-white bg-transparent dark:text-black dark:bg-slate-200 dark:shadow-nuevoOrange"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border-2 border-solid border-slate-400 bg-colorCards p-2 shadow-sm rounded-md text-white my-4 bg-transparent dark:bg-slate-200 dark:text-black dark:shadow-nuevoOrange"
                />
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="10"
                  className="border-2 border-solid border-slate-400 p-2 resize-none rounded-md bg-transparent shadow-sm text-white bg-colorCards dark:bg-slate-200 focus:outline-none dark:text-black dark:shadow-nuevoOrange"
                ></textarea>

                <button className=" font-fireCode font-bold text-lg  bg-nuevo duration-300 cursor-pointer text-nuevoWhite px-6 py-3 my-8 items-center rounded-md hover:scale-105 ">
                  Send
                </button>
              </form>
            </div>
            <div className="flex flex-row justify-center gap-8 align-middle text-center items-center 2xl:hidden">
              <a
                href="https://github.com/Laoset"
                className=" dark:text-black  text-white cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size="2rem" />
              </a>
              <a
                href="https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/"
                className=" dark:text-black  text-white  cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size="2rem" />
              </a>
            </div>
            <div className="flex justify-center text-center pt-10">
              <h2 className="text-white text-sm text-center dark:text-black ">
                - Made with ❤️ by Alan Kevin Corman Samanamud -
              </h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
