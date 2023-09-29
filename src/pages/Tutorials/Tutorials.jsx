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
              tutorialImg="/img/1.jpg"
              tutorialTexto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente, ullam perferendis modi deserunt consequatur quibusdam mollitia sed ut distinctio."
              TutorialLinks="/tutorials/vsol"
            />
            <Card
              tituloTutorial="ADC"
              tutorialImg="/img/2.jpg"
              tutorialTexto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente, ullam perferendis modi deserunt consequatur quibusdam mollitia sed ut distinctio."
              TutorialLinks="/tutorials/adc"
            />
            <Card
              tituloTutorial="Tenda"
              tutorialImg="/img/3.jpg"
              tutorialTexto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente, ullam perferendis modi deserunt consequatur quibusdam mollitia sed ut distinctio."
              TutorialLinks="/tutorials/tenda"
            />
            <Card
              tituloTutorial="Speed Test"
              tutorialImg="/img/4.jpg"
              tutorialTexto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente, ullam perferendis modi deserunt consequatur quibusdam mollitia sed ut distinctio."
              TutorialLinks="/tutorials/speedtest"
            />
            <Card
              tituloTutorial="Network Analyzer"
              tutorialImg="/img/5.jpg"
              tutorialTexto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio sapiente, ullam perferendis modi deserunt consequatur quibusdam mollitia sed ut distinctio."
              TutorialLinks="/tutorials/networkanalyzer"
            />
          </div>
        </div>
        <motion.footer
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          exit="hidden"
          variants={down}
          className='flex items-center justify-center w-full mt-16'
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
