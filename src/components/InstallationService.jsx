import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InstallationService = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  };

  return (
    <section className="h-[100vh] flex justify-center items-center snap-center pt-8"
    id="instalacion">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={animationVariants}
        className="max-w-7xl h-[55vh] p-8 bg-white shadow-xl rounded-xl grid grid-cols-1 md:grid-cols-2 gap-8 "
      >
        <div className="flex flex-col justify-center text-lg">
          <h2 className="text-3xl font-semibold mb-6">Precio de Instalación</h2>
          <p className="text-gray-700 mb-4">
            Nuestro servicio de instalación profesional incluye:
          </p>
          <ul className="list-disc list-inside text-gray-700">
            <li>Instalación completa por técnicos certificados</li>
            <li>Configuración personalizada de acuerdo a tus necesidades</li>
            <li>
              Pruebas exhaustivas para garantizar el funcionamiento óptimo
            </li>
            <li>Router completamente tuyo</li>
          </ul>
          <p className="text-4xl font-semibold mt-6">$110</p>
        </div>
        <div className="flex justify-center items-center">
      
            <img
              src="/img/installation.jpg"
              alt="Installation Service"
              className="object-cover rounded-xl w-4/5"
            />
        
        </div>
      </motion.div>
    </section>
  );
};

export default InstallationService;
