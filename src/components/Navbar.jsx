import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouteLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
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

  return (
    <>
      <section>
        <div
          className={`header z-10  ${
            isInVideoSection ? "header-in-video" : ""
          } ${isInHeroSection ? "header-in-hero" : ""}`}
        >
          <nav className="flex justify-between items-center font-inter w-screen">
            <div>
              {isInHeroSection ? (
                <RouteLink to="/">
                  <div onClick={handleScrollToTop}>
                    {" "}
                    <img
                      className="h-[42px] md:h-[57px] w-[123px] md:w-[170px] object-cover"
                      src="/img/logoConContorno.png"
                      alt="logo_abdo"
                    />
                  </div>
                </RouteLink>
              ) : (
                <RouteLink to="/">
                  <div onClick="scroll(0, 0);">
                    <img
                      className="h-[42px] md:h-[57px] w-[123px] md:w-[170px] object-cover cursor-default lg:cursor-pointer"
                      src="/img/logo.png"
                      alt="logo_abdo"
                    />
                  </div>
                </RouteLink>
              )}
            </div>

            <div className="navigation lg:flex hidden">
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
                  <RouteLink to="/tutorials">
                    <li onClick="scroll(0, 0);">Tutoriales</li>
                  </RouteLink>
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
            <div className="navigation w-[170px] lg:flex hidden">
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
              className="relative h-8 w-8 text-3xl lg:hidden cursor-default lg:cursor-pointer"
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
        className={`w-full min-h-screen absolute top-0 bg-navbar object-cover z-10 origin-top open-menu text-white ${` ${
          isVisible ? "flex" : "hidden"
        }`}`}
      >
        <button
          onClick={toggleVisibility}
          className="absolute text-5xl pr-5 pt-5 md:pt-7 mb-12 right-0 cursor-default lg:cursor-pointer"
        >
          X
        </button>
        <div className="flex flex-col w-full items-center justify-center min-h-[100vh]">
          <nav className="flex flex-col justify-center items-center w-full text-6xl text-center">
            {location.pathname === "/" ? (
              <ul className="gap-7 flex flex-col text-shadow w-full">
                <a
                  className="cursor-default"
                  onClick={toggleVisibility}
                  href="#home"
                >
                  Inicio
                </a>
                <a
                  className="cursor-default"
                  onClick={toggleVisibility}
                  href="#about"
                >
                  Nosotros
                </a>
                <a
                  className="cursor-default"
                  onClick={toggleVisibility}
                  href="#services"
                >
                  Servicios
                </a>
                <a
                  className="cursor-default"
                  onClick={toggleVisibility}
                  href="#plans"
                >
                  Planes
                </a>
                <RouteLink to="/tutorials">
                  <a
                    className="cursor-default blue-border"
                    onClick="scroll(0, 0);"
                  >
                    Tutoriales
                  </a>
                </RouteLink>
                <li className="button-info-personal red-border">
                  <a
                    className="cursor-default"
                    href="https://wa.me/584128322236"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Solicitar Servicio
                  </a>
                </li>
              </ul>
            ) : (
              <ul className="gap-9 drop-shadow-2xl opacity-100 text-shadow flex flex-col w-full ">
                {location.pathname === "/tutorials" ? (
                  <RouteLink to="/">
                    <li className="cursor-default" onClick="scroll(0, 0);">
                      Inicio
                    </li>
                  </RouteLink>
                ) : (
                  <RouteLink to="/tutorials">
                    <li className="cursor-default" onClick="scroll(0, 0);">
                      Menú
                    </li>
                  </RouteLink>
                )}
                <RouteLink to="/tutorials/vsol">
                  <li className="cursor-default" onClick="scroll(0, 0);">
                    VSOL
                  </li>
                </RouteLink>

                <RouteLink to="/tutorials/adc">
                  {" "}
                  <li className="cursor-default" onClick="scroll(0, 0);">
                    ADC
                  </li>
                </RouteLink>

                <RouteLink to="/tutorials/tenda">
                  {" "}
                  <li className="cursor-default" onClick="scroll(0, 0);">
                    Tenda
                  </li>
                </RouteLink>

                <RouteLink to="/tutorials/speedtest">
                  {" "}
                  <li className="cursor-default" onClick="scroll(0, 0);">
                    Speed Test
                  </li>
                </RouteLink>

                <RouteLink to="/tutorials/networkanalyzer">
                  <li className="cursor-default" onClick="scroll(0, 0);">
                    Network Analyzer
                  </li>
                </RouteLink>

                <li className="button-info-personal red-border">
                  <a
                    className="cursor-default"
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
