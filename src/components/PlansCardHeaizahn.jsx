import React, { useState } from "react";
import "../styles/plansCardHeizahn.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { up, left, right } from "../assets/motion";

const PlansCardHeizahn = () => {
  const [selectedOption, setSelectedOption] = useState("fibra");
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
      transition: { type: "easeIn", duration: 0.521, },
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
      className="h-[100vh] w-screen md:snap-center flex justify-center items-center text-lg"
      ref={ref}
    >
      <div className="flex flex-col items-center justify-center">
        <div>
          <motion.h1
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={up}
            className="text-5xl font-semibold"
          >
            Planes
          </motion.h1>
        </div>
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

        <div className="mt-24 flex gap-[13px]">
          <motion.button
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={right}
            className={` ${
              selectedOption === "fibra"
                ? "bg-slate-700 text-white"
                : "bg-white text-black  border-box"
            } px-4 py-2 rounded-2xl font-semibold`}
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
            } px-4 py-2 rounded-2xl font-semibold`}
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
