import React,{useContext} from "react";

import ThemeContext from "../context/ThemaContext";


const ThemaToggler = ()=>{

    const [themeMode,setThemaMode]=useContext(ThemeContext)
    return(
        <div onClick={()=>{
            setThemaMode(themeMode === "light" ? "dark":"light")

        }}>

        <span >{themeMode === "light" ? "Turn OFF": " Light ON"}</span>
        

        </div>
    )


}

export default ThemaToggler