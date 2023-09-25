// home.jsx
import React, { useState } from "react";
import NavbarTutorials from "../../components/NavbarTutorials";
import VSOL from "./VSOL/VSOL";
import ADC from "./ADC/ADC";
import Tenda from "./Tenda/Tenda";

import Mercusys from "./SpeedTest/SpeedTest";
import Lupo from "./Lupo/Lupo";

const Home = () => {
  const [activeButton, setActiveButton] = useState("vsol"); // Estado para el botón activo

  const handleButtonChange = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Función para renderizar el componente según el botón activo
  const renderComponent = () => {
    switch (activeButton) {
      case "vsol":
        return <VSOL />;
      case "adc":
        return <ADC />;
      case "tenda":
        return <Tenda />;
      case "tp-link":
        return <Lupo />;
      case "mercusys":
        return <Mercusys />;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavbarTutorials
        setActiveButton={handleButtonChange}
        activeButton={activeButton}
      />
      <div className="flex flex-col items-center">
        {renderComponent()}{" "}
        {/* Renderiza el componente basado en el botón activo */}
      </div>
    </div>
  );
};

export default Home;
