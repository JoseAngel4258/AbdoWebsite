import React, { useState } from "react";
import { Link as RouteLink } from "react-router-dom";

const NavbarTutorials = ({ setActiveButton }) => {
  const [activeButton, setActiveButtonLocal] = useState("inicio");

  const handleButtonClick = (buttonName) => {
    setActiveButtonLocal(buttonName);
    setActiveButton(buttonName);
  };

  return (
    <div className="header z-10 flex justify-between items-center h-[74px] font-inter">
      <h1>ABDO77</h1>
      <nav className="navigation">
        <ul className="gap-4">
          <RouteLink to="/">
            <li>Inicio</li>
          </RouteLink>

          <RouteLink to="/tutorials/vsol">
            <li>VSOL</li>
          </RouteLink>

          <RouteLink to="/tutorials/adc">
            {" "}
            <li>ADC</li>
          </RouteLink>

          <RouteLink to="/tutorials/tenda">
            {" "}
            <li>Tenda</li>
          </RouteLink>

          <RouteLink to="/tutorials/speedtest">
            {" "}
            <li>Speed Test</li>
          </RouteLink>

          <RouteLink to="/tutorials/networkanalyzer">
            <li>Network Analyzer</li>
          </RouteLink>
        </ul>
      </nav>
      <div className="navigation">
        <ul>
          <li className="button-info-personal text-no-shadow shadow-xl hover:shadow-transparent">
            Solicitar Servicio
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarTutorials;
