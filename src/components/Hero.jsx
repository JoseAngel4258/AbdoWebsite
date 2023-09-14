import { useState, useEffect } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

function Hero() {
  const slides = [
    {
      url: "/img/1.jpg",
    },
    {
      url: "/img/2.jpg",
    },
    {
      url: "/img/3.jpg",
    },

    {
      url: "/img/4.jpg",
    },
    {
      url: "/img/5.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      nextSlide();
    }, 7500); // Cambiar el intervalo de autoplay en milisegundos

    return () => {
      clearInterval(autoplay);
    };
  }, [currentIndex]);

  return (
    <div className=" h-[100vh] w-screen relative group snap-center">
      
      <div
        id="inicio"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full  bg-center bg-cover duration-500 shadow-lg"
      ></div>
      {/* Left Arrow */}
      <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 rounded-full p-1 bg-black/40 text-2xl text-white cursor-pointer">
        <MdOutlineKeyboardArrowLeft
          className="hover:text-gray-300 transition-all"
          onClick={prevSlide}
          size={60}
        />
      </div>
      {/* Right Arrow */}
      <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 rounded-full p-1 bg-black/40 text-2xl text-white cursor-pointer">
        <MdOutlineKeyboardArrowRight
          className="hover:text-gray-300 transition-all"
          onClick={nextSlide}
          size={60}
        />
      </div>
      <div className="relative inset-x-0 bottom-[40px] flex justify-center">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-100"
            }`}
          >
            <RxDotFilled size={30} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
