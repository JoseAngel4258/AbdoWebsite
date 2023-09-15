import React, { useState } from "react";
import "../styles/plansCardHeizahn.css";

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
    <div
      id="service"
      className="h-[100vh] w-screen md:snap-center flex justify-center items-center bg-gray-800"
    >
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
      <div>
        <button
          className={`option-button ${
            selectedOption === "fibra" ? "selected" : ""
          }`}
          onClick={() => handleOptionChange("fibra")}
        >
          Planes de Fibra
        </button>
        <button
          className={`option-button ${
            selectedOption === "antena" ? "selected" : ""
          }`}
          onClick={() => handleOptionChange("antena")}
        >
          Planes de Antena
        </button>
      </div>
    </div>
  );
};

export default PlansCardHeizahn;
