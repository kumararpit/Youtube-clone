import React from 'react';
import "./Recommand.css";
import Hashtags from './Hashtags'
function Recommand(){
   return(
       <div className="mainpart">
          <Hashtags className="hashtags" />
          <Recommand /> 
       </div>
   );
}
export default Recommand;