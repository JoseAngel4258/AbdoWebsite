import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Footer from "./Footer";

const FAQSection = () => {
  const data = [
    {
      question: "¿A qué zonas de Güigüe llega Abdo77?",
      answer:
        "Los Garcías, Las Tiamitas, Guaica, El Venado, La Linda, Güigüe, Inavi, Parque Azul, Buena Ventura, Parque Encantado, El Uno, La Aduana, La Primavera, 5 de Julio, Pared de Piedra, el Trompillo y Las Colonias.",
    },
    {
      question: "¿Cómo realizo mi solicitud de instalación?",
      answer:
        "Puedes dirigirte a nuestra oficina principal, Inversiones ABDO 77 C.A., ubicada en la Avenida Miranda, Local N° 2, Güigüe (al frente de MRW) o escribiéndonos a nuestro número de teléfono por WhatsApp: +58 412-8322236",
    },
    {
      question:
        "¿Qué planes tienen para el área residencial y el área corporativa?",
      answer: "Planes desde 30Mbps hasta 100Mbps.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const animationVariants = {
    visible: { opacity: 1, height: "auto" },
    hidden: { opacity: 0, height: 0 },
  };

  return (
    <section
      id="question"
      className="relative h-screen flex flex-col justify-center items-center snap-center pt-16 text-black"
    >
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="text-sm font-medium text-center uppercase">
          How it works
        </p>
        <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col sm:px-8 lg:px-12 xl:px-32">
          {data.map((item, index) => (
            <div key={index}>
              <motion.summary
                className={`py-2 outline-none cursor-pointer focus:text-gray-200 ${
                  openIndexes.includes(index) ? "open" : ""
                }`}
                onClick={() => handleToggle(index)}
                variants={animationVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                ref={ref}
              >
                {item.question}
              </motion.summary>
              <motion.div
                variants={animationVariants}
                initial="hidden"
                animate={openIndexes.includes(index) ? "visible" : "hidden"}
                exit="hidden"
                className={`px-4 pb-4 overflow-hidden ${
                  openIndexes.includes(index) ? "block" : "hidden"
                }`}
              >
                <p>{item.answer}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default FAQSection;
