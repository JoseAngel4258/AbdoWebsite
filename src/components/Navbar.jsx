import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  return (
    <div className="header z-10 flex justify-evenly items-center h-20">
      <h1 >ABDO77</h1>
      <nav className="navigation ">
        <div></div>
        <ul className="gap-4">
          <li className="shadow-text">Nosotros</li>
          <li >
            Servicios
          </li>
          <li
            onMouseEnter={toggleSubMenu}
            onMouseLeave={toggleSubMenu}
            className="relative"
          >
            Planes >
            <AnimatePresence>
              {showSubMenu && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col justify-center items-center -m-[1px] relative  sub-menu -z-10 top-full left-0 bg-white shadow-md rounded-lg p-2 py-4 gap-y-[12px] h-28"
                >
                  <li>Planes Residencial</li>
                  <li >Planes Dedicado</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>Tutoriales</li>
        </ul>
      </nav>
      <nav className="navigation">
        <ul>
          <li className="button-info-personal">Solicitar Servicio</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
