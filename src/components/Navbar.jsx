import React, { useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const isInVideoSection = useSelector((state) => state.isInVideoSection); // Accede al estado desde Redux

  return (
    <div
      className={`header z-10 flex justify-center items-center h-[74px] font-inter ${
        isInVideoSection
          ? "header-in-video opacity-0 hover:opacity-100 transition-all duration-100"
          : ""
      }`}
    >
      <h1>ABDO77</h1>
      <nav className="navigation">
        <ul className="gap-4">
          <li className="shadow-text">
           Inicio
          </li>
          <li className="shadow-text">Nosotros</li>
          <li>Servicios</li>
          <div className="relative z-10 peer">
            <li className="relative z-10 peer">Planes</li>

            <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg absolute top-[30px] rounded-xl">
              <a
                className="px-5 py-3 hover:bg-gray-200 hover:rounded-xl" // Aquí aplicamos las mismas clases de hover
                href="#"
              >
                About Us
              </a>
              <a
                className="px-5 py-3 hover:bg-gray-200 hover:rounded-xl" // Aquí se mantiene el estilo hover original
                href="#"
              >
                Contact Us
              </a>
              <a
                className="px-5 py-3 hover:bg-gray-200 hover:rounded-xl" // Aquí se mantiene el estilo hover original
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <li>
          Tutoriales
          </li>
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
