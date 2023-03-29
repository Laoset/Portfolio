import React from "react";
import todo from "../assets/portfolio/todoAppNew.png";
import rickMorty from "../assets/portfolio/rickMorty.jpg";
import shoppingCart from "../assets/portfolio/shopping-carrito.png";
import icare from "../assets/portfolio/icare.png";
import perros from "../assets/portfolio/perros2.png";
import gamecenter from "../assets/portfolio/gameCenter.png";
const Proyecto = ({ isEnglish }) => {
  const portfolios = [
    {
      id: 1,
      src: icare,
      href: "https://pf-grupo-2.vercel.app/",
      code: "https://github.com/ezequielnores/PF-GRUPO-2",
      title: "iCare",
    },
    {
      id: 2,
      src: perros,
      href: "https://deploy-perritos.vercel.app/",
      code: "https://github.com/Laoset/DeployPerritos",
      title: "Wiki Perri",
    },
    {
      id: 3,
      src: rickMorty,
      href: "https://kevin-corman-rickmorty.netlify.app/",
      code: "https://github.com/Laoset/RickAndMortyWiki",
      title: "Rick and Morty Wiki",
    },
    {
      id: 4,
      src: gamecenter,
      href: "https://game-center-akcs.netlify.app/",
      code: "https://github.com/Laoset/gameCenter",
      title: "Game Center",
    },
    {
      id: 5,
      src: shoppingCart,
      href: "https://shooping-cart-kcs.netlify.app/    ",
      code: "https://github.com/Laoset/ReduxTest",
      title: "Shopping Cart",
    },
    {
      id: 6,
      src: todo,
      href: "https://kevin-corman-todo-app.netlify.app/",
      code: "https://github.com/Laoset/TodoApp",
      title: "Todo App",
    },
  ];
  return (
    <>
      {isEnglish === false ? (
        <div
          name="< proyectos />"
          className="w-full text-white md:h-screen bg-otroFondo dark:bg-light"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-4">
              <p className="font-oswald text-4xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
                Proyectos
              </p>
              <p className="font-fireCode py-6 text-nuevoWhite mx-m-md dark:font-semibold dark:text-black text-lg">
                Estos son mis proyectos concluidos, ¡espero tu feedback!
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10  sm:px-0">
              {portfolios.map(({ id, src, title, href, code }) => (
                <div
                  key={id}
                  className="rounded-lg bg-colorCards dark:bg-slate-200  hover:scale-105 duration-200"
                >
                  <img
                    src={src}
                    alt="tiempo"
                    className="h-[60%] w-full rounded-md mb-2"
                  />
                  <h2 className="dark:text-black font-cardo font-semibold text-lg pt-2 text-center">
                    {title}
                  </h2>
                  <div className="flex items-center justify-center dark:bg-slate-200 dark:shadow  shadow-sm">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-cardo cursor-pointer font-semibold w-1/2 px-10 py-3 m-4 duration-200 hover:scale-105 text-slate-50 dark:text-black"
                    >
                      Deploy
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer"
                      className="font-cardo cursor-pointer font-semibold w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-slate-50 dark:text-black"
                    >
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div
          name="< projects />"
          className="w-full text-white md:h-screen bg-otroFondo dark:bg-light"
        >
          <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-4">
              <p className="font-oswald text-4xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900">
                Projects
              </p>
              <p className="font-fireCode py-6 text-nuevoWhite mx-m-md dark:font-semibold dark:text-black text-lg">
                These are my completed projects, I look forward to your
                feedback!
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-12 sm:px-0 text-center">
              {portfolios.map(({ id, src, title, href, code }) => (
                <div
                  key={id}
                  className="rounded-lg bg-colorCards dark:bg-slate-200  hover:scale-105 duration-200 m-2 "
                >
                  <img
                    src={src}
                    alt="tiempo"
                    className="h-[60%] w-full rounded-md mb-2"
                  />
                  <h2 className="dark:text-black font-cardo font-semibold text-lg pt-2 text-center">
                    {title}
                  </h2>
                  <div className="flex items-center justify-center dark:bg-slate-200 dark:shadow  shadow-sm">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-cardo cursor-pointer font-semibold w-1/2 px-10 py-3 m-4 duration-200 hover:scale-105 text-slate-50 dark:text-black"
                    >
                      Deploy
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      rel="noreferrer"
                      className="font-cardo cursor-pointer font-semibold w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-slate-50 dark:text-black"
                    >
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Proyecto;
