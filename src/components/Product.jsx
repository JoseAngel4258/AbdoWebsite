import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Product = ({ imageSrc, title, description }) => {
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
    <section className="lg:h-full snap-center flex flex-col lg:flex-row overflow-hidden mb-10 lg:mb-0">
      <div className="flex lg:hidden justify-center items-center w-full ">
        <img
          src="/img/vsol.png"
          alt="Imagen de la empresa"
          className="w-[90%] md:w-[80%] h-full object-cover"
        />
      </div>
      <div className="hidden lg:flex w-full lg:w-1/2 justify-center items-center ">
        <img
          src="/img/vsol.png"
          alt="Imagen de la empresa"
          className="w-[80%] object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 text-center h-[50%] md:h-full">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-5 md:mt-0">
          Internet de fibra óptica y conexión inalámbrica sin límites
        </h2>
        <p className="text-lg mt-4 text-justify">
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
      </div>
    </section>
  );
};

export default Product;
