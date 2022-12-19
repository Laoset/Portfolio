import React from 'react'

const Contact = () => {
  return (
    <div 
        name='Contact' 
        className='bg-gradient-to-b from-black to-gray-900 w-full h-screen p-4  text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-extrabold inline border-b-4 border-gray-500'>Contact</p>
                <p className='p-6'>Submit the form below and chat with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/bf1a1a6e-d356-4db3-a0b1-952f823f3b85" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 border-2 rounded-md text-white bg-transparent' />
                    <input type="text" name='email' placeholder='Enter your email' className='p-2 border-2 rounded-md text-white my-4 bg-transparent' />
                    <textarea  name="message" placeholder="Enter your message " rows="10" className='p-2 rounded-md bg-transparent border-2 text-white focus:outline-none'></textarea>
                    <button className='bg-gradient-to-r from-red-600 to-red-400 cursor-pointer text-white px-6 py-3 my-8 items-center rounded-md hover:scale-105 duration-300'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact