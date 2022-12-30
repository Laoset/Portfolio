import React from 'react'

const About = () => {
  return (
    <div 
      name='About' 
      className='w-full h-screen bg-gradient-to-b from-gray-900 to-black text-white dark:bg-light'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900'>About</p> 
            </div>
            <p className='text-xl text-nuevoWhite py-4 mx-m-md dark:text-black dark:font-semibold indent-8'>Soy Alan Kevin Corman Samanamud, desde muy temprana edad fui afortunado al tener una computadora personal, la cual me pasaba horas y horas desarmando pieza por pieza y volviéndola armar, tratando de entender su funcionamiento, lo cual genero en mí un gusto por la tecnología que nunca paro de crecer. La vida me guio por una carrera profesional muy alejada al mundo IT, pero la cual me brindo muchas habilidades personales y satisfacción. Hasta que descubrí el mundo de la programación la cual me enamoro desde el primer momento que codee mi primer ' Hello World! '.
            </p>
            <br />
            <p className='text-xl text-nuevoWhite py-4 mx-m-md dark:text-black dark:font-semibold indent-8'>
            Actualmente, estoy a mitad del Bootcamp 'Full Stack' de Henry. El objetivo de mi Portfolio es la de brindar información sobre mis proyectos y que conozcan las redes en las cuales me encuentro.
            </p>
        </div>
    </div>
  );
};

export default About