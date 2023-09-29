import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoSectionState } from "./actions";
import videoSource from "../assets/fondobg.mp4";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Video = () => {
  const dispatch = useDispatch();
  const videoRef = useRef(null);
  const videoSectionState = useSelector((state) => state.videoSectionState);

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
      <section
        ref={videoRef}
        className="w-[100vw] h-[100vh] relative flex items-center justify-center snap-center"
      >
        <div className="w-full h-full flex items-center justify-center bg-gray-950">
          <video
            autoPlay
            muted
            loop
            className="h-[100%] w-full object-cover snap-center"
          >
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
};

export default Video;
