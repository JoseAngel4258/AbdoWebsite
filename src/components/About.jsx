import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="h-[100vh] flex justify-center items-center snap-center pt-16 text-black"
    >
      <div className="h-[80vh] bg-white shadow-lg rounded-xl  max-w-7xl mx-auto px-14 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Humildes Comienzos
          </h2>
          <p className="text-lg text-gray-700">
            Nuestra travesía comenzó con una idea simple: llevar innovación y
            creatividad al mundo digital. Desde nuestra pequeña oficina en el
            garaje, crecimos en un equipo de individuos apasionados
            comprometidos a dar forma al futuro.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src="/img/about-section1.jpg"
            alt="Nuestros Comienzos"
            className="rounded-xl shadow-md mt-8 h-[53vh] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
