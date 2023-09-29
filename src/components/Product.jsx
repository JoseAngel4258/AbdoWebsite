import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { left } from "../assets/motion";

const Product = () => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Configura triggerOnce en false para animar cada vez que se hace visible
  });

  const controls = useAnimation();

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
      className="lg:h-full snap-center flex flex-col lg:flex-row overflow-hidden mb-10 lg:mb-0"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={left}
        className="flex lg:hidden justify-center items-center w-full "
      >
        <img
          src="/img/vsol.png"
          alt="Imagen de la empresa"
          className="w-[90%] md:w-[80%] h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={left}
        className="hidden lg:flex w-full lg:w-1/2 justify-center items-center "
      >
        <img
          src="/img/vsol.png"
          alt="Imagen de la empresa"
          className="w-[80%] object-cover"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={left}
        className="w-full lg:w-1/2 flex flex-col justify-center items-center p-12 text-center h-[50%] md:h-full"
      >
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
      </motion.div>
    </section>
  );
};

export default Product;
