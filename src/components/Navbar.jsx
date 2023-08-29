const Navbar = () => {
  return (
    <nav className="flex flex-row justify-between items-center py-5 px-8 text-[17px] fixed w-full z-20 top-0 left-0 h-[58.5px] min-[1080px]:h-[75px] bg-gray-700 text-black  font-semibold bg-transparent">
      <div className="flex items-center">
        <a href="#" className="flex items-center space-x-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Logo"
          />
          <span className="text-xl font-semibold">ABDO77</span>
        </a>
      </div>
      <div className="flex space-x-6">
        <a
          href="#"
          className=" hover:text-black transition-colors duration-300"
        >
          Inicio
        </a>
        <a
          href="#about"
          className=" hover:text-black transition-colors duration-300"
        >
          Nosotros
        </a>
        <a
          href="#"
          className=" hover:text-black transition-colors duration-300"
        >
          Servicios
        </a>
        <a
          href="#"
          className=" hover:text-black transition-colors duration-300"
        >
          Preguntas
        </a>
      </div>
      <div className="flex space-x-4">
        <button className="flex items-center space-x-2 bg-white border border-green-500 hover:bg-green-500 text-green-500 hover: px-6 py-3 rounded-full font-semibold shadow-md transition duration-300">
          <img className="h-6" src="./img/whatsapp.png" alt="Contacto" />
          <span>Contacto</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;












