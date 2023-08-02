import React,{Fragment} from "react";
import Provider from './provider'; 


import Context from "./context";


const Agents = () =>{
  return <AgentOne/>
}

const AgentOne =() =>{
  return <AgentTwo/>
}


const AgentTwo = () =>{
  return <AgentBond/>
}

const AgentBond = () =>{
  return(
    <Context.Consumer>
      {
        (context) => (
          <Fragment>
          {/* here we can either use div or fragment our wish */}

            <h3>Agent information</h3>
            <p>Mission name : {context.data.name}</p>
            <h2>mission status :{context.data.accept}</h2>
            <button onClick={context.isMissionAccepted}>
              Choose to accept
            </button>

          </Fragment>
        )
      }
    </Context.Consumer>
  ) 
}


const App = () =>{
  return(
    <div>
      <h1>Context API</h1>
      {/* if  we want any element to use the provider values we must wrap then in proviser element  as shown below*/}
      <Provider>
        <Agents/>
      </Provider>
    </div>
  )
}

export default App