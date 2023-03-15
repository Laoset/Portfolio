import React from "react";
import { MdDoubleArrow } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="< inicio />" className=" h-[50rem] bg-otroFondo dark:bg-light">
      <div className="max-w-screen-lg mx-auto h-full pr-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="">
            <h2 className="mt-36 font-oswald pl-4 sm:text-[90px] font-bold text-white dark:text-gray-900 md:pl-0">
              Kevin, Full Stack Developer
            </h2>
          </div>

          <div className="h-[2px] bg-white mt-4 dark:bg-black"></div>
          <div className="flex justify-center items-center">
            <p className="text-lg font-fireCode text-gray-300 py-4 mx-m-md dark:text-black dark:font-semibold ">
              Apasionado por el Desarrollo Web
            </p>
          </div>
          <div className="flex justify-center items-center ">
            <Link
              to="< proyectos />"
              smooth
              duration={500}
              className="font-fireCode group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md font-semibold  bg-nuevo hover:scale-110 duration-200 cursor-pointer"
            >
              Proyectos
              <span className="group-hover:rotate-90 duration-300 pl-1">
                <MdDoubleArrow size={20} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
