import React from 'react'
import Button from '@material-ui/core/Button';
import "./Tags.css"
function Tags(Props){
    return(
     <div className="tags">
        <Button variant="outlined">{Props.title}</Button>
     </div>
    );
}
 export default Tags;