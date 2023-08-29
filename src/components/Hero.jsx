import { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Navbar from "./Navbar";

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
    <div className="max-w-[1400px] h-[100vh] w-full m-auto pt-24 pb-12 px-4 relative mt-5 group snap-center">
      <Navbar />
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-xl bg-center bg-cover duration-500 shadow-lg"
      ></div>
      {/* Left Arrow */}
      <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="opacity-0 group-hover:opacity-100 transition duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-black" : "text-gray-300"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
