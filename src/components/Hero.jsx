import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
import { setHeroSectionState } from "./actions";

function Hero() {
  const slides = [
    { url: "/img/1.png" },
    { url: "/img/2.png" },
    { url: "/img/3.png" },
    { url: "/img/4.png" },
    { url: "/img/5.png" },
  ];

  const slidesMobile = [
    { url: "/img/6.png" },
    { url: "/img/8.png" },
    { url: "/img/7.png" },
    { url: "/img/9.png" },
    { url: "/img/10.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const [iconSize, setIconSize] = useState(window.innerWidth < 768 ? 40 : 60);

  const prevSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );

  const nextSlide = () =>
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );

  const dispatch = useDispatch();
  const heroRef = useRef(null);

  const handleResize = useCallback(() => {
    const screenSize = window.innerWidth;
    const newIconSize = screenSize < 768 ? 40 : 60;
    if (iconSize !== newIconSize) setIconSize(newIconSize);
    if (width !== screenSize) setWidth(screenSize);
  }, [iconSize, width]);

  useEffect(() => {
    const autoplay = setInterval(nextSlide, 7500);

    return () => clearInterval(autoplay);
  }, []);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        dispatch(setHeroSectionState(entry.isIntersecting))
      );
    }, options);

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [dispatch]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <div id="inicio" className="h-[100vh] w-screen relative group snap-center">
      <div className="w-full h-full relative">
        <img
          src={
            width <= 768
              ? slidesMobile[currentIndex].url
              : slides[currentIndex].url
          }
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover duration-500 shadow-lg"
        />
      </div>
      {/* Left Arrow */}
      <div className="md:opacity-0 group-hover:opacity-100 transition duration-300 absolute hidden lg:block top-[50%] -translate-x-0 translate-y-[577%] lg:translate-y-[-50%] left-5 lg:left-10 rounded-full p-1 bg-black/70 lg:bg-black/40 hover:bg-white/70 text-2xl text-white outline-none cursor-pointer">
        <MdOutlineKeyboardArrowLeft
          className="hover:text-red-600 duration-200"
          onClick={prevSlide}
          size={iconSize}
        />
      </div>
      {/* Right Arrow */}
      <div className="md:opacity-0 group-hover:opacity-100 transition duration-300 absolute hidden lg:block top-[50%] -translate-x-0 translate-y-[577%] lg:translate-y-[-50%] right-5 lg:right-10 rounded-full p-1 bg-black/70 lg:bg-black/40 hover:bg-white/70 text-2xl text-white outline-none cursor-pointer">
        <MdOutlineKeyboardArrowRight
          className="hover:text-red-600 transition-all"
          onClick={nextSlide}
          size={iconSize}
        />
      </div>
      <div className="relative inset-x-0 bottom-[105px] md:bottom-[40px] flex justify-center">
        {slides.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
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
