import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { right } from "../assets/motion";

const About = () => {
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
      id="about"
      className="lg:h-screen h-[1000px] w-screen snap-center flex flex-col lg:flex-row overflow-hidden"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.13,
          duration: 0.5,
        }}
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex lg:hidden justify-center items-center w-full"
      >
        <img
          src="/img/logo.png"
          alt="Imagen de la empresa"
          className="w-[90%] md:w-[80%] h-full object-cover"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.13,
          duration: 0.5,
        }}
        variants={{
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        }}
        className="lg:w-1/2 lg:h-full flex flex-col justify-center items-center px-12 md:p-12 -mt-16 lg:mt-0 mb-32 lg:mb-0"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-10">¿Quiénes Somos?</h2>
        <p className="text-lg md:text-xl mt-4 text-justify font-medium">
          En nuestra empresa, nos destacamos por ofrecer calidad e innovación en
          nuestros productos y servicios. Con más de 15 años de experiencia,
          hemos estado superando las expectativas de hogares y empresas en toda
          América.
        </p>
        <br />
        <br />{" "}
        <p className="text-lg md:text-xl mt-4 text-justify font-medium">
          Nuestro equipo de profesionales está comprometido en transformar tu
          experiencia con nuestros servicios, agregando un toque humano en cada
          proceso dentro de nuestra organización. En resumen, somos tu socio
          confiable en la búsqueda de soluciones de conectividad de alta
          calidad.
        </p>
      </motion.div>

      <div className="hidden lg:flex justify-center items-center">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.13,
            duration: 0.5,
          }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
          src="/img/logo.png"
          alt="Imagen de la empresa"
          className="w-[73%]
           object-cover"
        />
      </div>
    </section>
  );
};

export default About;
