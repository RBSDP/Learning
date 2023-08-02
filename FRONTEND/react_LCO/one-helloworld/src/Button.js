import React from "react";

let Button = ({title = "nothing"}) => (
    <div>
         <button className="button">{title}</button>
       
    </div>
    )


export default Button;