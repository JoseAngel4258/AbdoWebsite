import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ParticlesBackground from "./ParticlesBackground";

const About = ({ imageSrc, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Permitir repeticiones
    threshold: 0.1,
  });

  const controls = useAnimation();

  // Define animaciones de entrada y salida suaves
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeOut = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Detecta cambios en la visibilidad
  React.useEffect(() => {
    if (inView) {
      // Si la sección es visible, reproduce la animación de entrada
      controls.start("visible");
    } else {
      // Si la sección no es visible, reproduce la animación de salida
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section className="h-[100vh] w-full snap-center flex justify-center items-center bg-transparent">
      <motion.div
        ref={ref}
        initial="hidden" // Estado inicial de la animación
        animate={controls} // Control de animación
        exit="hidden" // Estado de salida de la animación
        variants={inView ? fadeIn : fadeOut} // Variante de animación según la visibilidad
        className="py-16 h-[54vh] w-[66%] flex justify-center items-center bg-slate-100 rounded-2xl"
      >
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <motion.div
            initial="hidden" // Estado inicial de la animación del texto
            animate={controls} // Control de animación del texto
            exit="hidden" // Estado de salida de la animación del texto
            variants={inView ? fadeIn : fadeOut} // Variante de animación del texto según la visibilidad
            className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
          >
            <motion.div
              className="md:5/12 lg:w-5/12"
              initial="hidden" // Estado inicial de la animación de la imagen
              animate={controls} // Control de animación de la imagen
              exit="hidden" // Estado de salida de la animación de la imagen
              variants={inView ? fadeIn : fadeOut} // Variante de animación de la imagen según la visibilidad
            >
              <img
                className="rounded-2xl"
                src={imageSrc}
                alt="image"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="md:7/12 lg:w-6/12"
              initial="hidden" // Estado inicial de la animación del texto
              animate={controls} // Control de animación del texto
              exit="hidden" // Estado de salida de la animación del texto
              variants={inView ? fadeIn : fadeOut} // Variante de animación del texto según la visibilidad
            >
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                {title}
              </h2>
              <p className="mt-6 text-gray-600">{description}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <ParticlesBackground/>
    </section>
  );
};

export default About;
