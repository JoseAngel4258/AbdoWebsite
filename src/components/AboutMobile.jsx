import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMobile = ({ imageSrc, title, description }) => {
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
    <section className="h-screen w-full snap-center flex md:hidden">
      

      <div className="h-1/2">
        <img
          src="/img/3.jpg"
          alt="Imagen de la empresa"
          className="w-full h-full object-cover"
        />
      </div>


    </section>
  );
};

export default AboutMobile;
