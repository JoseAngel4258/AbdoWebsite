import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InstallationService = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Configura triggerOnce en false para animar cada vez que se hace visible
  });

  const [selectedPlan, setSelectedPlan] = useState("fiber");
  const [title, setTitle] = useState("Precio de Instalación"); // Título inicial

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
  const priceText =
    selectedPlan === "fiber" ? "¡Por tan solo $110!" : "¡Por tan solo $200!";

  return (
    <section
      className="h-[100vh] flex flex-col justify-center items-center snap-center pt-8 bg-slate-950"
      id="instalacion"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        variants={animationVariants}
        className="max-w-[77rem] h-[59vh] p-8 bg-slate-100 shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="wait">
          <div
            key={selectedPlan}
            className="flex flex-col justify-center text-lg ml-8"
          >
            <motion.h2
              className={`text-3xl font-semibold mb-6 ${
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
              className="text-gray-700 mb-4 text-base" // Tamaño y color del texto
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={animationVariants}
            >
              {serviceText}
            </motion.p>
            <ul className="list-disc list-inside text-base">
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
                    Pruebas exhaustivas para garantizar el funcionamiento óptimo
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
            <motion.p
              className={`text-4xl font-semibold mt-6 ${
                selectedPlan === "fiber" ? "text-red-500" : "text-blue-500"
              }`} // Cambia el color del precio
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={animationVariants}
            >
              {priceText}
            </motion.p>
          </div>
        </AnimatePresence>
        <div className="flex justify-center items-center">
          <motion.img
            src={imageSource}
            alt="Installation Service"
            className="object-cover rounded-xl w-[97%]"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={animationVariants}
          />
        </div>
      </motion.div>
      <motion.div className="flex justify-center mt-8 gap-4">
        <motion.button
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={right}
          className={` ${
            selectedPlan === "fiber"
              ? "bg-red-500 text-white" // Cambia el color del botón a rojo
              : "bg-white text-black"
          } px-4 py-2 rounded-lg`}
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
              : "bg-white text-black"
          } px-4 py-2 rounded-lg`}
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
