import React from "react";
import todo from "../assets/portfolio/todoAppNew.avif";
import showCrypto from "../assets/portfolio/showCrypto.avif";
import shoppingCart from "../assets/portfolio/shopping-carrito.avif";
import icare from "../assets/portfolio/icare.avif";
import perros from "../assets/portfolio/perros2.avif";
import gamecenter from "../assets/portfolio/gameCenter.avif";
import studioTatto from "../assets/portfolio/studiotatuaje.avif";
import pomodoro from "../assets/portfolio/pomodoro.avif";
import ecommerce from "../assets/portfolio/ecommerce.avif";
import popcorn from "../assets/portfolio/popcorn.avif";
const Proyecto = ({ isEnglish }) => {
  const portfolios = [
    {
      id: 1,
      src: gamecenter,
      href: "https://game-center-akcs.netlify.app/",
      code: "https://github.com/Laoset/gameCenter",
      parrafo: "Pagina que contiene 3 juegos : Memotest - WPM - Pokemon Finder",
      title: "Game Center",
      tech: [
        "https://icongr.am/devicon/typescript-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
      parrafoEng:
        "Web page containing 3 games : Memotest - WPM - Pokemon Finder",
    },
    {
      id: 2,
      src: ecommerce,
      href: "https://ecommerce-vercel-tau.vercel.app/",
      code: "https://github.com/Laoset/ecommerceVercel",
      parrafo:
        "Tienda de perifericos, multipagina, con posibilidad de añadir productos a un carrito y proceder con el posible pago, pronto a implementar con Mercado Pago",
      title: "Periféricool",
      tech: [
        "https://icongr.am/devicon/typescript-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
        "https://www.svgrepo.com/show/354113/nextjs-icon.svg",
      ],
      parrafoEng:
        "Peripherals store, multipage, with the possibility to add products to a cart and proceed with the possible payment, soon to be implemented with Mercado Pago.",
    },
    {
      id: 3,
      src: pomodoro,
      href: "https://pomodoro-app-sooty.vercel.app/",
      code: "https://github.com/Laoset/pomodoroApp",
      parrafo:
        "Pagina que contiene un timer estilo Pomodoro, con posibilidad de modificacion de tiempos.",
      tech: [
        "https://icongr.am/devicon/typescript-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
      title: "Pomodoro App",
      parrafoEng:
        "Page containing a Pomodoro style timer, with the possibility of time modification.",
    },
    {
      id: 4,
      src: perros,
      href: "https://deploy-perritos.vercel.app/",
      code: "https://github.com/Laoset/DeployPerritos",
      parrafo:
        "Diseño  y desarrollo una App sobre raza de perros que incluía: búsquedas, filtrados combinados, ordenamientos, consumo de API, creación, modificación y eliminación de razas.",
      title: "Wiki Perri",
      tech: [
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://www.svgrepo.com/show/303557/redux-logo.svg",
        "https://icongr.am/devicon/nodejs-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/express-original.svg?size=128&color=000000",
        "https://icongr.am/devicon/postgresql-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/css3-original.svg?size=128&color=currentColor",
      ],
      parrafoEng:
        "Design and development of a dog breed App that included: searches, combined filtering, sorting, API consumption, creation, modification and deletion of breeds.",
    },
    {
      id: 5,
      src: studioTatto,
      href: "https://studiotatto.netlify.app/",
      code: "https://github.com/Laoset/StudioTattoo",
      parrafo:
        "Página informativa y de contacto enfocado hacia un estudio de tatuajes, con diferentes secciones artísticas relacionadas con el tatuador, y posibilidad de turnos mediante Instagram y mensaje directo por WhatsApp.",
      title: "Tattoo Studio",
      tech: [
        "https://icongr.am/devicon/typescript-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
      parrafoEng:
        "Informative and contact page focused on a tattoo studio, with different artistic sections related to the tattoo artist, and possibility of appointments via Instagram and direct message by WhatsApp.",
    },
    {
      id: 6,
      src: popcorn,
      href: "https://popcorn-plus.vercel.app/",
      code: "https://github.com/Laoset/PopcornPlus",
      parrafo:
        "Web de streaming, mezcla entre Netflix y Disney+, consume la API de TMDB para mostrar las peliculas y series.",
      title: "Popcorn Plus",
      tech: [
        "https://icongr.am/devicon/typescript-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://www.svgrepo.com/show/303557/redux-logo.svg",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
      parrafoEng:
        "Streaming website, a mix between Netflix and Disney+, uses the TMDB API to display movies and series",
    },
    {
      id: 7,
      src: showCrypto,
      href: "https://show-crypto.vercel.app/",
      code: "https://github.com/Laoset/showCrypto",
      parrafo:
        "Aplicacion que consume la API de CoinRanking para mostrar los datos relevantes de las criptomonedas actuales, posee busqueda y filtros",
      title: "Show Crypto",
      tech: [
        "https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor",
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://d2nir1j4sou8ez.cloudfront.net/wp-content/uploads/2021/12/nextjs-boilerplate-logo.png",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
      parrafoEng:
        "Application that consumes the CoinRanking API to display relevant data about the current cryptocurrencies, has search and filter",
    },
    {
      id: 8,
      src: icare,
      href: "https://pf-grupo-2.vercel.app/",
      code: "https://github.com/ezequielnores/PF-GRUPO-2",
      parrafo:
        "Participación en un equipo de desarrollo ágil con sprints de una semana presentando a un Product Owner avances sobre el desarrollo de una App completa de Atención sanitaria digital.",
      tech: [
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://www.svgrepo.com/show/303557/redux-logo.svg",
        "https://icongr.am/devicon/nodejs-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/express-original.svg?size=128&color=000000",
        "https://icongr.am/devicon/postgresql-original.svg?size=128&color=ffffff",
        "https://www.svgrepo.com/show/354048/material-ui.svg",
      ],

      title: "iCare",
      parrafoEng:
        "Participation in an agile development team with one-week sprints presenting to a Product Owner progress on the development of a complete Digital Healthcare App.",
    },
    {
      id: 9,
      src: shoppingCart,
      href: "https://shoopingcart-akcs.vercel.app/",
      code: "https://github.com/Laoset/ShoopingCart",
      parrafo:
        "Simulador de carrito de compras, incluye: filtrar por tipo de producto, registro e inicio de sesión y eliminación e inclusión de productos.",
      title: "Shopping Cart",
      tech: [
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://www.svgrepo.com/show/303557/redux-logo.svg",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
        "https://icongr.am/devicon/nodejs-original.svg?size=128&color=ffffff",
        "https://icongr.am/devicon/express-original.svg?size=128&color=000000",
      ],
      parrafoEng:
        "Shopping cart simulator, including: filtering by product type, registration and login, and product deletion and inclusion.",
    },
    {
      id: 10,
      src: todo,
      href: "https://kevin-corman-todo-app.netlify.app/",
      code: "https://github.com/Laoset/TodoApp",
      parrafo: "Aplicacion que permite crear, modificar y eliminar tareas.",
      title: "Todo App",
      tech: [
        "https://icongr.am/devicon/react-original.svg?size=128&color=ffffff",
        "https://www.svgrepo.com/show/303557/redux-logo.svg",
        "https://www.svgrepo.com/show/374118/tailwind.svg",
      ],
      parrafoEng:
        "Application that allows you to create, modify and delete tasks.",
    },
  ];
  return (
    <>
      {isEnglish === false ? (
        <section
          name="< proyectos />"
          className=" flex flex-col justify-center w-full md:h-full  bg-otroFondo dark:bg-light font-fireCode "
        >
          <div className="max-w-screen-xl px-4 py-24 mx-auto flex flex-col justify-center w-full h-full">
            <div>
              <h2 className="font-oswald text-5xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900 text-white">
                {"< Proyectos />"}
              </h2>
            </div>
            <p className="font-fireCode py-6 text-nuevoWhite mx-m-md dark:font-semibold dark:text-black text-lg">
              Estos son mis proyectos concluidos, ¡espero tu feedback!
            </p>

            <div className="flex flex-col h-full mt-3 w-full gap-12">
              {portfolios.map(
                ({ id, src, title, href, code, parrafo, tech }) => (
                  <div
                    key={id}
                    className="dark:shadow-sm hover:scale-[1.02] duration-500 dark:bg-slate-200 flex xl:flex-row flex-col xl:h-80 w-full xl:gap-16 border-solid border-2 border-slate-600 p-3"
                  >
                    <div className="flex flex-col justify-between xl:w-2/4 text-center">
                      <div className="flex flex-col h-full w-full gap-6 ">
                        <h2 className="text-start uppercase text-2xl font-fireCode mt-4 dark:text-black text-white font-bold">
                          {title}
                        </h2>
                        <p className="text-start text-nuevoWhite dark:text-black ">
                          {parrafo}
                        </p>
                      </div>
                      <div className="flex flex-row justify-start">
                        {tech?.map((imagen) => (
                          <img
                            className="w-16 h-9 aspect-auto"
                            src={imagen}
                            alt={imagen}
                            key={imagen}
                          />
                        ))}
                      </div>
                      <div className="flex flex-row justify-around mt-6 ">
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="dark:text-nuevoWhite bg-nuevo font-cardo cursor-pointer  font-semibold  text-slate-50  rounded-md px-5 py-1 w-24"
                        >
                          Deploy
                        </a>
                        <a
                          href={code}
                          target="_blank"
                          rel="noreferrer"
                          className="dark:text-nuevoWhite bg-nuevo font-cardo cursor-pointer font-semibold   text-slate-50 dark:text-black rounded-md px-5 py-1 w-24"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                    <div className="xl:w-[45%] py-4">
                      <img
                        src={src}
                        alt="tiempo"
                        className="w-full h-full rounded-sm"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      ) : (
        <div
          name="< projects />"
          className=" flex flex-col justify-center w-full md:h-full  bg-otroFondo dark:bg-light font-fireCode "
        >
          <div className="max-w-screen-xl px-4 py-24 mx-auto flex flex-col justify-center w-full h-full">
            <div>
              <p className="font-oswald text-5xl font-extrabold inline border-b-4 border-gray-600 dark:text-gray-900 text-white">
                {"< Projects />"}
              </p>
            </div>
            <p className="font-fireCode py-6 text-nuevoWhite mx-m-md dark:font-semibold dark:text-black text-lg">
              These are my completed projects, I look forward to your feedback!
            </p>

            <div className="flex flex-col h-full mt-3 w-full gap-12">
              {portfolios.map(
                ({ id, src, title, href, code, parrafoEng, tech }) => (
                  <div
                    key={id}
                    className="dark:shadow-sm hover:scale-105 duration-500 dark:bg-slate-200 flex xl:flex-row flex-col xl:h-80 w-full xl:gap-16 border-solid border-2 border-slate-600 p-3"
                  >
                    <div className="flex flex-col justify-between xl:w-2/4 text-center">
                      <div className="flex flex-col h-full w-full gap-4 ">
                        <h2 className="text-start uppercase text-2xl font-fireCode mt-4 dark:text-black text-white font-bold">
                          {title}
                        </h2>
                        <p className="text-nuevoWhite dark:text-black text-justify">
                          {parrafoEng}
                        </p>
                      </div>
                      <div className="flex flex-row justify-center">
                        {tech?.map((imagen) => (
                          <img
                            className="w-16 h-9"
                            src={imagen}
                            alt={imagen}
                            key={imagen}
                          />
                        ))}
                      </div>

                      <div className="flex flex-row justify-around mt-6">
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="dark:text-nuevoWhite bg-nuevo font-cardo cursor-pointer duration-150 font-semibold hover:rotate-3 hover:-rotate-3 text-slate-50 dark:text-black rounded-md px-5 py-1 w-24"
                        >
                          Deploy
                        </a>
                        <a
                          href={code}
                          target="_blank"
                          rel="noreferrer"
                          className="dark:text-nuevoWhite bg-nuevo font-cardo cursor-pointer font-semibold duration-150 hover:rotate-3 hover:-rotate-3 text-slate-50 dark:text-black rounded-md px-5 py-1 w-24"
                        >
                          Code
                        </a>
                      </div>
                    </div>
                    <div className="xl:w-[45%] py-4">
                      <img
                        src={src}
                        alt="tiempo"
                        className="w-full h-full rounded-sm"
                      />
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Proyecto;
