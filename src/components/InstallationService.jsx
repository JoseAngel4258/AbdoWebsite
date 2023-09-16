import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InstallationService = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [selectedPlan, setSelectedPlan] = useState("fiber");

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
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
  const priceText = selectedPlan === "fiber" ? "$110" : "$200";

  return (
    <section
      className="h-[100vh] flex flex-col justify-center items-center snap-center pt-8 bg-slate-900"
      id="instalacion"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden" // Agregamos exit para controlar el "fade out"
        variants={animationVariants}
        className="max-w-[77rem] h-[59vh] p-8 bg-slate-50 shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="wait">
          <div
            key={selectedPlan}
            className="flex flex-col justify-center text-lg"
          >
            <h2 className="text-3xl font-semibold mb-6">
              Precio de Instalación
            </h2>
            <motion.p
              className="text-gray-700 mb-4"
              initial={{ opacity: 0 }} // Establecemos la opacidad inicial
              animate={{ opacity: 1 }} // Animamos a la opacidad completa
              exit={{ opacity: 0 }} // Animamos la opacidad al salir
            >
              {serviceText}
            </motion.p>
            <ul className="list-disc list-inside text-gray-700">
              <li>Instalación completa por técnicos certificados</li>
              <li>Configuración personalizada de acuerdo a tus necesidades</li>
              <li>
                Pruebas exhaustivas para garantizar el funcionamiento óptimo
              </li>
              <li>Router completamente tuyo</li>
            </ul>
            <motion.p
              className="text-4xl font-semibold mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {priceText}
            </motion.p>
          </div>
        </AnimatePresence>
        <div className="flex justify-center items-center">
          <img
            src={imageSource}
            alt="Installation Service"
            className="object-cover rounded-xl w-[97%]"
          />
        </div>
      </motion.div>
      <div className="flex justify-center mt-8">
        <motion.button
          className={`mr-2 ${
            selectedPlan === "fiber"
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          } px-4 py-2 rounded-lg`}
          onClick={() => handlePlanChange("fiber")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Plan de Fibra
        </motion.button>
        <motion.button
          className={`${
            selectedPlan === "antena"
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          } px-4 py-2 rounded-lg`}
          onClick={() => handlePlanChange("antena")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Plan de Antena
        </motion.button>
      </div>
    </section>
  );
};

export default InstallationService;
