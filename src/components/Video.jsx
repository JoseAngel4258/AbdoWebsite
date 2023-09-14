import React, { useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import { setVideoSectionState } from "./actions";
import videoSource from "../assets/fondobg.mp4";


const Video = () => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          dispatch(setVideoSectionState(true)); // Dispara la acción para actualizar el estado
        } else {
          dispatch(setVideoSectionState(false)); // Dispara la acción para actualizar el estado
        }
      });
    }, options);

    // Comienza a observar el elemento de video cuando se monta el componente.
    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Detén la observación cuando el componente se desmonta.
    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [dispatch]); 

  return (
    <>
      <section className="w-[100vw] h-[100vh] relative">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="h-full w-full object-cover snap-center brightness-50"
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        <h3 className="absolute z-10 text-7xl text-zinc-200 top-1/3 left-32 font-mono text-center text-with-shadow">
        Hola
        </h3>
        <h3 className="absolute z-10 text-7xl text-zinc-200 top-1/3 right-32 font-mono text-center text-with-shadow">
          Servicio <br /> Ultra <br /> Estable
        </h3>
      </section>
    </>
  );
};

export default Video;
