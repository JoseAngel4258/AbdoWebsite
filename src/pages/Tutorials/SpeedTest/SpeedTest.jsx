import React from "react";
import VideoTutorial from "../../../components/VideoTutorial";
import Navbar from "../../../components/Navbar";
import { motion, inView } from "framer-motion";
import { down } from "../../../assets/motion";
import { Link as RouteLink } from "react-router-dom";

const SpeedTest = () => {
  return (
    <>
      <Navbar />
      <section className=" flex flex-col gap-20 justify-center">
      <div className="h-20"/>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center md:text-[36px] md:leading-[41px] lg:leading-none">
            Prueba de velocidad de internet
          </h1>

          <VideoTutorial videoSrc="https://www.youtube.com/embed/uWy351tlg5A?si=rf62kbQGcUXaMJCD" />

          <p className="text-lg text-justify mx-auto px-5 w-[40%]">
            En este video, te mostraremos cómo realizar una prueba de velocidad
            a internet, ¡comencemos!
            <br />
            <br />
            Para ello debes ingresar a la página{" "}
            <a
              className="text-blue-700 hover:text-blue-600 transition-all"
              href="https://www.speedtest.net/"
            >
              speedtest.com
            </a>
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
            <RouteLink to="/">
              <li onClick="scroll(0, 0);">Abdo77 © 2023</li>
            </RouteLink>
            <li>
              <a href="">Privacidad y legal</a>
            </li>
            <li>
              <a href="https://wa.me/584128322236">Contacto </a>
            </li>
          </ul>
        </motion.footer>
      </section>
    </>
  );
};

export default SpeedTest;
