import React from 'react'
import {FaLinkedin,FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonFill} from 'react-icons/bs'

const Social = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>),
            href: 'https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/'
        },
        {
            id: 2,
            child: (
                <>
                Github <FaGithub size={30}/>
                </>),
            href: 'https://github.com/Laoset'
        },
        {
            id: 3,
            child: (
                <>
                eMail <HiOutlineMail size={30}/>
                </>),
            href: 'mailto:kevin143corman@gmail.com'
        },
        {
            id: 4,
            child: (
                <>
                Resume <BsFillPersonFill size={30}/>
                </>),
            href: '/public/Currículum.pdf',
            download: true,
        }
    ]
  return (
    <div className='h-full  lg:flex flex-col justify-center align-middle fixed'>
        <ul className=''>
            {links.map(({id,child, href, download})=>(
                <li 
                key={id}
                className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md '
                >
                <a 
                href={href} className='flex justify-between items-center dark:text-black w-full text-white' download={download} target='_blank' rel='noreferrer'
                >
                    {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default Social
