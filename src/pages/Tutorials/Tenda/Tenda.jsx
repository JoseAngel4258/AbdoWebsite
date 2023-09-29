import React from "react";
import VideoTutorial from "../../../components/VideoTutorial";
import Navbar from "../../../components/Navbar";
import { motion, inView } from "framer-motion";
import { down } from "../../../assets/motion";

const Tenda = () => {
  return (
    <>
      <Navbar />
      <section className=" flex flex-col gap-20 justify-center">
        <div className="h-12"></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl text-center md:text-[36px] md:leading-[41px] lg:leading-none">
            Cambio de nombre Router Tenda
          </h1>

          <VideoTutorial videoSrc="https://www.youtube.com/embed/aQR4s2ouWdk?si=A5oODUqyfTqp27Wh" />

          <p className="text-lg text-justify mx-auto px-5 lg:px-[100px]">
            Para comenzar, necesitarás ingresar a la dirección de administración
            del router, que es 'tendawifi.com' en tu navegador web.
            <br />
            <br /> Una vez allí, iniciarás sesión con los siguientes datos:{" "}
            <br />
            <br /> Contraseña: abdo2020
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
              <a href="#inicio">Abdo77 © 2023</a>
            </li>
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

export default Tenda;
