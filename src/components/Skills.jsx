import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import node from "../assets/node.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";
import redux from "../assets/redux.png";
import postgresql from "../assets/postgresql.png";
import express from "../assets/express2.png";
import git from "../assets/git.png";
import sequelize from "../assets/sequelize.png";
import material from "../assets/material.png";
const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-red-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-red-400",
    },
    {
      id: 3,
      src: javascript,
      title: "JAVASCRIPT",
      style: "shadow-red-600",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-red-400",
    },
    {
      id: 5,
      src: redux,
      title: "REDUX",
      style: "shadow-red-600",
    },
    {
      id: 6,
      src: node,
      title: "NODE",
      style: "shadow-red-400",
    },
    {
      id: 7,
      src: express,
      title: "EXPRESS",
      style: "shadow-red-600",
    },
    {
      id: 8,
      src: postgresql,
      title: "POSTGRESQL",
      style: "shadow-red-400",
    },
    {
      id: 9,
      src: sequelize,
      title: "SEQUELIZE",
      style: "shadow-red-600",
    },
    {
      id: 10,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-red-400",
    },
    {
      id: 11,
      src: material,
      title: "MATERIAL UI",
      style: "shadow-red-600",
    },
    {
      id: 12,
      src: git,
      title: "GIT",
      style: "shadow-red-400",
    },
  ];
  return (
    <div
      name="< tecnologías />"
      className="bg-otroFondo w-full md:h-screen dark:bg-light"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="pb-4">
          <p className="font-oswald text-4xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
            Tecnologías
          </p>
          <p className="text-lg font-fireCode py-6 text-nuevoWhite mx-m-md dark:font-semibold dark:text-black">
            Estas son las tecnologías en las cuales he trabajado.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-center">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className={`w-2/3 bg-colorCards dark:shadow-sm hover:scale-105 duration-500 dark:bg-slate-200 dark:shadow-nuevoOrange rounded-md py-2`}
            >
              <img src={src} alt="" className="w-26 mx-auto h-20" />
              <p className="font-fireCode mt-1 text-lg  dark:text-black">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
