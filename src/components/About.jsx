import React from "react";

const About = ({ isEnglish }) => {
  return (
    <>
      {isEnglish === false ? (
        <div
          name="< sobre mi />"
          className="w-full md:h-screen bg-otroFondo text-white dark:bg-light"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="font-oswald text-4xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
                Sobre mi
              </p>
            </div>
            <p className="font-fireCode text-xl text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold indent-8">
                👋¡Bienvenid@s! Soy Alan Kevin Corman Samanamud y, desde muy
              temprana edad, fui afortunado al tener una computadora personal en
              la que pasaba horas y horas desmontando pieza por pieza, tratando
              de entender su funcionamiento, lo cual generó en mí un gusto por
              la tecnología que nunca dejó de crecer. La vida me llevó por una
              carrera profesional muy alejada del mundo de la tecnología, pero
              me brindó muchas habilidades personales y satisfacción. Hasta que
              descubrí el mundo de la programación, que me enamoró desde el
              primer momento en que codifiqué mi primer 'Hello World!'.
            </p>
            <br />
            <p className="font-fireCode text-xl text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold indent-8">
              Ahora me dedico exclusivamente al Desarrollo Web, desarrollando
              constantemente proyectos que se verán reflejas en esta Web. ¡No
              dudes en contactarme!
            </p>
          </div>
        </div>
      ) : (
        <div
          name="< about me />"
          className="w-full md:h-screen bg-otroFondo text-white dark:bg-light"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
              <p className="font-oswald text-4xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
                About me
              </p>
            </div>
            <p className="font-fireCode text-xl text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold indent-8">
                👋Welcome! I am Alan Kevin Corman Samanamud and, from a very
              early age, I was fortunate to have a personal computer that I
              spent hours and hours taking apart piece by piece, trying to
              understand how it worked, which generated in me a taste for
              technology that never stopped growing. Life took me through a
              professional career far away from the world of technology, but it
              gave me many personal skills and satisfaction. Until I discovered
              the world of programming, which I fell in love with from the first
              moment I coded my first 'Hello World!
            </p>
            <br />
            <p className="font-fireCode text-xl text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold indent-8">
              I am now dedicated exclusively to Web Development, constantly
              developing projects that will be reflected in this website.
              constantly developing projects that will be reflected in this Web,
              don't hesitate to contact me! feel free to contact me!
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
