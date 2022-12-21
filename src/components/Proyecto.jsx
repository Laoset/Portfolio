import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'

const Proyecto = () => {

    const portfolios = [
        {
            id:1,
            src:arrayDestruct
        },
        {
            id:2,
            src:installNode
        },
        {
            id:3,
            src:navbar
        },
        {
            id:4,
            src:reactParallax
        },
        {
            id:5,
            src:reactSmooth
        },
        {
            id:6,
            src:reactWeather
        }
    ]
  return (
    <div name='Proyects' className='w-full -my-7 text-white md:h-screen bg-gradient-to-b from-black to-gray-900 dark:bg-light'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900'>Proyects</p>
                <p className='py-6 text-nuevoWhite mx-m-md dark:font-semibold dark:text-black'>Look my proyects, i await your feedback.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
            portfolios.map(({id,src})=>(
               <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="tiempo" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center dark:bg-slate-200'>
                        <button className='font-semibold w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-slate-50 dark:text-black'>Deploy</button>
                        <button className='font-semibold w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-slate-50 dark:text-black'>Code</button>
                    </div>
                </div>
            ))
            }
            </div>
        </div>
    </div>
  )
}

export default Proyecto