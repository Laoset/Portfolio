import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
import DarkMode from './DarkMode'  

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const links= [
        {
            id: 1,
            link: '.home()'
        },
        {
            id: 2,
            link: '.about()'
        },
        {
            id: 3,
            link: '.proyects()'
        },  
        {
            id: 4,
            link: '.skills()'
        },
        {
            id: 5,
            link: '.contact()',
        }
    ];
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-casiFondo px-4 dark:bg-light'>
        <div className=''>
            <h1 className='hover:animate-pulse hover:text-nuevoBoton text-nuevoBoton2  text-5xl font-marca'>#AKCS</h1>
        </div>

        <div className='relative right-8'>
        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li 
                    key={id} 
                    className='text-nuevoBoton hover:text-nuevoBoton2 font-bold text-2xl px-4 cursor-pointer hover:scale-110 duration-200 italic' 
                >
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>    
            ))}
        </ul>
        </div>
        
        <DarkMode/>

        <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
            {nav? <FaTimes/> : <FaBars/> }
        </div>
    {
    nav?
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black'>
            {links.map(({id, link}) => (
                <li 
                key={id} 
                className='px-4 cursor-pointer py-6 text-4xl '
                >
                <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
                        {link}
                </Link>
                </li>    
            ))} 
        </ul>
    :null
    }
    </div>
  )
}

export default Navbar
// //key={id} 
// className='text-nuevoBoton font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 px-4 cursor-pointer  hover:scale-110 duration-200 dark:bg-dark' 