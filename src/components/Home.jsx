import React from 'react'
import ImgPerfil from '../assets/heroImage.jpg'
import { MdDoubleArrow } from 'react-icons/md';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div 
        name='Home' 
        className='h-screen  bg-gradient-to-b from-black to-gray-900 dark:bg-light'
    >
        <div 
        className='max-w-screen-lg mx-auto flex flex-col items-center  justify-center h-full pr-4 md:flex-row'
        >
            <div className='flex flex-col justify-center h-full'>
                <h2 
                className='text-4xl sm:text-7xl font-extrabold text-white dark:text-gray-900'
                >I'm Kevinchelo, Full Stack Developer
                </h2>
                <p className='text-nuevoWhite py-4 mx-m-md dark:text-black dark:font-semibold'>Apasionado por el mundo IT, desde muy temprana edad conviviendo con las computadoras. Hago uso de React, Redux, Tailwind, NodeJs, Express y PostgreSQL</p>
                <div>
                    <Link to='Proyects' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-600 to-red-400 cursor-pointer'>
                        Proyectos
                        <span className='group-hover:rotate-90 duration-300 pl-1'>
                        <MdDoubleArrow size={20}/>
                        </span>
                    </Link>
                </div>
            </div>

            <div clas>
                <img src={ImgPerfil} alt="kevin"
                    className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home