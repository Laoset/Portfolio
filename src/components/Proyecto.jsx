import React from 'react'
import todo from '../assets/portfolio/todo.jpg'
import rickMorty from '../assets/portfolio/rickMorty.jpg'


const Proyecto = () => {

    const portfolios = [
        {
            id:1,
            src:todo,
            href:'https://kevin-corman-todo-app.netlify.app/',
            code: 'https://github.com/Laoset/TodoApp',
            title: 'Todo App'
        },
        {
            id:2,
            src:rickMorty,
            href:'https://kevin-corman-rickmorty.netlify.app/',
            code: 'https://github.com/Laoset/RickAndMortyWiki',
            title:'Rick and Morty Wiki'
        },
    ]
  return (
    <div name='Proyects' className='w-full text-white md:h-screen bg-gradient-to-b from-black to-gray-900 dark:bg-light'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-4'>
                <p className='text-4xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900'>Proyects</p>
                <p className='py-6 text-nuevoWhite mx-m-md dark:font-semibold dark:text-black'>Look my proyects, i await your feedback.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
            portfolios.map(({id,src,title,href,code})=>(
               <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt="tiempo" className='h-[60%] w-full rounded-md duration-200 hover:scale-105 mb-2'/>
                        <h2 className='font-semibold text-lg pt-2 text-center'>{title}</h2>
                    <div className='flex items-center justify-center dark:bg-slate-200'>
                        <button onClick={href} className=' font-semibold w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-slate-50 dark:text-black'>Deploy</button>
                        <button onClick={code} className='font-semibold w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-slate-50 dark:text-black'>Code</button>
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