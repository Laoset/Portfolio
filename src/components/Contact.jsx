import React from 'react'

const Contact = () => {
  return (
    <div 
        name='.contact()' 
        className='dark:bg-light bg-otroFondo w-full h-screen p-4'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='font-oswald text-nuevoWhite text-4xl font-extrabold inline border-b-4 border-gray-500 dark:text-black'>Contact</p>
                <p className='text-lg font-cardo py-6 text-nuevoWhite dark:text-black dark:font-semibold '>Submit the form below and chat with me!</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/bf1a1a6e-d356-4db3-a0b1-952f823f3b85" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='border-2 border-solid border-slate-400 bg-colorCards p-2 shadow-sm rounded-md text-white bg-transparent dark:text-black dark:bg-slate-200 dark:shadow-nuevoOrange' />
                    <input type="text" name='email' placeholder='Enter your email' className='border-2 border-solid border-slate-400 bg-colorCards p-2 shadow-sm rounded-md text-white my-4 bg-transparent dark:bg-slate-200 dark:text-black dark:shadow-nuevoOrange' />
                    <textarea  name="message" placeholder="Enter your message " rows="10" className='border-2 border-solid border-slate-400 p-2 resize-none rounded-md bg-transparent shadow-sm text-white bg-colorCards dark:bg-slate-200 focus:outline-none dark:text-black dark:shadow-nuevoOrange'></textarea>
                    <button className=' font-cardo font-bold text-xl bg-gradient-to-r from-red-600 to-red-400 cursor-pointer text-nuevoWhite px-6 py-3 my-8 items-center rounded-md hover:scale-105 duration-300'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact