import React from "react";
import videoSource from "../assets/fondobg.mp4";


const Video = () => {
  return (
    <>
      <section className="w-[100vw] h-[100vh] relative">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover snap-center brightness-50"
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        <h1 className="absolute z-10 text-[150px] text-white top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-sans tracking-[1px] font-semibold text-with-shadow">
          Internet Ultra Veloz
        </h1>
      </section>
    </>
  );
};

export default Video;
