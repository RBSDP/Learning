import React,{useState} from "react";
import "./App.css"


function App(){

  const [count, setCount] = useState(0) //this is how we use the state
  return(
    <div className="App">

      <header>
        <h1>Counter app using State</h1>
      </header>
      <h2>
        Current value of count is {count}
      </h2>
      <button onClick={()=> setCount(0)}>Reset Counter</button>
      <button onClick={()=> setCount(count+1)}>Increase Counter</button>
      <button onClick={()=> setCount(count-1)}>Decrease Counter</button>
    </div>
  )
}
export default App;
