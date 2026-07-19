"use client";

import React, { useEffect, useRef } from "react";

const HeroVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    // Required for autoplay to work
    // video.muted = true;
    video.playsInline = true;

    const observer = new IntersectionObserver(
      async ([entry]) => {
        try {
          if (entry.isIntersecting) {
            // Play when video enters viewport
            await video.play();
          } else {
            // Pause when video leaves viewport
            video.pause();
          }
        } catch (error) {
          console.log("Autoplay blocked:", error);
        }
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-full object-contain"
        playsInline
        preload="metadata"
        loop
      >
        <source src="/assets/videos/gsh.mp4" type="video/mp4" />

        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;
