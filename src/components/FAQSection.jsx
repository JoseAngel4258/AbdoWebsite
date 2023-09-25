import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { up, down, right } from "../assets/motion";

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
    {
      question: "¿Se cae la conexión si llueve?",
      answer:
        "No, el servicio de fibra óptica no se ve afectado por las condiciones climatológicas.",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      id="question"
      className="relative h-screen flex flex-col justify-center items-center snap-center pt-16 text-black "
    >
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8 gap-y-4">
        <div className="-mt-10">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={up}
          >
            <p className="text-sm font-semibold text-center uppercase mb-2">
              Respondemos a tus
            </p>
            <h2 className="mb-12 text-4xl font-bold text-center sm:text-5xl">
              Preguntas frecuentes
            </h2>
          </motion.div>

          <div className="flex flex-col sm:px-8 lg:px-12 xl:px-32 text-lg select-none">
            {data.map((item, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial="hidden"
                animate={controls}
                variants={down}
                transition={{ duration: 1.5 }} // Agrega un retraso entre las animaciones
              >
                <motion.summary
                  className={`py-2 outline-none cursor-pointer focus:text-gray-200 ${
                    openIndex === index ? "open" : ""
                  }`}
                  onClick={() => handleToggle(index)}
                >
                  {item.question}
                </motion.summary>
                <motion.div
                  className={`px-4 pb-4 overflow-hidden ${
                    openIndex === index ? "block" : "hidden"
                  }`}
                >
                  <p>{item.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <motion.foot
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        variants={down}
        className="flex items-center absolute bottom-0"
      >
        <ul className="flex flex-row gap-4 mb-7">
          <li>
            <a href="">Abdo77 © 2023</a>
          </li>
          <li>
            <a href="">Privacidad y legal</a>
          </li>
          <li>
            <a href="">Contacto </a>
          </li>
        </ul>
      </motion.foot>
    </section>
  );
};

export default FAQSection;
