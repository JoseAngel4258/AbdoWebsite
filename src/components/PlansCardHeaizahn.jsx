import React, { useState, useEffect } from "react";
import "../styles/plansCardHeizahn.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { left, right } from "../assets/motion";

import image1 from "/img/11.png";
import image2 from "/img/12.png";
import image3 from "/img/13.png";
import image4 from "/img/17.png";

import image5 from "/img/15.png";
import image6 from "/img/16.png";
import image7 from "/img/18.png";
import image8 from "/img/19.png";

const PlansCardHeizahn = () => {
  const [selectedPlan, setSelectedPlan] = useState("fiber");
  const [expandedImage, setExpandedImage] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

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

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.475 },
    visible: {
      opacity: 1,
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 260,
        delay: 0.13,
        damping: 20,
        duration: 0.521,
      },
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
      className="h-[800px] lg:h-[100vh] w-screen md:snap-center flex flex-col justify-center items-center text-lg snap-center mt-12 lg:mt-0 text-[18px]"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1,
          }}
          variants={{
            hidden: { opacity: 0, scale: 0.45 },
            visible: { opacity: 1, scale: 0.95 },
          }}
        >
          {selectedPlan === "fiber" ? (
            <div className="flex items-center justify-center cursor-default lg:cursor-pointer pt-8 md:pt-14 pb-5">
              <div
                className="flip-card w-[360px] h-[650px] md:w-[690px] lg:w-[100vh] lg:h-[55vh] rounded-3xl"
                onClick={handleFlip}
              >
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 360 }}
                  transition={{ duration: 0.4, animateDirection: "normal" }}
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
            <div className="flex items-center justify-center cursor-default lg:cursor-pointer pt-8 md:pt-14 pb-5">
              <div
                className="flip-card w-[360px] h-[650px] md:w-[690px] lg:w-[100vh] lg:h-[55vh] rounded-3xl"
                onClick={handleFlip}
              >
                <motion.div
                  className="flip-card-inner w-[100%] h-[100%]"
                  initial={false}
                  animate={{ rotateY: isFlipped ? 180 : 360 }}
                  transition={{ duration: 0.4, animateDirection: "normal" }}
                  onAnimationComplete={() => setIsAnimating(false)}
                >
                  <div
                    className="flip-card-front w-[100%] h-[100%] bg-center bg-cover border-[1px] text-white rounded-2xl p-4"
                    style={{
                      backgroundImage: `url(${width <= 768 ? image6 : image5})`,
                    }}
                  ></div>

                  <div
                    className="flip-card-back w-[100%] h-[100%] bg-center bg-cover border-[1px] text-white rounded-lg p-4"
                    style={{
                      backgroundImage: `url(${width <= 768 ? image8 : image7})`,
                    }}
                  ></div>
                </motion.div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="md:mt-24 flex gap-[13px] px-8 md:px-0">
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.15,
              duration: 0.65,
            }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={` ${
              selectedPlan === "fiber"
                ? "bg-slate-700 text-white"
                : "bg-white text-black  border-box"
            } px-4 py-2 rounded-2xl font-semibold cursor-pointer`}
            onClick={() => handlePlanChange("fiber")}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Planes de Fibra
          </motion.button>
          <motion.button
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.15,
              duration: 0.65,
            }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
            className={` ${
              selectedPlan === "antena"
                ? "bg-slate-700 text-white "
                : "bg-white text-black border-box"
            } px-4 py-2 rounded-2xl font-semibold cursor-pointer`}
            onClick={() => handlePlanChange("antena")}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            Planes de Antena
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PlansCardHeizahn;
