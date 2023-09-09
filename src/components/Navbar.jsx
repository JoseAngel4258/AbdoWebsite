import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Contact from "./contact/Contact";
import './contact/contact.css'

const Navbar = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [showPlans, setShowPlans] = useState(false);
  const [showService, setShowServices] = useState(false);
  const [showModalContact, setShowModalContact] = useState(false);


  const showInfoPlans = () => {
    setShowPlans(true)
  }
  const hideInfoPlans = () => {
    setShowPlans(false)
  }

  const showInfoService = () => {
    setShowServices(true)
  }
  const hideInfoService = () => {
    setShowServices(false)
  }

  const toggleDiv = () => {
    setShowDiv(!showDiv);
  };

  const toggleModalHandler = () => {
    setShowModalContact(!showModalContact)
  }

  return (
    <nav className="flex flex-row justify-between items-center  py-5 px-8 text-[17px] fixed w-full z-40 top-0 left-0 h-[58.5px] min-[1080px]:h-[75px] font-semibold bg-transparent text-white">
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
      <div
        className="flex group gap-3"
        onMouseEnter={toggleDiv}
        onMouseLeave={toggleDiv}
      >
        <span className="relative peer">
          <AnimatePresence>
            {showDiv && (
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5 }}
                className="bg-white min-h-[20vh] max-h-full fixed top-0 left-0 right-0 -z-10"
              >
              </motion.div>
            )}
          </AnimatePresence>
        </span>
        <ul className="flex ">
          <li className="px-4 hover:text-black"
            onMouseEnter={showInfoPlans}
            onMouseLeave={hideInfoPlans}>Planes

            {
              showPlans && (
                <div className=""
                >
                  {/* Contenido personalizado que deseas mostrar */}
                  <p>Plan 1</p>
                  <p>Plan 2</p>
                  <p>Plan 3</p>
                </div>
              )}

          </li>

          <li className="px-4 hover:text-black"
            onMouseEnter={showInfoService}
            onMouseLeave={hideInfoService}>Service
            {
              showService && <div className=""
              >
                {/* Contenido personalizado que deseas mostrar */}
                <p>Servicio 1</p>
                <p>Servicio 2</p>
                <p>Servicio 3</p>
              </div>}</li>
        </ul>
      </div>
      <div className="flex gap-2 space-x-4 append hover:bg-green-500 duration-300 hover:p-2 rounded-md absolute right-10 text-gray-100 font-sans" onClick={toggleModalHandler} >
        <button className="rounded-full font-semibold shadow-md transition duration-500">
          <img className="h-6" src="./img/whatsapp.png" alt="Contacto" />
        </button>
      </div>
      <div className="w-[118px] bg-transparent h-1"></div> 
      {/* Modal */}
      {showModalContact && (
        <div className="fixed top-20 right-10 flex items-center justify-center z-100 bg-black bg-transparent">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            {/* Contenido del modal */}
            <Contact />
            <div className="flex justify-around">
            <button
              onClick={toggleModalHandler}
              className="block mt-4 bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 text-black"
            >
              Cancelar
            </button><button
              
              className="block mt-4 bg-red-600 px-4 py-2 rounded-lg hover:bg-red-800 text-black"
            >
              Enviar
            </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
