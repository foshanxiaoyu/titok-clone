import Video from "./component/Video";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <h5 className="total">益阳市人民路幼儿园</h5> */}
      {/* <h5 className="total">Lets build a FULL STACK MERN tiktok clone</h5> */}
      {/* 删除一行的快捷键是:Ctrl+Shift+K <br/> */}
      <div className="app__videos">
        <Video
          url="https://foshanxiaoyu.github.io/fzx.mp4"
          channel={"FZX"}
          description={"中锋乖宝宝"}
          song={"This is my fav song"}
          likes={111}
          shares={222}
          messages={333}
        />
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
