import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/alan-kevin-corman-samanamud-22b566176/",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Laoset",
    },
    {
      id: 3,
      child: (
        <>
          eMail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:kevin143corman@gmail.com",
    },
  ];
  return (
    <div className="hidden h-full 2xl:flex flex-col justify-center align-middle fixed">
      <div>
        {links.map(({ id, child, href }) => (
          <li
            key={id}
            className="flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] duration-300 hover:rounded-md bg-nuevo2"
          >
            <a
              href={href}
              className="flex justify-between items-center dark:text-black w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Social;
