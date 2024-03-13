import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const [showSubMenu, setShowSubMenu] = useState(false);
  const toggleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };

  const location = useLocation();

  const isInVideoSection = useSelector((state) => state.isInVideoSection); // Accede al estado desde Redux
  const isInHeroSection = useSelector((state) => state.isInHeroSection);

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("dropdownMenu");
      if (menu && !menu.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section>
        <div
          className={`header z-10  ${
            isInVideoSection ? "header-in-video" : ""
          } ${isInHeroSection ? "header-in-hero" : ""}`}
        >
          <nav className="flex justify-between items-center w-screen h-[55px]">
            <div>
              <RouteLink to="/">
                <div onClick="scroll(0, 0);">
                  <img
                    className="w-[123px] md:w-[220px] object-cover cursor-pointer lg:cursor-pointer"
                    src="/img/logo.jpg"
                    alt="logo_abdo"
                  />
                </div>
              </RouteLink>
            </div>

            <div className="navigation lg:flex hidden" id="dropdownMenu">
              {location.pathname === "/" ? (
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
                    <li className="relative z-10 peer">Planes</li>
                  </a>

                  <li className="relative">
                    <div className="flex items-center justify-center group w-full h-full">
                      <span
                        className="mr-1 cursor-pointer"
                        onClick={toggleDropdown}
                      >
                        Ayuda y soporte
                      </span>
                      <svg
                        className="fill-current h-4 w-4 cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        onClick={toggleDropdown}
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                      <ul
                        className={`absolute top-10 flex flex-col gap-2 text-gray-700 pt-1 bg-white rounded-lg shadow-md p-2 mt-2 transition-opacity duration-500 ease-in-out ${
                          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                      >
                        <a
                          href="#faq"
                          className="py-2 px-4 text-black rounded-md text-center a"
                          onClick={toggleDropdown}
                        >
                          Preguntas frecuentes
                        </a>

                        <a
                          href="#contact"
                          className="py-2 px-4 text-black rounded-md text-center a"
                          onClick={toggleDropdown}
                        >
                          Contacto
                        </a>

                        <RouteLink to="/tutorials">
                          <li
                            className="py-2 px-4 text-black rounded-md text-center"
                            onClick={() => {
                              setIsOpen(false);
                              window.scrollTo(0, 0);
                            }}
                          >
                            <a>Tutoriales</a>
                          </li>
                        </RouteLink>
                      </ul>
                    </div>
                  </li>
                </ul>
              ) : (
                <ul className="gap-4">
                  {location.pathname === "/tutorials" ? (
                    <RouteLink to="/">
                      <li onClick="scroll(0, 0);">Inicio</li>
                    </RouteLink>
                  ) : (
                    <RouteLink to="/tutorials">
                      <li onClick="scroll(0, 0);">Menú</li>
                    </RouteLink>
                  )}

                  <RouteLink to="/tutorials/vsol">
                    <li onClick="scroll(0, 0);">VSOL</li>
                  </RouteLink>

                  <RouteLink to="/tutorials/adc">
                    {" "}
                    <li onClick="scroll(0, 0);">ADC</li>
                  </RouteLink>

                  <RouteLink to="/tutorials/tenda">
                    {" "}
                    <li onClick="scroll(0, 0);">Tenda</li>
                  </RouteLink>

                  <RouteLink to="/tutorials/speedtest">
                    {" "}
                    <li onClick="scroll(0, 0);">Speed Test</li>
                  </RouteLink>

                  <RouteLink to="/tutorials/networkanalyzer">
                    <li onClick="scroll(0, 0);">Network Analyzer</li>
                  </RouteLink>
                </ul>
              )}
            </div>
            <div className="navigation w-[123px] md:w-[220px] lg:flex hidden">
              <ul>
                <li className="button-info-personal text-no-shadow shadow-xl hover:shadow-transparent">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/584128322236"
                  >
                    Solicitar Servicio
                  </a>
                </li>
              </ul>
            </div>
            <button
              onClick={toggleVisibility}
              className="relative h-8 w-8 text-3xl lg:hidden cursor-pointer lg:cursor-pointer"
            >
              <div
                className={`absolute top-4 -mt-0.5 h-1 w-8 rounded  transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded  before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded  after:transition-all after:duration-500 after:content-[''] ${
                  isInHeroSection
                    ? "bg-white before:bg-white after:bg-white"
                    : "bg-black before:bg-black after:bg-black"
                }`}
              ></div>
            </button>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`w-full min-h-screen absolute top-0 bg-white object-cover z-10 origin-top open-menu text-black ${` ${
          isVisible ? "flex" : "hidden"
        }`}`}
      >
        <button
          onClick={toggleVisibility}
          className="absolute text-5xl pr-5 pt-5 md:pt-7 mb-12 right-0 cursor-pointer lg:cursor-pointer"
        >
          X
        </button>
        <div className="flex flex-col w-full items-center justify-center min-h-[100vh]">
          <nav className="flex flex-col justify-center items-center w-full text-5xl text-center">
            {location.pathname === "/" ? (
              <ul className="gap-7 flex flex-col w-full">
                <a
                  className="cursor-pointer"
                  onClick={toggleVisibility}
                  href="#home"
                >
                  Inicio
                </a>
                <a
                  className="cursor-pointer"
                  onClick={toggleVisibility}
                  href="#about"
                >
                  Nosotros
                </a>
                <a
                  className="cursor-pointer"
                  onClick={toggleVisibility}
                  href="#services"
                >
                  Servicios
                </a>
                <a
                  className="cursor-pointer"
                  onClick={toggleVisibility}
                  href="#plans"
                >
                  Planes
                </a>
                <a
                  className="cursor-pointer"
                  onClick={toggleVisibility}
                  href="#faq"
                >
                  Preguntas frecuentes
                </a>
                <a
                  className="cursor-pointer"
                  onClick={toggleVisibility}
                  href="#contact"
                >
                  Contacto
                </a>
                <RouteLink to="/tutorials">
                  <a
                    className="cursor-pointer text-blue-600"
                    onClick="scroll(0, 0);"
                  >
                    Tutoriales
                  </a>
                </RouteLink>
                <li className="button-info-personal text-red-600">
                  <a
                    className="cursor-pointer"
                    href="https://wa.me/584128322236"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar Servicio
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="gap-9 drop-shadow-2xl opacity-100 flex flex-col w-full">
                {location.pathname === "/tutorials" ? (
                  <RouteLink to="/">
                    <li className="cursor-pointer" onClick="scroll(0, 0);">
                      Inicio
                    </li>
                  </RouteLink>
                ) : (
                  <RouteLink to="/tutorials">
                    <li className="cursor-pointer" onClick="scroll(0, 0);">
                      Menú
                    </li>
                  </RouteLink>
                )}
                <RouteLink to="/tutorials/vsol">
                  <li className="cursor-pointer" onClick="scroll(0, 0);">
                    VSOL
                  </li>
                </RouteLink>

                <RouteLink to="/tutorials/adc">
                  {" "}
                  <li className="cursor-pointer" onClick="scroll(0, 0);">
                    ADC
                  </li>
                </RouteLink>

                <RouteLink to="/tutorials/tenda">
                  {" "}
                  <li className="cursor-pointer" onClick="scroll(0, 0);">
                    Tenda
                  </li>
                </RouteLink>

                <RouteLink to="/tutorials/speedtest">
                  {" "}
                  <li className="cursor-pointer" onClick="scroll(0, 0);">
                    Speed Test
                  </li>
                </RouteLink>

                <RouteLink to="/tutorials/networkanalyzer">
                  <li className="cursor-pointer" onClick="scroll(0, 0);">
                    Network Analyzer
                  </li>
                </RouteLink>

                <li className="button-info-personal text-red-600">
                  <a
                    className="cursor-pointer"
                    target="_blank"
                    rel="noreferrer"
                    href="https://wa.me/584128322236"
                  >
                    Solicitar Servicio
                  </a>
                </li>
              </ul>
            )}
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
