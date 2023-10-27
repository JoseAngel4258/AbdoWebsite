import React, { useState, useEffect } from "react";
import "../styles/plansCardHeizahn.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { left, right } from "../assets/motion";

import image1 from "/img/11.png";
import image2 from "/img/12.png";
import image3 from "/img/13.png";
import image4 from "/img/14.png";

const PlansCardHeizahn = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("fibra");
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  const handleImageClick = (index) => {
    setExpandedImage(index);
  };

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  const handleOptionChange = (option) => {
    if (option === selectedOption) {
      return;
    }

    setSelectedOption(option);
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.475 },
    visible: {
      opacity: 1,
      scale: 0.95,
      transition: { type: "easeIn", duration: 0.521 },
    },
  };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

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
    <section
      id="plans"
      className="h-[600px] lg:h-[100vh] w-screen md:snap-center  flex flex-col justify-center items-center text-lg snap-center mt-16 lg:mt-0"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="flex"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {selectedOption === "fibra" ? (
            <div className="flex items-center justify-center cursor-default lg:cursor-pointer pt-12">
              <div
                className="flip-card w-[390px] h-[650px] lg:w-[1060px] lg:h-[600px] rounded-xl"
                onClick={handleFlip}
              >
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 360 }}
                  transition={{ duration: 0.6, animateDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating(false)}
                >
                  <div
                    className="flip-card-front w-[100%] h-[100%] bg-center bg-cover border-[1px] text-white rounded-2xl p-4"
                    style={{
                      backgroundImage: `url(${width <= 768 ? image2 : image1})`,
                    }}
                  ></div>

                  <div
                    className="flip-card-back w-[100%] h-[100%] bg-center bg-cover border-[1px] text-white rounded-lg p-4"
                    style={{
                      backgroundImage: `url(${width <= 768 ? image4 : image3})`,
                    }}
                  ></div>
                </motion.div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center cursor-pointer pt-12">
              <div
                className="flip-card w-3/4 h-3/6 lg:w-[760px] lg:h-[460px] rounded-md"
                onClick={handleFlip}
              >
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 360 }}
                  transition={{ duration: 0.6, animateDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating(false)}
                >
                  <div
                    className="flip-card-front w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
                    style={{ backgroundImage: `url(${image3})` }}
                  >
                    <h1 className="text-2xl font-bold">Hola mundo</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem doloremque quam dicta!
                    </p>
                  </div>

                  <div
                    className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-white rounded-lg p-4"
                    style={{ backgroundImage: `url(${image4})` }}
                  >
                    <h1 className="text-2xl font-bold">Hola mundo</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Autem doloremque quam dicta!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>

        {/*  <div className="md:mt-24 flex gap-[13px] px-8 md:px-0">
          <motion.button
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={right}
            className={` ${
              selectedOption === "fibra"
                ? "bg-slate-700 text-white"
                : "bg-white text-black  border-box"
            } text-sm px-4 py-2 rounded-2xl font-semibold`}
            onClick={() => handleOptionChange("fibra")}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Planes de Fibra
          </motion.button>
          <motion.button
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={left}
            className={` ${
              selectedOption === "antena"
                ? "bg-slate-700 text-white "
                : "bg-white text-black border-box"
            } text-sm px-4 py-2 rounded-2xl font-semibold`}
            onClick={() => handleOptionChange("antena")}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Planes de Antena
          </motion.button>
        </div> */}
      </div>
    </section>
  );
};

export default PlansCardHeizahn;
