import React, { useState, useEffect  } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  const [isInVideoSection, setIsInVideoSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById("video");
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect();
        setIsInVideoSection(rect.top <= 0 && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`header z-10 flex justify-center items-center h-[74px] font-inter ${
        isInVideoSection ? "opacity-100" : ""
      }`}
    >
      <h1>ABDO77</h1>
      <nav className="navigation">
        <div></div>
        <ul className="gap-4">
          <li className="shadow-text">Nosotros</li>
          <li>Servicios</li>
          <li
            onMouseEnter={toggleSubMenu}
            onMouseLeave={toggleSubMenu}
            className="relative z-10"
          >
            Planes
            <AnimatePresence>
              {showSubMenu && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex flex-col justify-center mt-[-2px] items-center absolute sub-menu top-full  bg-white shadow-md rounded-lg p-2 py-4 gap-y-[12px] h-32 z"
                >
                  <li>Planes Residencial</li>
                  <li>Planes Dedicado</li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>Tutoriales</li>
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
