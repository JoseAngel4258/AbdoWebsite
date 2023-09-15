import React, { useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <section
      className="h-[100vh] flex justify-center items-center snap-center pt-8"
      id="instalacion"
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        className="max-w-7xl h-[55vh] p-8 bg-white shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8 "
      >
        <div className="flex flex-col justify-center text-lg">
          <h2 className="text-3xl font-semibold mb-6">Precio de Instalación</h2>
          {selectedPlan === "fiber" ? (
            <p className="text-gray-700 mb-4">
              Nuestro servicio de instalación profesional incluye:
            </p>
          ) : (
            <p className="text-gray-700 mb-4">
              Nuestro servicio de instalación de antenas incluye:
            </p>
          )}
          <ul className="list-disc list-inside text-gray-700">
            <li>Instalación completa por técnicos certificados</li>
            <li>Configuración personalizada de acuerdo a tus necesidades</li>
            <li>
              Pruebas exhaustivas para garantizar el funcionamiento óptimo
            </li>
            <li>Router completamente tuyo</li>
          </ul>
          {selectedPlan === "fiber" ? (
            <p className="text-4xl font-semibold mt-6">$110</p>
          ) : (
            <p className="text-4xl font-semibold mt-6">$200</p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/img/installation.jpg"
            alt="Installation Service"
            className="object-cover rounded-xl w-4/5"
          />
        </div>
      </motion.div>
      <div className="flex justify-center mt-4">
        <button
          className={`mr-2 ${
            selectedPlan === "fiber"
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          } px-4 py-2 rounded-lg`}
          onClick={() => handlePlanChange("fiber")}
        >
          Plan de Fibra
        </button>
        <button
          className={`${
            selectedPlan === "antena"
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          } px-4 py-2 rounded-lg`}
          onClick={() => handlePlanChange("antena")}
        >
          Plan de Antena
        </button>
      </div>
    </section>
  );
};

export default InstallationService;
