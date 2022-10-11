import React,{useState} from "react";
import "./VideoSidebar.css";

import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({likes,shares,messages}) {
    const [liked,setLiked] = useState(false);


  return <div className="videoSidebar">
    <div className="videoSidebar__button">
    {/* <FavoriteIcon fontSize="large"/> */}
    {liked 
    ?(<FavoriteIcon
        onClick={(e)=>setLiked(false)}/>)
    : (<FavoriteIcon 
        onClick={(e)=>setLiked(true)}/>
    )}
    <p style={{fontSize : 7}}>{liked?likes+1:likes}</p>
    </div>
    <div className="videoSidebar__button">
        <MessageIcon  />
    <p style={{fontSize : 7}}>{messages?messages+1:messages}</p>
    </div>
    <div className="videoSidebar__button">
        <ShareIcon  />
    <p style={{fontSize : 7}}>{shares?shares+1:shares}</p>
    </div>

</div>;
}

export default VideoSidebar;
