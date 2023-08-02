import React, { useState } from 'react'
import './App.css';

function App() {
  const [brandname] = useState('amazon')
  return (
    <div>
      <h1>hrllo world</h1>
     
      <Grandchild brand = {brandname}/>
    </div>
  );
}

function Child(props) {
  return (
    <div>
      <h1>child {props.name}</h1>
    </div>
  );
}

function Grandchild(props){
  return(
    <div>
      <h1> i am grand child</h1>
      <Child name = {props.brand}/>
      
    </div>
  )
}

export default App;
