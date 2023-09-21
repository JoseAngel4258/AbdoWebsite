import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { up, left, right } from "../assets/motion";

const InstallationService = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Configura triggerOnce en false para animar cada vez que se hace visible
  });

  const [selectedPlan, setSelectedPlan] = useState("fiber");
  const [title, setTitle] = useState("Precio de Instalación de Fibra"); // Título inicial

  const animationVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  const left = {
    hidden: { opacity: 0, x: 25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  const right = {
    hidden: { opacity: 0, x: -25 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    // Actualizar el título según el plan seleccionado
    setTitle(
      plan === "fiber"
        ? "Precio de Instalación de Fibra"
        : "Precio de Instalación de Antena"
    );
  };

  // Establece la fuente de la imagen en función de selectedPlan
  const imageSource =
    selectedPlan === "fiber"
      ? "/img/installation_fibra.jpg"
      : "/img/installation_antenna.jpg";

  // Define los textos según el plan seleccionado
  const serviceText =
    selectedPlan === "fiber"
      ? "Nuestro servicio de instalación profesional incluye:"
      : "Nuestro servicio de instalación de antenas incluye:";

  return (
    <section
      className="h-screen flex flex-col items-center snap-center text-lg"
      id="instalacion"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        variants={animationVariants}
        className="rounded-xl flex flex-col md:flex-row h-[85%] mt-6"
      >
        <div className="md:w-1/2">
          <div className="max-w-[100%] h-full flex justify-center items-center">
            <motion.img
              src={imageSource}
              alt="Installation Service"
              className="object-cover h-[70%] w-[90%] rounded-2xl"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={animationVariants}
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <AnimatePresence mode="wait">
            <div
              key={selectedPlan}
              className="flex flex-col justify-center  text-lg ml-8"
            >
              <motion.h2
                className={`text-4xl text-center font-semibold mb-6 ${
                  selectedPlan === "fiber" ? "text-red-500" : "text-blue-500"
                }`} // Cambia el color del título
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={animationVariants}
              >
                {title}
              </motion.h2>
              <motion.p
                className="text-gray-700 mb-4 text-lg px-8" // Tamaño y color del texto
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={animationVariants}
              >
                {serviceText}
              </motion.p>
              <ul className="list-disc list-inside text-xl">
                {selectedPlan === "fiber" ? (
                  <>
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={animationVariants}
                    >
                      Instalación completa por técnicos certificados
                    </motion.li>
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={animationVariants}
                    >
                      Configuración personalizada de acuerdo a tus necesidades
                    </motion.li>
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={animationVariants}
                    >
                      Pruebas exhaustivas para garantizar el funcionamiento
                      óptimo
                    </motion.li>
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={animationVariants}
                    >
                      Router completamente tuyo
                    </motion.li>
                  </>
                ) : (
                  <>
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={animationVariants}
                    >
                      Instalación de antenas de alta calidad
                    </motion.li>
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={animationVariants}
                    >
                      Configuración y alineación precisa
                    </motion.li>
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={animationVariants}
                    >
                      Pruebas exhaustivas para garantizar la señal óptima
                    </motion.li>
                    <motion.li
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={animationVariants}
                    >
                      Soporte técnico continuo
                    </motion.li>
                  </>
                )}
              </ul>
            </div>
          </AnimatePresence>
        </div>
      </motion.div>
      <motion.div className="flex justify-center items-center gap-4 -mt-6 text-lg">
        <motion.button
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={right}
          className={` ${
            selectedPlan === "fiber"
              ? "bg-red-500 text-white" // Cambia el color del botón a rojo
              : "bg-white text-black border-box"
          } px-4 py-2 rounded-2xl w-[170px] font-semibold`}
          onClick={() => handlePlanChange("fiber")}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          Plan de Fibra
        </motion.button>
        <motion.button
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={left}
          className={`${
            selectedPlan === "antena"
              ? "bg-blue-500 text-white"
              : "bg-white text-black border-box"
          } px-4 py-2 rounded-2xl w-[170px] font-semibold`}
          onClick={() => handlePlanChange("antena")}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          Plan de Antena
        </motion.button>
      </motion.div>
    </section>
  );
};

export default InstallationService;
