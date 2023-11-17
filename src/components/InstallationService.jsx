import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const InstallationService = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Configura triggerOnce en false para animar cada vez que se hace visible
  });

  const [selectedPlan, setSelectedPlan] = useState("fiber");
  const [title, setTitle] = useState("Instalación de Fibra"); // Título inicial

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    // Actualizar el título según el plan seleccionado
    setTitle(
      plan === "fiber" ? "Instalación de Fibra" : "Instalación de Antena"
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
      className="h-[650px] min-[390px]:h-[700px] lg:h-screen flex flex-col  snap-center text-lg px-6 lg:mt-0"
      id="services"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.15,
          duration: 0.75,
        }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex flex-col md:flex-row h-[90%] justify-center"
      >
        <div className="flex items-center justify-center  md:w-1/2">
          <div className="w-[100%] md:max-w-[90%] h-full flex justify-center items-end min-[392px]:items-center">
            <img
              src={imageSource}
              alt="Installation Service"
              className="object-cover h-[100%] md:h-[55%] w-[100%] rounded-3xl mb-4"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center items-center">
          <div
            key={selectedPlan}
            className="flex flex-col justify-center text-lg lg:ml-8"
          >
            <h2
              className={`text-2xl min-[392px]:text-3xl md:text-5xl px-8 md:px-0 text-justify font-semibold ${
                selectedPlan === "fiber" ? "text-red-600" : "text-blue-600"
              }`} // Cambia el color del título
            >
              {title}
            </h2>
            <p
              className="text-gray-900 mb-4 text-sm min-[392px]:text-base md:text-lg my-3 md:my-6" // Tamaño y color del texto
            >
              {serviceText}
            </p>
            <ul className="list-disc list-inside font-medium text-xs text-justify md:text-xl min-[392px]:text-lg px-8 md:px-0">
              {selectedPlan === "fiber" ? (
                <div>
                  <li>Instalación completa por técnicos certificados.</li>
                  <li>
                    Configuración personalizada de acuerdo a tus necesidades.
                  </li>
                  <li>
                    Pruebas exhaustivas para garantizar el funcionamiento
                    óptimo.
                  </li>
                </div>
              ) : (
                <div>
                  <li>Instalación de antenas de alta calidad.</li>
                  <li>Configuración y alineación precisa.</li>
                  <li>Pruebas exhaustivas para garantizar la señal óptima.</li>
                  <li>Soporte técnico continuo.</li>
                </div>
              )}
            </ul>
          </div>
        </div>
      </motion.div>
      <div className="flex justify-center items-center gap-4 -mt-6 text-sm md:text-lg md:px-0">
        <motion.button
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.15,
            duration: 0.65,
          }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
          className={` ${
            selectedPlan === "fiber"
              ? "bg-red-600 text-white" // Cambia el color del botón a rojo
              : "bg-white text-black border-box"
          } px-4 py-2 rounded-2xl font-semibold cursor-pointer`}
          onClick={() => handlePlanChange("fiber")}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          Servicio de Fibra
        </motion.button>
        <motion.button
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.15,
            duration: 0.65,
          }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`${
            selectedPlan === "antena"
              ? "bg-blue-600 text-white"
              : "bg-white text-black border-box"
          } px-4 py-2 rounded-2xl font-semibold cursor-pointer`}
          onClick={() => handlePlanChange("antena")}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
        >
          Servicio de Antena
        </motion.button>
      </div>
    </section>
  );
};

export default InstallationService;
