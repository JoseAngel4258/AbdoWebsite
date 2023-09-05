import React, { useState } from "react";

const Navbar = () => {
  const [mostrarBotonesExtras, setMostrarBotonesExtras] = useState(false);

  const mostrarBotonesExtrasHandler = () => {
    setMostrarBotonesExtras(true);
  };

  const ocultarBotonesExtrasHandler = () => {
    setMostrarBotonesExtras(false);
  };

  return (
    <nav className="flex flex-row justify-between items-center py-5 px-8 text-[17px] fixed w-full z-20 top-0 left-0 h-[58.5px] min-[1080px]:h-[75px] font-semibold bg-transparent text-white">
      <div className="flex items-center">
        <a className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-xl font-semibold">ABDO77</span>
        </a>
      </div>
      <div className="flex space-x-6">
        <span
          className="relative group"
          onMouseEnter={mostrarBotonesExtrasHandler}
          onMouseLeave={ocultarBotonesExtrasHandler}
        >
          Botón Principal
          {mostrarBotonesExtras && (
            <div className="absolute left-0 mt-3 p-2 space-y-2 bg-white rounded-lg shadow-lg">
              {/* Contenido adicional */}
              <button className="block hover:bg-gray-200">Opción 1</button>
              <button className="block hover:bg-gray-200">Opción 2</button>
              <button className="block hover:bg-gray-200">Opción 3</button>
            </div>
          )}
        </span>
        <a href="#question" className="hover:text-black transition-colors duration-500">
          Preguntas
        </a>
      </div>
      <div className="flex space-x-4">
        <button className="flex items-center space-x-2 bg-white border border-green-500 hover:bg-green-500 text-green-500 hover:px-6 py-3 rounded-full font-semibold shadow-md transition duration-500">
          <img className="h-6" src="./img/whatsapp.png" alt="Contacto" />
          <span>Contacto</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
