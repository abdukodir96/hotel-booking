import React from "react";
import videoSrc from "../assets/aa-video.mp4";

const VideoSection = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
};

export default VideoSection;
