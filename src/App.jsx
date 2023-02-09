import React, { useState, useEffect, useRef } from "react";
import {
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandMantine,
  IconBrandCss3,
  IconBrandNpm,
  IconBrandTabler,
  IconBrandVscode,
  IconApi,
  IconBrandGithub,
  IconCircuitMotor,
  IconMailForward,
  IconPhone,
  IconBrandTelegram,
  IconBrandLinkedin,
  IconMenu2,
  IconBrandTypescript,
} from "@tabler/icons-react";
import { Tooltip, Grid, Image } from "@mantine/core";

import DownArrow from "./Components/DownArrow/DownArrow.jsx";

export default function App() {
  const cursorRef = useRef();
  const cursor2Ref = useRef();
  const [fullWidth, setFullWidth] = useState(false);
  const [open, setOpen] = useState(false);
  const NavElement = [
    {
      order: 1,
      title: "home",
      linkTo: "home",
      active: true,
    },
    {
      order: 2,
      title: "about",
      linkTo: "about",
    },
    {
      order: 3,
      title: "experience",
      linkTo: "experience",
      active: true,
    },
    {
      order: 4,
      title: "projects",
      linkTo: "projects",
      active: true,
    },
    {
      order: 5,
      title: "contact",
      linkTo: "contact",
      active: true,
    },
  ];
  const LanguageList = [
    {
      name: "HTML",
      icon: <IconBrandHtml5 />,
    },
    {
      name: "CSS",
      icon: <IconBrandCss3 />,
    },
    {
      name: "GITHUB",
      icon: <IconBrandGithub />,
    },
    {
      name: "JAVASCRIPT",
      icon: <IconBrandJavascript />,
    },
    {
      name: "TYPESCRIPT",
      icon: <IconBrandTypescript />,
    },
    {
      name: "REACT",
      icon: <IconBrandReact />,
    },
    {
      name: "REDUX",
      icon: <IconBrandRedux />,
    },
    {
      name: "API",
      icon: <IconApi />,
    },
    {
      name: "TAILWIND",
      icon: <IconBrandTailwind />,
    },
    {
      name: "MATERIAL UI",
      icon: <IconCircuitMotor />,
    },
    {
      name: "MANTINE",
      icon: <IconBrandMantine />,
    },
    {
      name: "NPM",
      icon: <IconBrandNpm />,
    },

    {
      name: "TABLER ICON",
      icon: <IconBrandTabler />,
    },
    {
      name: "VS CODE",
      icon: <IconBrandVscode />,
    },
  ];
  const ProjectList = [
    {
      img: "/assets/projects/react-typescript.png",
      name: "React-Task-management-system",
      tech: ["react", "typescript", "tailwind", "mantine"],
      link: "https://react-tms.vercel.app/",
    },
    {
      img: "/assets/projects/reactTMS.jpg",
      name: "React-Task-management-system",
      tech: ["react", "redux", "tailwind", "mantine", "tabler"],
      link: "https://react-tms.vercel.app/",
    },
    {
      img: "/assets/projects/restapi.jpg",
      name: "Rest-countries-api-with-color-theme-swicher",
      tech: ["react", "context-API", "Material UI"],
      link: "https://rest-countries-api-by-yaba.vercel.app/",
    },
    {
      img: "/assets/projects/todoList.jpg",
      name: "React-Advanced-Todo",
      tech: ["react", "Material-UI", "Styled-Components"],
      link: "https://react-todo-list-gamma-seven.vercel.app/",
    },
    {
      img: "/assets/projects/spaceweb.jpg",
      name: "Space-Tourism website",
      tech: ["html", "css", "javascript"],
      link: "https://frontend-mentor-space-tourism-yaba.netlify.app",
    },
    {
      img: "/assets/projects/rps.jpg",
      name: "Rock , Paper , Scissors Game",
      tech: ["html", "css", "javascript"],
      link: "https://frontend-mentor-rock-paper-scissors-challenge.netlify.app/",
    },
    {
      img: "/assets/projects/bookmark.jpg",
      name: "Landing Page",
      tech: ["html", "css", "javascript"],
      link: "https://clipboard-landing-page-yaba.netlify.app/",
    },
  ];

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursorRef.current.style.left = e.clientX + "px";
      cursorRef.current.style.top = e.clientY + "px";
      cursor2Ref.current.style.left = e.clientX + "px";
      cursor2Ref.current.style.top = e.clientY + "px";
    });

    window.addEventListener("scroll", (e) => {
      // up_arrow.classList.toggle("active-for-back", window.scrollY > 350);
      // nav_two.classList.toggle("active-for-fixed", window.scrollY > 700);
      // console.log();
      if (window.scrollY > 100) {
        console.log("hello");
        setFullWidth(true);
      } else {
        setFullWidth(false);
      }
    });
  }, []);

  const zoomIn = () => {
    cursor2Ref.current.style.backgroundColor = "#c6c6c6";
    cursor2Ref.current.style.width = "30px";
    cursor2Ref.current.style.height = "30px";
  };

  const zoomOut = () => {
    cursor2Ref.current.style.width = "8px";
    cursor2Ref.current.style.height = "8px";
  };

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor2" ref={cursor2Ref}></div>
      <nav className="flex justify-between items-center p-3  text-white font-mono pt-6  text-lg top-0 left-0 right-0 fixed z-50 gap-10">
        <div>
          <code>
            <h1 className="md:text-2xl ml-4 text-cyan-500 font-extrabold ">
              {"<Yabu />"}
            </h1>
          </code>
        </div>
        <div
          className={`fixed top-16  right-0 transition-all sm:relative sm:top-0 sm:left-0 sm:right-0 sm:translate-x-0  bg-white text-dark-gray sm:opacity-100 sm:text-white sm:bg-inherit h-screen sm:w-auto sm:h-auto ${
            open ? "left-1/4 " : "left-96 opacity-0"
          }`}
        >
          <ul className="flex justify-between  flex-col sm:flex-row ">
            {NavElement.map((el) => (
              <li
                key={el.order}
                className="font-semibold text-2xl mr-8 my-4  sm:text-base "
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
                onClick={() => setOpen(false)}
              >
                <a
                  href={`#${el.linkTo}`}
                  className="flex items-end flex-col justify-center hover:opacity-50"
                >
                  <span className="font-bold text-xs">0{el.order}</span>
                  <span>// {el.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <IconMenu2 className="sm:hidden" onClick={() => setOpen(!open)} />
        </div>
      </nav>
      <section
        className="h-screen bg-bg-home bg-no-repeat bg-cover bg-center overflow-hidden"
        id="home"
      >
        <div className="h-full w-full flex items-center justify-center flex-col capitalize text-white text-center">
          <h1 className="text-5xl font-damion tracking-wide font-semibold w-full text-center sm:text-7xl md:text-8xl">
            yeabsira tarekegn
          </h1>
          <p className="text-xl mt-4 tracking-wide font-bold uppercase font-poppins sm:text-2xl">
            front end developer
          </p>
          <div className="h-12 w-12 shadow-glow  bg-gradient-to-b from-[#ff9364] to-[#ff926491]  rounded-full -translate-y-72 translate-x-24   animate-waving-hand "></div>
          <a href="#about">
            <DownArrow />
          </a>
        </div>
      </section>
      <section
        className="h-3/5 bg-dark-gray flex items-center flex-col text-white py-20"
        id="about"
      >
        <h1 className="text-2xl font-poppins uppercase mt-1 mb-8 text-center sm:3xl md:text-4xl w-auto mx-10">
          Hi, I'm Yeabsira. Nice to meet you.
        </h1>
        <div className="w-9/12" id="code">
          <span className="translate-x-10 ">{"<p>"}</span>
          <p className="mx-8 my-3 font-poppins font-bold">
            I am front-end developer with experience in React, I am passionate
            about creating visually appealing and user-friendly web
            applications. I have experience working with React hooks and
            components, as well as an understanding of the latest web
            development technologies such as JavaScript, HTML, and CSS. My goal
            is to continue learning and growing as a developer, while also
            delivering high-quality and efficient code.
          </p>
          {"</p>"}
        </div>
      </section>
      <section
        className="h-auto bg-dark-gray flex items-center flex-col text-white py-20 tracking-wide md:h-screen"
        id="experience"
      >
        <h1 className="font-poppins text-3xl uppercase mb-8  sm:text-5xl">
          My experience
        </h1>
        <div className="w-2/4 text-center">
          <Grid
            justify="center"
            gutter={5}
            gutterXs="md"
            gutterMd="md"
            gutterXl={30}
          >
            {LanguageList.map(({ name, icon }) => (
              <Grid.Col span="auto" key={name} md={2} lg={2}>
                <Tooltip
                  label={name}
                  color="blue"
                  withArrow
                  arrowSize={6}
                  arrowRadius={4}
                  transition="skew-up"
                  position="bottom"
                  transitionDuration={300}
                >
                  <div className=" bg-slate-800 p-5 m-2 rounded-md  text-center flex  justify-center ">
                    {icon}
                  </div>
                </Tooltip>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </section>
      <section
        className="max-h-fit bg-dark-gray flex items-center flex-col text-white py-14 tracking-wide justify-center overflow-x-hidden"
        id="projects"
      >
        <h1 className="font-poppins text-2xl uppercase mb-16 text-center w-auto md:text-4xl">
          Here are some of projects
        </h1>
        <div className="flex items-center justify-center w-screen">
          <div className="w-full grid gap-6 grid-cols-1 grid-rows-3items-center justify-center md:grid-cols-2 lg:grid-cols-3 place-items-center">
            {ProjectList.map((u) => (
              <div
                className="w-3/4 bg-[#201f23] rounded-md shadow-md cursor-pointer "
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
                key={u.name}
              >
                <a href={u.link} target="_blank">
                  <div className="overflow-hidden transition-all ease-in relative z-10">
                    <img
                      src={u.img}
                      alt={u.name}
                      className="rounded-t-md transition-all ease-in hover:scale-110"
                    />
                  </div>
                  <div className="py-4 px-3">
                    <h1>{u.name}</h1>
                    <ul className="flex items-center gap-3 flex-wrap">
                      {u.tech.map((m) => (
                        <li
                          className="bg-slate-600 p-1 rounded mt-2 capitalize"
                          key={m}
                        >
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="h-auto bg-dark-gray flex items-center flex-col text-white  tracking-wide overflow-x-hidden  pb-36 sm:py-14 md:pb-96"
        id="contact"
      >
        <h1 className="font-poppins text-4xl uppercase mb-16 text-center">
          Get in touch with me using the following
        </h1>
        <div className="grid grid-cols-1 grid-rows-1 items-center  gap-24 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center w-3/4">
          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-28 w-28 rounded-full flex items-center justify-center">
              <IconMailForward size={60} />
            </div>
            <div className="text-center">
              <h1 className="font-extralight tracking-wider text-lg">Email</h1>
              <a
                href="mailto:yabahane@gmail.com"
                className="underline font-thin text-lg tracking-wider"
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
              >
                yabahane@gmail.com
              </a>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-28 w-28 rounded-full flex items-center justify-center">
              <IconPhone size={60} />
            </div>
            <div className="text-center">
              <h1 className="font-extralight tracking-wider text-lg">Phone</h1>
              <a
                href="tel:+251900305289"
                className="underline font-thin text-lg tracking-wider"
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
              >
                +251 900 305 289
              </a>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-28 w-28 rounded-full flex items-center justify-center">
              <IconBrandTelegram size={60} />
            </div>
            <div className="text-center">
              <h1 className="font-extralight tracking-wider text-lg">
                Telegram
              </h1>
              <a
                href="https://t.me/itsyaba"
                target="_blank"
                className="underline font-thin text-lg tracking-wider"
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
              >
                itsyaba
              </a>
            </div>
          </div>{" "}
          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-28 w-28 rounded-full flex items-center justify-center">
              <IconBrandGithub size={60} />
            </div>
            <div className="text-center">
              <h1 className="font-extralight tracking-wider text-lg">Github</h1>
              <a
                href="github.com/itsyaba/"
                className="underline font-thin text-lg tracking-wider"
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
              >
                itsyaba
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-400 h-28 w-28 rounded-full flex items-center justify-center">
              <IconBrandLinkedin size={60} />
            </div>
            <div className="text-center ">
              <h1 className="font-extralight tracking-wider text-lg">
                Linkedin
              </h1>
              <a
                href="https://www.linkedin.com/in/yeabsira-tarekegn-abb698214/"
                className="underline font-thin text-lg tracking-wider"
                onMouseEnter={zoomIn}
                onMouseLeave={zoomOut}
              >
                Yeabsira
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-slate-800 h-10 md:h-26 text-center flex items-center justify-center uppercase text-white">
        Design Inspired from{" "}
        <a
          href="https://tamalsen.dev/"
          target={"_blank"}
          className="underline pl-2"
          onMouseEnter={zoomIn}
          onMouseLeave={zoomOut}
        >
          {" "}
          Tamel Sen
        </a>
      </footer>
    </>
  );
}
