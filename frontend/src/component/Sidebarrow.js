import React from 'react';
import "./Sidebarrow.css";
function Sidebarrow(Props){
    return(
        <div className="sidebarrow">
            <Props.Icon className="siderow_icon" />
            <h2 className="sidebarrow_title">{Props.title}</h2>
        </div>
    );
}
export default Sidebarrow;