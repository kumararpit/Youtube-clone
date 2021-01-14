import React from 'react';
import "./Sidebar.css";
import Sidebarrow from './Sidebarrow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
// import { Avatar } from '@material-ui/core';
function Sidebar(Props){
   return(
       <div className="sidebar">
           <Sidebarrow selected Icon={HomeIcon}  title="Home" />  
           <Sidebarrow Icon={WhatshotIcon} title="Trending" />  
           <Sidebarrow Icon={SubscriptionsIcon} title="Subscriptions"/>
           <hr />
           <Sidebarrow Icon={VideoLibraryIcon} title="Library" />  
           <Sidebarrow Icon={HistoryIcon} title="History" />  
           <Sidebarrow Icon={OndemandVideoIcon} title="Your videos" />  
           <Sidebarrow Icon={WatchLaterIcon} title="Watch later" />  
           <Sidebarrow Icon={ThumbUpAltIcon} title="Liked videos" />  
           <Sidebarrow Icon={PlaylistPlayIcon} title="Playlist" /> 
           <hr />
           <h2 className="subscriberlist">SUBSCRIPTIONS</h2>
       </div>
   );
}
export default Sidebar;