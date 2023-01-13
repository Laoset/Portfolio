import React, { useEffect, useState } from 'react'
import {MdDarkMode, MdOutlineDarkMode} from 'react-icons/md'
// import ReactSwitch from 'react-switch'

const DarkMode = () => {
  // MODO OSCURO!
  const [theme, setTheme] =useState(null)
  // MODO OSCURO!
      useEffect(()=>{
      if(theme === 'dark'){
          document.documentElement.classList.add('dark')       
      }else{
          document.documentElement.classList.remove('dark')       
      }
      }, [theme])
  // MODO OSCURO!
      const handleTheme = ()=>{
          setTheme(theme === 'dark'? 'light' : 'dark')
        }
  return (
    <>
    <button onClick={handleTheme} className='hover:animate-pulse font-cardo rounded-md  cursor-pointer py-1  ml-2 text-white dark:text-slate-700'>{theme === "dark"? <MdDarkMode size={20}/> : <MdOutlineDarkMode size={20}/>}</button> 
    </>
  )

}
export default DarkMode