import React, { useRef, useState } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
    // if video is playing
    // stop it ...
    // otherwise if its not playing
    // play it...
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src="https://foshanxiaoyu.github.io/fzx.mp4"
      ></video>
      Video
    </div>
  );
}

export default Video;
