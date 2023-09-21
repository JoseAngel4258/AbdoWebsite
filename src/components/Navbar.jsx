import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Link as RouteLink } from "react-router-dom";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const isInVideoSection = useSelector((state) => state.isInVideoSection); // Accede al estado desde Redux
  const isInHeroSection = useSelector((state) => state.isInHeroSection);

  return (
    <div
      className={`header z-10 flex justify-between items-center h-[74px] font-inter ${
        isInVideoSection ? "header-in-video" : ""
      } ${isInHeroSection ? "header-in-hero" : ""}`}
    >
      <h1>ABDO77</h1>
      <nav className="navigation">
        <ul className="gap-4">
          <a href="#home">
            <li className="shadow-text">Inicio</li>
          </a>
          <a href="#about">
            <li className="shadow-text">Nosotros</li>
          </a>
          <a href="#services">
            <li>Servicios</li>
          </a>
          <a href="#plans">
            <li className="relative z-10 peer">Planes</li>{" "}
          </a>
          <RouteLink to="tutorials">
            <li>Tutoriales</li>
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

export default Navbar;
