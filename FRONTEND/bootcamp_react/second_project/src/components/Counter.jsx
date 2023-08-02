import { useState } from "react"


function Counter() {

    let [count,setCount] = useState(5)

  return (
    <>
    <div>Counter Value {count}</div>
    <button onClick={()=>(setCount(0))}>Reset Counter</button>
    <button onClick={()=>{
        return count > 10 ? "" : setCount(count+1)
    }} >Increase Counter - {count}</button>
    <button onClick={()=>(setCount(count-1))}>Decrease Counter</button>
    </>
      
    
  )
}

export default Counter
