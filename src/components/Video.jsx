import React from "react";
import videoSource from "../assets/fondobg.mp4";


const Video = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] relative">
        <video
          autoPlay
          muted
          loop
          className="h-full w-full object-cover snap-center brightness-50"
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        <h3 className="absolute z-10 text-6xl text-zinc-200 top-1/3 left-32 font-mono">Internet <br /> Ultra <br /> Veloz</h3>
        <h3 className="absolute z-10 text-6xl text-zinc-200 top-1/3 right-32 font-mono">Internet <br /> Ultra <br /> Estable</h3>

      </div>
    </>
  );
};

export default Video;
