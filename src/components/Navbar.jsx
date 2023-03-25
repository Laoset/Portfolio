import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "< inicio />",
    },
    {
      id: 2,
      link: "< sobre mi />",
    },
    {
      id: 3,
      link: "< proyectos />",
    },
    {
      id: 4,
      link: "< tecnologías />",
    },
    {
      id: 5,
      link: "< contacto />",
    },
  ];
  return (
    <div className="flex justify-between items-center align-middle w-full h-20 text-white fixed bg-casiFondo px-4 dark:bg-light">
      <div className="p-3">
        <h1 className="hover:animate-pulse text-demas  text-5xl font-marca cursor-default">
          #AKCS
        </h1>
      </div>

      <div className="">
        <ul className="hidden md:flex  items-center align-middle justify-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="dark:text-black font-fireCode text-white hover:text-demas font-semibold xl:text-[18px] lg:text-base md:text-xs px-3 cursor-pointer hover:scale-110 duration-200 italic tracking-tight"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          <DarkMode />
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {nav ? (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black">
          {links.map(({ id, link }) => (
            <li key={id} className="px-4 cursor-pointer py-6 text-4xl ">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Navbar;
// //key={id}
// className='text-nuevoBoton font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 px-4 cursor-pointer  hover:scale-110 duration-200 dark:bg-dark'
