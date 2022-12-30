import React, { useEffect, useState } from 'react'
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
    <button onClick={handleTheme} className='hover:animate-pulse font-cardo rounded-sm bg-gradient-to-r from-red-600 to-red-400 cursor-pointer py-2  px-4 text-white dark:text-slate-700'>{theme === "dark"? "Dark": "Light"}</button> 
    </>
  )

}
export default DarkMode