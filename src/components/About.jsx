import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = ({ imageSrc, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="h-[100vh] w-full snap-center flex justify-center items-center bg-slate-950">
      <div className="py-16 bg-white rounded-2xl">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src={imageSrc}
                alt="image"
                loading="lazy"
                width=""
                height=""
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                {title}
              </h2>
              <p className="mt-6 text-gray-600">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
