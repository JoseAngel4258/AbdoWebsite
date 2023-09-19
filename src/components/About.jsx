import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = ({ imageSrc, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
    <section className="h-[100vh] w-full snap-center flex justify-center items-center bg-transparent">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        exit={exit} // Usa la variante de salida
        variants={enter} // Utiliza la animación de entrada
        className="py-16 h-[54vh] w-[66%] flex justify-center items-center bg-slate-100 rounded-2xl"
      >
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <motion.div
            initial="hidden"
            animate={controls}
            exit={exit} // Usa la variante de salida
            variants={enter} // Utiliza la animación de entrada
            className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12"
          >
            <motion.div
              className="md:5/12 lg:w-5/12"
              initial="hidden"
              animate={controls}
              exit={exit} // Usa la variante de salida
              variants={enter} // Utiliza la animación de entrada
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
              initial="hidden"
              animate={controls}
              exit={exit} // Usa la variante de salida
              variants={enter} // Utiliza la animación de entrada
            >
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                {title}
              </h2>
              <p className="mt-6 text-gray-600">{description}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
