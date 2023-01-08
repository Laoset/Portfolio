import React from 'react'
import { MdDoubleArrow } from 'react-icons/md';
import { Link } from 'react-scroll';
const Home = () => {
  return (
    <div 
        name='.home()' 
        className=' h-screen bg-otroFondo dark:bg-light'
    >
        <div 
        className='max-w-screen-lg mx-auto flex flex-col items-center  justify-center h-full pr-4 md:flex-row'
        >
            <div className='flex flex-col justify-center  h-full'>
                <div className='flex justify-center items-center'>
                <h2 
                className='font-oswald pl-4 sm:text-[90px] font-bold text-white dark:text-gray-900 md:pl-0'
                >Kevin, Full Stack Developer
                </h2>
                </div>

                <div className='h-[2px] bg-white mt-4 dark:bg-black'></div>
                <div className='flex justify-center items-center'>
                    <p className='text-lg font-cardo text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold '>Apasionado por el Desarrollo Web</p>
                </div>
                <div className='flex justify-center items-center '>
                    <Link to='Proyects' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold bg-nuevoBoton hover:bg-nuevoBoton2 cursor-pointer'>
                        Proyectos
                        <span className='group-hover:rotate-90 duration-300 pl-1'>
                        <MdDoubleArrow size={20}/>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home