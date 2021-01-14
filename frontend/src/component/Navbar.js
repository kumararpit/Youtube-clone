import React from 'react';
import "./Navbar.css";
import Menuicon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { Avatar } from '@material-ui/core';
function Navbar(){
  return(
      <div className="header">
          <div className="Navleft">
            <Menuicon className="menuicon"/>
             <img className="header_logo" src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="youtube clone" />
         </div>
         <div className="Navcenter">
             <div className="Navcenter_left">
            <input  type="text" placeholder="Search" />
             <SearchIcon className="searchicon" />
             </div>
             <div className="Navcenter_right">
             <MicIcon className="micicon" />
             </div>
       </div>
        <div className="Navright">
       <VideoCallIcon className="header_icons" />
       <AppsIcon className="header_icons" />
       <NotificationsActiveIcon className="header_icons" />
       <Avatar className="header_icons" alt="Arpit Kumar" src="https://avatars1.githubusercontent.com/u/31488121?s=400&u=348efb34634b4e91044174e57c7997d9ce1ee895&v=4" />
       </div>
       </div>
  );  
}
export default Navbar;