import React, { useRef, useState } from "react";
import "./video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, shares, messages }) {
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
        // src="https://foshanxiaoyu.github.io/fzx.mp4" // 这里要学会部件参数的传递，有了数据提供就活了
        src={url}
      ></video>

      <VideoFooter
        channel={channel}
        description={description}
        song={song}
        // channel={"FZX"}
        // description={"中锋乖宝宝"}
        // song={"This is my fav song"}
      />
      {/* <VideoSidebar likes={111} shares={222} messages={333} /> */}
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
      {/* <VideoSidebar likes={111} shares={222} messages={333} /> */}
    </div>
  );
}

export default Video;
