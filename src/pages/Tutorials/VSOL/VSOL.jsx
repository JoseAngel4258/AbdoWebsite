import React from "react";
import VideoTutorial from "../../../components/VideoTutorial";
import Navbar from "../../../components/Navbar";
import { motion, inView } from "framer-motion";
import { down } from "../../../assets/motion";
import { Link as RouteLink } from "react-router-dom";

const h1 = ({ title }) => {
  return (
    <>
      <div className="bg-slate-800 h-[500px] min-[375px]:h-[530px] md:h-[620px] md:w-[320px] lg:h-[550px] lg:w-[370px] rounded-2xl text-white">
        <div className="w-full h-full">
          <img
            className="w-full h-[38%] rounded-t-2xl object-cover"
            src={tutorialImg}
            alt="tutorial-img"
          />
          <div className="text-center px-5">
            <h1 className="text-2xl min-[375px]:text-3xl md:text-4xl font-semibold mt-6 md:mt-8">
              {tituloTutorial}
            </h1>
            <p className="text-sm min-[375px]:text-base md:text-lg my-6 md:my-8 text-left">
              {tutorialTexto}
            </p>
            <RouteLink to={TutorialLinks}>
              <div>
                <button className="text-xl border-[3px] border-slate-700 hover:border-slate-600 hover:bg-slate-700 p-3 rounded-2xl transition-all cursor-default lg:cursor-pointer">
                  Ver más...
                </button>
              </div>
            </RouteLink>
          </div>
        </div>
      </div>
    </>
  );
};

const VSOL = () => {
  return (
    <>
      <Navbar />
      <section className="flex flex-col gap-20 justify-center">
        <div className="h-20"/>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold md:text-[36px] md:leading-[41px] lg:leading-none">
            Cambio de contraseña Router VSOL V2804AC-Z
          </h1>

          <VideoTutorial videoSrc="https://www.youtube.com/embed/0W5URivwx6c?si=k_e6wG3CfQxQXfKA" />

          <p className="text-lg text-justify mx-auto px-5 w-[40%]">
            Para comenzar, necesitarás ingresar a la dirección de administración
            del router, que es 192.168.1.1 en tu navegador web.
            <br />
            <br /> Una vez allí, iniciarás sesión con los siguientes datos:{" "}
            <br />
            <br /> Usuario: useradmin <br />
            <br /> Contraseña: adminuser123
            <br />
            <br />
            El nombre del wifi lo cambian en el mismo menú, la opción se llama
            'SSID'.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-semibold md:text-[36px] md:leading-[41px] lg:leading-none">
            Tutorial de lista blanca VSOL V2804AC-Z
          </h1>

          <VideoTutorial videoSrc="https://www.youtube.com/embed/XQNy9D67DqE?si=KCg0GlOcc9lm7Ql7" />
          <p className="text-lg text-justify mx-auto px-5 w-[40%]">
            Para comenzar, necesitarás ingresar a la dirección de administración
            del router, que es 192.168.1.1 en tu navegador web. <br />
            <br />
            Usuario: useradmin <br />
            <br /> Contraseña: adminuser123 <br />
          </p>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-2xl font-semibold md:text-[36px] md:leading-[41px] lg:leading-none">
            Cambio de clave Router VSOL V2802DAC
          </h1>
          <VideoTutorial videoSrc="https://www.youtube.com/embed/yVC7KY3KPPw?si=z_nr3fILEH4Un774" />
          <p className="text-lg text-justify mx-auto px-5 w-[40%]">
            Para comenzar, necesitarás ingresar a la dirección de administración
            del router, que es 192.168.1.1 en tu navegador web.
            <br />
            <br /> Una vez allí, iniciarás sesión con los siguientes datos:{" "}
            <br />
            <br /> Usuario: useradmin <br />
            <br /> Contraseña: adminuser123
          </p>
        </div>

        <motion.footer
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          variants={down}
          className="flex items-center justify-center w-full"
        >
          <ul className="flex flex-row gap-4 mb-7">
            <li>
              <RouteLink to="/">
                <li onClick="scroll(0, 0);">Abdo77 © 2023</li>
              </RouteLink>
            </li>
            <li>
              <a className="cursor-default lg:cursor-pointer" href="">
                Privacidad y legal
              </a>
            </li>
            <li>
              <a
                className="cursor-default lg:cursor-pointer"
                href="https://wa.me/584128322236"
              >
                Contacto{" "}
              </a>
            </li>
          </ul>
        </motion.footer>
      </section>
    </>
  );
};

export default VSOL;
