import React from "react";
import "./VideoSidebar.css";

import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar() {
  return <div className="videoSidebar">
    <div className="videoSidebar__button">
    {/* <FavoriteIcon fontSize="large"/> */}
    <FavoriteIcon />
    <p style={{fontSize : 7}}>收藏数</p>
    </div>
    <div className="videoSidebar__button">
        <MessageIcon  />
    <p style={{fontSize : 7}}>评价数</p>
    </div>
    <div className="videoSidebar__button">
        <ShareIcon  />
    <p style={{fontSize : 7}}>分享数</p>
    </div>

</div>;
}

export default VideoSidebar;
