import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { setHeroSectionState } from "./actions";
import { motion, useAnimation } from "framer-motion";

function Hero() {
  const slides = [
    {
      url: "/img/1.png",
    },
    {
      url: "/img/2.png",
    },
    {
      url: "/img/3.png",
    },

    {
      url: "/img/4.png",
    },
    {
      url: "/img/5.png",
    },
  ];

  const slidesMobile = [
    {
      url: "/img/6.png",
    },
    {
      url: "/img/7.png",
    },
    {
      url: "/img/8.png",
    },

    {
      url: "/img/9.png",
    },
    {
      url: "/img/10.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

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

  const dispatch = useDispatch();
  const heroRef = useRef(null);
  const heroSectionState = useSelector((state) => state.heroSectionState); // Obtén el estado de la sección Hero desde Redux

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setHeroSectionState(true)); // Dispara la acción para actualizar el estado cuando la sección Hero está en pantalla
        } else {
          dispatch(setHeroSectionState(false)); // Dispara la acción para actualizar el estado cuando la sección Hero no está en pantalla
        }
      });
    }, options);

    // Comienza a observar el elemento de Hero cuando se monta el componente.
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    // Detén la observación cuando el componente se desmonta.
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className=" h-[100vh] w-screen relative group snap-center">
      <div
        ref={heroRef}
        id="inicio"
        style={{
          backgroundImage: `url(${
            width <= 768
              ? slidesMobile[currentIndex].url
              : slides[currentIndex].url
          })`,
        }}
        className="w-full h-full bg-center bg-cover duration-500 shadow-lg"
      ></div>
      {/* Left Arrow */}
      <div className="md:opacity-0 group-hover:opacity-100 transition duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-10 rounded-full p-1 bg-black/40 hover:bg-white/70 text-2xl text-white outline-none cursor-default lg:cursor-pointer">
        <MdOutlineKeyboardArrowLeft
          className="hover:text-red-600 duration-200"
          onClick={prevSlide}
          size={60}
        />
      </div>
      {/* Right Arrow */}
      <div className="md:opacity-0 group-hover:opacity-100 transition duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-10 rounded-full p-1 bg-black/40 hover:bg-white/70  text-2xl text-white outline-none cursor-default lg:cursor-pointer">
        <MdOutlineKeyboardArrowRight
          className="hover:text-red-600 transition-all"
          onClick={nextSlide}
          size={60}
        />
      </div>
      <div className="relative inset-x-0 bottom-[40px] flex justify-center">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-default lg:cursor-pointer drop-shadow-xl ${
              slideIndex === currentIndex ? "text-red-600" : "text-white"
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
