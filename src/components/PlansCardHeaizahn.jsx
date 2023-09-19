import React, { useState } from "react";
import "../styles/plansCardHeizahn.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PlansCardHeizahn = () => {
  const [selectedOption, setSelectedOption] = useState("fibra");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
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

    const left = {
      hidden: { opacity: 0, x: 25 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 120, damping: 14 },
      },
    };

    const right = {
      hidden: { opacity: 0, x: -25 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 120, damping: 14 },
      },
    };

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      id="service"
      className="h-[100vh] w-screen md:snap-center flex justify-center items-center bg-gray-800"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center">
        <motion.div
          className="contenedor"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {selectedOption === "fibra" ? (
            <>
              <div className="box one" dataText="plan1"></div>
              <div className="box two" dataText="plan2"></div>
              <div className="box three" dataText="plan3"></div>
            </>
          ) : (
            <>
              <div className="box one" dataText="plan5"></div>
              <div className="box two" dataText="plan6"></div>
              <div className="box three" dataText="plan7"></div>
            </>
          )}
        </motion.div>

        <div className="mt-[75px] flex gap-[13px]">
          <motion.button
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={right}
            className={` ${
              selectedOption === "fibra"
                ? "bg-slate-700 text-white"
                : "bg-white text-black font-semibold"
            } px-4 py-2 rounded-lg`}
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
                : "bg-white text-black"
            } px-4 py-2 rounded-lg font-semibold`}
            onClick={() => handleOptionChange("antena")}
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
