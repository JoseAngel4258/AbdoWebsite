import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <section className="text-gray-900 xl:h-screen  flex flex-col items-center justify-center snap-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.15,
          duration: 0.65,
        }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
        className="container px-5 py-24 mx-auto"
      >
        <div className="text-center mb-20">
          <p className="text-base font-medium leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Respondemos a tus
          </p>
          <h1 className="md:text-5xl text-3xl font-bold text-center title-font text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 text-justify">
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                ¿A qué zonas de Güigüe llega Abdo77?
              </summary>
              <span>
                Los Garcías, Las Tiamitas, Guaica, El Venado, La Linda, Güigüe,
                Inavi, Parque Azul, Buena Ventura, Parque Encantado, El Uno, La
                Aduana, La Primavera, 5 de Julio, Pared de Piedra, el Trompillo
                y Las Colonias.
              </span>
            </details>
            <details class="mb-4">
              <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                ¿Cómo solicito mi solicitud de instalación?
              </summary>

              <span>
                Puedes dirigirte a nuestra oficina principal, Inversiones ABDO
                77 C.A., ubicada en la Avenida Miranda, Local N° 2, Güigüe (al
                frente de MRW) o escribiéndonos a nuestro número de teléfono por
                WhatsApp:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/584128322236"
                  className="text-green-600 hover:text-green-700 transition-all"
                >
                  +58 412-8322236
                </a>
                .
              </span>
            </details>
            <details class="mb-4">
              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                ¿Cómo contacto al servicio técnico?
              </summary>

              <span>
                Escribiéndonos a nuestro número de teléfono por WhatsApp:{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://wa.me/584128322236"
                  className="text-green-600 hover:text-green-700 transition-all"
                >
                  +58 412-8322236
                </a>
                .
              </span>
            </details>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details class="mb-4">
              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                ¿Qué planes tienen para el área residencial y el área
                corporativa?
              </summary>

              <span class="px-4 py-2">
                Planes desde 30Mbps, 60Mbps hasta 100Mbps.
              </span>
            </details>
            <details class="mb-4">
              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                ¿Cómo puedo medir mi velocidad de internet?
              </summary>

              <span class="px-4 py-2">
                Recomendamos que utilices esta página:
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.speedtest.net"
                  className="text-blue-600 hover:text-blue-700 transition-all"
                >
                  +58 412-8322236
                </a>
                .
              </span>
            </details>
            <details class="mb-4">
              <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 cursor-pointer">
                ¿Cómo puedo bloquear gente de mi WiFi?
              </summary>

              <span class="px-4 py-2">
                Existen varios métodos para ello, recomendamos que revises
                nuestra sección de tutoriales para lista blanca y lista negra.
              </span>
            </details>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
