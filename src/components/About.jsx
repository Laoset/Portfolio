import React from "react";
const About = ({ isEnglish }) => {
  const getState = document.documentElement.classList.value;
  return (
    <>
      {isEnglish === false ? (
        <section
          name="< sobre mi />"
          className="w-full md:h-screen bg-fondito2 text-white dark:bg-light "
        >
          <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full gap-6">
            <div className="pb-8">
              <h2 className="font-oswald text-5xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
                {"< Sobre mí />"}
              </h2>
            </div>
            <p className="font-fireCode text-xl text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold ">
              👋¡Bienvenid@s! Soy Alan Kevin Corman Samanamud y, desde muy
              temprana edad, fui afortunado al tener una computadora personal en
              la que pasaba horas y horas desmontando pieza por pieza, tratando
              de entender su funcionamiento, lo cual generó en mí un gusto por
              la tecnología que nunca dejó de crecer. La vida me llevó por una
              carrera profesional muy alejada del mundo de la tecnología, pero
              me brindó muchas habilidades personales y satisfacción. Hasta que
              descubrí el mundo de la programación, que me enamoró desde el
              momento en que programe mi primer 'Hello World!'.
            </p>
            <p className="font-fireCode text-xl text-gray-300 pb-6 mx-m-md dark:text-black dark:font-semibold">
              Estas son las tecnologías con las cual trabajo actualmente.
            </p>
            <div className="flex lg:flex-row justify-around flex-col">
              <div className="xl:flex xl:flex-row gap-4 grid grid-cols-3">
                <img
                  className="w-16"
                  src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"
                  alt=""
                />
                <img
                  className="w-16"
                  src="https://icongr.am/devicon/react-original.svg?size=128&color=ffffff"
                  alt=""
                />
                <img
                  className="w-16"
                  src="https://www.svgrepo.com/show/303557/redux-logo.svg"
                  alt=""
                />
                <img
                  className="w-16"
                  src="https://www.svgrepo.com/show/374118/tailwind.svg"
                  alt=""
                />
              </div>
              <div className="xl:flex xl:flex-row gap-4 grid grid-cols-3">
                <img
                  className="w-16"
                  src="https://icongr.am/devicon/nodejs-original.svg?size=128&color=ffffff"
                  alt=""
                />
                {getState === "dark" ? (
                  <img
                    className="w-16 "
                    src="https://icongr.am/devicon/express-original.svg?size=128&color=000000"
                    alt=""
                  />
                ) : (
                  <img
                    className="w-16 "
                    src="https://icongr.am/devicon/express-original.svg?size=128&color=ffffff"
                    alt=""
                  />
                )}

                <img
                  className="w-16"
                  src="https://icongr.am/devicon/postgresql-original.svg?size=128&color=ffffff"
                  alt=""
                />
                <img
                  className="w-16"
                  src="https://icongr.am/devicon/typescript-original.svg?size=128&color=ffffff"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div
          name="< about me />"
          className="w-full md:h-screen bg-fondito2 text-white dark:bg-light "
        >
          <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full gap-6">
            <div className="pb-8">
              <p className="font-oswald text-5xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
                {"< About me />"}
              </p>
            </div>
            <p className="font-fireCode text-xl text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold indent-8">
                👋Welcome! I am Alan Kevin Corman Samanamud and, from a very
              young age, I was fortunate enough to have a personal computer on
              which I spent hours and hours taking apart piece by piece, trying
              to understand its functioning, which generated in me a love for
              technology that never stopped growing. Life took me on a
              professional career very far removed from the world of technology,
              but it gave me many personal skills and satisfaction. Until I
              discovered the world of programming, which I fell in love with
              from the first moment I coded my first 'Hello World!'.
            </p>
            <p className="font-fireCode text-xl text-gray-300 pb-6 mx-m-md dark:text-black dark:font-semibold indent-8">
              These are the technologies I am currently working with.
            </p>
            <div className="flex lg:flex-row justify-around flex-col">
              <div className="xl:flex xl:flex-row gap-4 grid grid-cols-3">
                <img
                  className="w-16"
                  src="https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor"
                  alt=""
                />

                <img
                  className="w-16"
                  src="https://icongr.am/devicon/react-original.svg?size=128&color=ffffff"
                  alt=""
                />
                <img
                  className="w-16"
                  src="https://www.svgrepo.com/show/303557/redux-logo.svg"
                  alt=""
                />
                <img
                  className="w-16"
                  src="https://www.svgrepo.com/show/374118/tailwind.svg"
                  alt=""
                />
              </div>
              <div className="xl:flex xl:flex-row gap-4 grid grid-cols-3">
                <img
                  className="w-16"
                  src="https://icongr.am/devicon/nodejs-original.svg?size=128&color=ffffff"
                  alt=""
                />
                {getState === "dark" ? (
                  <img
                    className="w-16 "
                    src="https://icongr.am/devicon/express-original.svg?size=128&color=000000"
                    alt=""
                  />
                ) : (
                  <img
                    className="w-16 "
                    src="https://icongr.am/devicon/express-original.svg?size=128&color=ffffff"
                    alt=""
                  />
                )}

                <img
                  className="w-16"
                  src="https://icongr.am/devicon/postgresql-original.svg?size=128&color=ffffff"
                  alt=""
                />
                <img
                  className="w-16"
                  src="https://icongr.am/devicon/typescript-original.svg?size=128&color=ffffff"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
