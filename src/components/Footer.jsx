import React from "react";
import { down } from "../assets/motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.15,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);
  return (
    <motion.div
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      exit="hidden"
      variants={down}
      ref={ref}
      className="flex items-center absolute bottom-0"
    >
      <ul className="flex flex-row gap-4 mb-7">
        <li>Abdo77 © 2023</li>
        <li>Privacidad y legal</li>
        <li>Contacto</li>
        <li>Tutoriales</li>
      </ul>
    </motion.div>
  );
};

export default Footer;
