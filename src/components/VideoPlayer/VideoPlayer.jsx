// src/components/VideoPlayer.jsx
import React, { useRef, useEffect } from "react";

const VideoPlayer = ({ isPlaying, videoUrl, id }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      id={`video-${id}`}
      ref={videoRef}
      src={videoUrl}
      width="100%"
      height="auto"
      controls
      muted
      loop
    />
  );
};

export default VideoPlayer;
