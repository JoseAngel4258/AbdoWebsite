import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVideoSectionState } from "./actions";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Video = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [videoSource, setVideoSource] = useState(
    width <= 768 ? "video2" : "video1"
  );

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
          dispatch(setVideoSectionState(true));
        } else {
          dispatch(setVideoSectionState(false));
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);

      if (newWidth <= 768) {
        setVideoSource("video2");
      } else {
        setVideoSource("video1");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
            <source
              src={videoSource === "video1" ? video1 : video2}
              type="video/mp4"
            />
          </video>
        </div>
      </section>
    </>
  );
};

export default Video;
