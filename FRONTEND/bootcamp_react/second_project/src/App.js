
import './App.css';
import Card from './components/Card';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Counter from './components/Counter';
import axios from "axios";


import { useEffect, useState } from 'react';

function App() {


  let [details,setdetails] = useState({})

  const fetchdetails = async ()=>{
    const {data} = await axios.get("https://randomuser.me/api/")
    let cont= data.results[0]
    setdetails(cont)
  }

  useEffect(()=>{
    fetchdetails()
  },[])


  return (
    <div className="App">
      <Counter/>
    
    </div>
  );
}

export default App;
