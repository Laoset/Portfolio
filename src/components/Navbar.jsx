import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { Link } from "react-scroll";
import DarkMode from "./DarkMode";

const Navbar = ({ isEnglish, onLanguageToggle }) => {
  const [nav, setNav] = useState(false);
  const handleColor = () => {
    if (getState.value !== "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setNav(!nav);
  };
  const handleLang = () => {
    onLanguageToggle();
    setNav(!nav);
  };
  const getState = document.documentElement.classList;
  const estadin = document.documentElement.classList.value;
  const links = [
    {
      id: 1,
      link: `${isEnglish === false ? "< inicio />" : "< home />"}`,
    },
    {
      id: 2,
      link: `${isEnglish === false ? "< sobre mi />" : "< about me />"}`,
    },
    {
      id: 3,
      link: `${isEnglish === false ? "< proyectos />" : "< projects />"}`,
    },
  ];

  return (
    <nav
      id="navbar"
      className="flex justify-between items-center align-middle w-full h-20 text-white fixed bg-casiFondo px-4 dark:bg-light z-50"
    >
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
          <li>
            <DarkMode />
          </li>
          <li>
            <div className="ml-3">
              {isEnglish === false ? (
                <button
                  onClick={onLanguageToggle}
                  alt="United States"
                  src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg"
                  className="w-10 h-6 dark:text-black text-lg"
                >
                  Eng
                </button>
              ) : (
                <button
                  onClick={onLanguageToggle}
                  alt="United States"
                  src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/ES.svg"
                  className="w-10 h-6 dark:text-black text-lg "
                >
                  Spa
                </button>
              )}
            </div>
          </li>
        </ul>
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 md:hidden "
      >
        {nav ? <FaTimes /> : <FaBars className="dark:text-black" />}
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
          <div className="flex flex-row gap-14 mt-6">
            <div>
              {estadin === "dark" ? (
                <MdDarkMode onClick={handleColor} />
              ) : (
                <BsSun onClick={handleColor} />
              )}
            </div>

            <div>
              {isEnglish === false ? (
                <button
                  onClick={handleLang}
                  alt="United States"
                  src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/US.svg"
                  className="w-10 h-6"
                >
                  Eng
                </button>
              ) : (
                <button
                  onClick={handleLang}
                  alt="United States"
                  src="https://catamphetamine.gitlab.io/country-flag-icons/3x2/ES.svg"
                  className="w-10 h-6"
                >
                  Spa
                </button>
              )}
            </div>
          </div>
        </ul>
      ) : null}
    </nav>
  );
};

export default Navbar;
