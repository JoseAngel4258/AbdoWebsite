import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatePresence } from "framer-motion";
import { left, right } from "../assets/motion";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Configura triggerOnce en false para animar cada vez que se hace visible
  });

  const controls = useAnimation();

  // Define una animación de entrada con spring
  const enter = {
    hidden: { opacity: 0, y: -25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  // Define una animación de salida
  const exit = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
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
    <section
      ref={ref}
      id="about"
      className="lg:h-screen w-screen snap-center flex flex-col lg:flex-row overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={right}
        className="flex lg:hidden justify-center items-center w-full "
      >
        <img
          src="/img/logo.png"
          alt="Imagen de la empresa"
          className="w-[90%] md:w-[80%] h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={right}
        className="lg:w-1/2 lg:h-full flex flex-col justify-center items-center px-6 md:p-12 text-center md:-mt-36 lg:mt-0 mb-10 lg:mb-0"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Quiénes Somos?</h2>
        <p className="text-lg md:text-xl mt-4 text-justify">
          En nuestra empresa, nos destacamos por ofrecer calidad e innovación en
          nuestros productos y servicios. Con más de 15 años de experiencia,
          hemos estado superando las expectativas de hogares y empresas en toda
          América. <br />
          <br />{" "}
          <span className="hidden md:block">
            Nuestro equipo de profesionales está comprometido en transformar tu
            experiencia con nuestros servicios, agregando un toque humano en
            cada proceso dentro de nuestra organización. En resumen, somos tu
            socio confiable en la búsqueda de soluciones de conectividad de alta
            calidad.
          </span>
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={right}
        className="hidden lg:flex justify-center items-center"
      >
        <img
          src="/img/logo.png"
          alt="Imagen de la empresa"
          className="w-[73%]
           object-cover"
        />
      </motion.div>
    </section>
  );
};

export default About;
