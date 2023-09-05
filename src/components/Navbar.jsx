import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  return (
    <nav className="flex flex-row justify-between items-center py-5 px-8 text-[17px] fixed w-full z-20 top-0 left-0 h-[58.5px] min-[1080px]:h-[75px] font-semibold bg-transparent text-white">
      <div className="flex items-center">
        <a className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-xl font-semibold">ABDO77</span>
        </a>
      </div>
      <div
        className="flex group gap-3"
        onMouseEnter={toggleDiv}
        onMouseLeave={toggleDiv}
      >
        <span className="relative peer">
          Botón Principal
          <AnimatePresence>
            {showDiv && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5 }}
                className="bg-white h-[80vh] fixed top-0 left-0 right-0 -z-10"
              >
                <button className="block hover:bg-gray-200 bg-gray-950">
                  Opción 1
                </button>
                <button className="block hover:bg-gray-200 bg-gray-950">
                  Opción 2
                </button>
                <button className="block hover:bg-gray-200 bg-gray-950">
                  Opción 3
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </span>
        <a
          href="#question"
          className="hover:text-black transition-colors duration-500"
        >
          Preguntas
        </a>
      </div>
      <div className="flex space-x-4">
        <button className="flex items-center space-x-2 bg-white border border-green-500 hover:bg-green-500 text-green-500 hover:px-6 py-3 rounded-full font-semibold shadow-md transition duration-500">
          <img className="h-6" src="./img/whatsapp.png" alt="Contacto" />
          <span>Contacto</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
