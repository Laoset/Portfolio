import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import node from '../assets/node.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import postgresql from '../assets/postgresql.png'

const Skills = () => {
    const techs=[
        {
            id:1,
            src:html,
            title: 'HTML',
            style:"shadow-red-600",
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            style:"shadow-red-400"
        },
        {
            id:3,
            src:javascript,
            title: 'JAVASCRIPT',
            style:"shadow-red-600"
        },
        {
            id:4,
            src:react,
            title: 'REACT',
            style:"shadow-red-400"
        },
        {
            id:5,
            src:redux,
            title: 'REDUX',
            style:"shadow-red-600"
        },
        {
            id:6,
            src:tailwind,
            title: 'TAILWIND',
            style:"shadow-red-400",
            state: 'In progress'
        },
        {
            id:7,
            src:node,
            title: 'NODE',
            style:"shadow-red-600",
            state: 'In progress'
        },
        {
            id:8,
            src:postgresql,
            title: 'POSTGRESQL',
            style:"shadow-red-400",
            state: 'Coming soon'
        },
    ]
  return (
    <div name='Skills' className='bg-gradient-to-b from-gray-900 to-black w-full h-screen dark:bg-light'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='font-oswald text-4xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900'>Skills</p>
                <p className='font-cardo py-6 text-nuevoWhite mx-m-md dark:font-semibold dark:text-black'>These are the technologies I work with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
            {
                techs.map(({id,src, title, state})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 dark:bg-slate-200 shadow-nuevoOrange`}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='font-habil mt-4 text-lg  dark:text-black'>{title}</p>
                        <div>
                            <p className='text-xs dark:text-black'>{state}</p>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Skills