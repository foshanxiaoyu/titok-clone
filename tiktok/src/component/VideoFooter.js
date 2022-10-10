import React from "react";
import "./videoFooter.css";
// 因为react18中安装material-ui/icon不起作用所以需要用：1.npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps 2.npm install @mui/icons-material --legacy-peer-deps 来安装
// import MusicNoteIcon from "@material-ui/icons/MusicNote"  这个导入是不正常的，需要导入下面连接;
import MusicNoteIcon from "@mui/icons-material/MusicNote";

import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div class="videoFooter__text">
        <h4>@FZX</h4>
        <p>中锋乖宝宝</p>
        {/* Material Icons npm i @material-ui/icons */}
        <div className="videoFoot__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker>
            {({ index }) => (
              <>
                <p style={{ fontSize: 8 }}>This is the Headline of element #</p>
              </>
            )}
          </Ticker>

          {/* <Ticker mode="smooth">
        {({index})=>{
            <>
            </>
        }}
      </Ticker> */}
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
