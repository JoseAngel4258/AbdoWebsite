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
    <section className="h-screen snap-center flex">
      <div className="w-1/2">
        <img
          src="/img/1.jpg"
          alt="Imagen de la empresa"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center px-20">
        <h2 className="text-4xl font-bold mb-4">
          Internet de fibra óptica y conexión inalámbrica sin límites
        </h2>
        <p className="text-lg mt-4 text-justify">
          En nuestra empresa, nos destacamos por ofrecer calidad e innovación en
          nuestros productos y servicios. Con más de 15 años de experiencia,
          hemos estado superando las expectativas de hogares y empresas en toda
          América. <br />
          <br /> Nuestro equipo de profesionales está comprometido en
          transformar tu experiencia con nuestros servicios, agregando un toque
          humano en cada proceso dentro de nuestra organización. En resumen,
          somos tu socio confiable en la búsqueda de soluciones de conectividad
          de alta calidad.
        </p>
      </div>
    </section>
  );
};

export default Product;
