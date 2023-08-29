import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About3 = () => {
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
            Expandiendo Horizontes
          </h2>
          <p className="text-lg text-gray-700">
            Nuestro viaje de crecimiento continúa a medida que expandimos
            nuestros horizontes. Con presencia global y un compromiso con la
            excelencia, estamos emocionados de enfrentar nuevos desafíos y
            oportunidades.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <img
            src="/img/about-section3.jpg"
            alt="Expandiendo Horizontes"
            className="rounded-xl shadow-md mt-8 h-[50vh] w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About3;
