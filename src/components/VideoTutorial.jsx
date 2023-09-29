import React from "react";

const VideoTutorial = ({ videoSrc }) => {
  return (
    <iframe
      className="my-10 rounded-2xl h-[300px] w-[88%] md:h-[420px] lg:w-[760px]"
      src={videoSrc}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
    ></iframe>
  );
};

export default VideoTutorial;
