import Video from "./component/Video";

import "./App.css";
import React, { useEffect, useState } from "react";
import instance from "./api/axios";

function App() {
  const [videosDoc, setVideosDoc] = useState([]);

  // 此处与Ticker冲突了，禁了可以正常运行，目前不知是什么原因
  useEffect(() => {
    async function fetchPosts() {
      const response = await instance.get("/v2/posts");
      console.log(response.data);
      setVideosDoc(response.data);

      return response;
    }
    fetchPosts().catch(console.error);
  }, []);

  console.log(videosDoc);

  return (
    <div className="App">
      {/* <h5 className="total">益阳市人民路幼儿园</h5> */}
      {/* <h5 className="total">Lets build a FULL STACK MERN tiktok clone</h5> */}
      {/* 删除一行的快捷键是:Ctrl+Shift+K <br/> */}
      <div className="app__videos">
        {videosDoc.map(
          ({ url, channel, description, song, likes, shares, messages }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              messages={messages}
            />
          ),
        )}

        <p style={{ color: "white" }}>华丽分割线</p>
        <Video
          url="https://foshanxiaoyu.github.io/yer.mp4"
          channel={"FZX"}
          description={"帅哥一个"}
          song={"This is my fav song too..."}
          likes={888}
          shares={777}
          messages={666}
        />
      </div>

      {/* videos */}

      {/* <Video/> */}
    </div>
  );
}

export default App;
