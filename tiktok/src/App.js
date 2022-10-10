import Video from "./component/Video";
import VideoFooter from "./component/VideoFooter";
import VideoSidebar from "./component/VideoSidebar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h5 className="total">益阳市人民路幼儿园</h5>
      {/* <h5 className="total">Lets build a FULL STACK MERN tiktok clone</h5> */}
      {/* 删除一行的快捷键是:Ctrl+Shift+K <br/> */}
      <div className="app__videos">
        <Video />
      </div>

      {/* videos */}
      <VideoFooter />
      <VideoSidebar />
      {/* <Video/> */}
    </div>
  );
}

export default App;
