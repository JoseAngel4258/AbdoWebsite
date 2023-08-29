import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About2 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section
      ref={ref}
      className="h-[100vh] flex justify-center items-center snap-center pt-16"
    >
      <div className="h-[80vh] bg-white shadow-lg rounded-xl  max-w-7xl mx-auto px-14 py-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Abrazando la Innovación
          </h2>
          <p className="text-lg text-gray-700">
            La innovación está en el corazón de todo lo que hacemos. Con un
            equipo de pensadores avanzados, hemos adoptado tecnologías
            emergentes y hemos liderado nuevas formas de brindar valor a
            nuestros clientes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src="/img/about-section2.jpg"
            alt="Abrazando la Innovación"
            className="rounded-xl shadow-md mt-8 h-[53vh] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About2;
