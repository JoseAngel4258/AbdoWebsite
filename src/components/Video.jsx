import React from "react";
import videoSource from "../assets/fondobg.mp4";

const Video = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] relative">
        <video autoPlay muted loop className="h-full w-full object-cover snap-center">
          <source src={videoSource} type="video/mp4" />

        </video>
        <h1 className="absolute z-10 text-9xl text-white top-10 left-0 right-0 ">HOLA MUNDO</h1>
      </div>
    </>
  );
};

export default Video;
