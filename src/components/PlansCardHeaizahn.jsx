import React, { useState } from "react";
import "../styles/plansCardHeizahn.css";
import { motion } from "framer-motion";

const PlansCardHeizahn = () => {
  const [showContainer1, setShowContainer1] = useState(true);
  const [selectedOption, setSelectedOption] = useState("fibra");

  const toggleContainer = () => {
    setShowContainer1((prev) => !prev);
  };

  const handleOptionChange = (option) => {
    if (option === selectedOption) {
      return; // No hacer nada si la opción actual se hace clic nuevamente
    }

    setSelectedOption(option);

    // Desactivar el contenedor no seleccionado
    setShowContainer1(option === "fibra");
  };

  return (
    <section
      id="service"
      className="h-[100vh] w-screen md:snap-center flex justify-center items-center bg-gray-800"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="contenedor">
          {showContainer1 ? (
            // Contenedor de Fibra
            <>
              <div className="box one" dataText="plan1"></div>
              <div className="box two" dataText="plan2"></div>
              <div className="box three" dataText="plan3"></div>
            </>
          ) : (
            // Contenedor de Antena
            <>
              <div className="box one" dataText="plan5"></div>
              <div className="box two" dataText="plan6"></div>
              <div className="box three" dataText="plan7"></div>
            </>
          )}
        </div>

        <div className="mt-[50px]">
          <motion.button
            className={`option-button ${
              selectedOption === "fibra" ? "selected" : ""
            } bg-red-500 text-white px-4 py-2 rounded-lg`}
            onClick={() => handleOptionChange("fibra")}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Planes de Fibra
          </motion.button>
          <motion.button
            className={`option-button ${
              selectedOption === "antena" ? "selected" : ""
            } bg-blue-500 text-white px-4 py-2 rounded-lg`}
            onClick={() => handleOptionChange("antena")}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Planes de Antena
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PlansCardHeizahn;
