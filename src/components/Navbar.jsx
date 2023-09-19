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

  return (
    <div
      className={`header z-10 flex justify-center items-center h-[74px] font-inter ${isInVideoSection
          ? "header-in-video opacity-0 hover:opacity-100 transition-all duration-100"
          : ""
        }`}
    >
      <h1>ABDO77</h1>
      <nav className="navigation">
        <ul className="gap-4">
        <a href='#home'><li className="shadow-text">
            Inicio
          </li></a><a href="#about">
          <li className="shadow-text">
            Nosotros
          </li>
          </a><a href="#services"><li>
            Servicios
          </li></a> <a href="#plans">
          <li className="relative z-10 peer">
           
              Planes
           
          </li> </a>
          <RouteLink to='tutorials'><li>
            Tutoriales
          </li></RouteLink>
        </ul>
      </nav>
      <nav className="navigation">
        <ul>
          <li className="button-info-personal text-no-shadow shadow-xl hover:shadow-transparent">
            Solicitar Servicio
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
