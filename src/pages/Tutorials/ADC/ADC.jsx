import React from "react";
import { motion, inView } from "framer-motion";
import { down } from "../../../assets/motion";
import VideoTutorial from "../../../components/VideoTutorial";
import Navbar from "../../../components/Navbar";
import { Link as RouteLink } from "react-router-dom";

const ADC = () => {
  return (
    <>
      <Navbar />
      <section className=" flex flex-col gap-20 justify-center">
        <div className="h-12"></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center md:text-[36px] md:leading-[41px] lg:leading-none">
            Cambio de nombre Router ADC
          </h1>

          <VideoTutorial videoSrc="https://www.youtube.com/embed/jte-J2n8WuE?si=uibbHUTmr0-c9Nav" />

          <p className="text-lg text-justify mx-auto px-5 lg:px-[100px]">
            Para comenzar, necesitarás ingresar a la dirección de administración
            del router, que es 192.128.1.1 en tu navegador web.
            <br />
            <br /> Una vez allí, iniciarás sesión con los siguientes datos:{" "}
            <br />
            <br /> Usuario: user <br />
            <br /> Contraseña: user
          </p>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center md:text-[36px] md:leading-[41px] lg:leading-none">
            Cambio de contraseña Router ADC
          </h1>

          <VideoTutorial videoSrc="https://www.youtube.com/embed/M8O8jKNyQpI?si=kZkAhVsSPEmJ93xK" />

          <p className="text-lg text-justify mx-auto px-5 lg:px-[100px]">
            Para comenzar, necesitarás ingresar a la dirección de administración
            del router, que es 192.168.1.1 en tu navegador web.
            <br />
            <br /> Una vez allí, iniciarás sesión con los siguientes datos:{" "}
            <br />
            <br /> Usuario: user <br />
            <br /> Contraseña: user
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
              <a target="_blank" href="https://wa.me/584128322236">
                Contacto{" "}
              </a>
            </li>
          </ul>
        </motion.footer>
      </section>
    </>
  );
};

export default ADC;
