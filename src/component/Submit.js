import React from "react";
import './form.css'
const Submit=(props)=>{
    
return(
    <>
    <div id="submit">
    <div>Hello {props.name} {props.password}</div>
    <div><img src="./Avatar.png" alt="img" height="150px" width="150px" /></div>
    </div>
    </>
)
}
export default Submit;