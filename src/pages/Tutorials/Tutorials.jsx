// home.jsx
import React from "react";
import Card from "../../components/Card";
import Navbar from "../../components/Navbar";
import { motion, inView } from "framer-motion";
import { down } from "../../assets/motion";

const Home = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className="h-[155px]"></div>
        <div className="flex items-center justify-center w-screen">
          <div className="flex flex-col md:flex-row gap-8 flex-wrap mx-12">
            <Card
              tituloTutorial="VSOL"
              tutorialImg="/img/vsol.png"
              tutorialTexto="Fortalece la seguridad de tu red al cambiar la contraseña de tu router VSOL. Este tutorial te guía en unos simples pasos. ¡Protege tu conexión en línea hoy!"
              TutorialLinks="/tutorials/vsol"
            />
            <Card
              tituloTutorial="ADC"
              tutorialImg="/img/adc.jpg"
              tutorialTexto="Mejora la seguridad de tu red con el cambio de contraseña de tu router ADC. Este tutorial ofrece pasos simples para proteger tu conexión en línea."
              TutorialLinks="/tutorials/adc"
            />
            <Card
              tituloTutorial="Tenda"
              tutorialImg="/img/tenda.jpg"
              tutorialTexto="Refuerza la seguridad de tu red cambiando la contraseña de tu router Tenda. Nuestro tutorial te muestra los pasos clave para proteger tu conexión en línea."
              TutorialLinks="/tutorials/tenda"
            />
            <Card
              tituloTutorial="Speed Test"
              tutorialImg="/img/speedtest.png"
              tutorialTexto="Evaluando la velocidad de tu Internet con Speedtest. Aprende a medir y optimizar tu conexión para garantizar una experiencia en línea óptima."
              TutorialLinks="/tutorials/speedtest"
            />
            <Card
              tituloTutorial="Network Analyzer"
              tutorialImg="/img/network.png"
              tutorialTexto="Network Analyzer: Mide y optimiza tu red. Descubre cómo utilizar esta herramienta esencial para garantizar una experiencia en línea sin problemas."
              TutorialLinks="/tutorials/networkanalyzer"
            />
          </div>
        </div>
        <motion.footer
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          variants={down}
          className="flex items-center justify-center w-full mt-16"
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

export default Home;
