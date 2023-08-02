import React,{useState} from "react";


import packageContext from './context'

const Provider = props => {

    const [mission,setMisssion] = useState({
        name : "go to russia",
        agent: 1007 ,
        accept :"not accepted"

    })
    return(
        <packageContext.Provider
        value={{
            data:mission,
            isMissionAccepted : ()=>{
                setMisssion({...mission,accept:'ACCEPTED'})
            }
        }}
        >
            {props.children}
        </packageContext.Provider>
    )
}

// Correct way to export the component
export default Provider;
