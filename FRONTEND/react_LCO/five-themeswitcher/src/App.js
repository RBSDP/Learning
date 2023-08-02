import React,{useState} from 'react';

import './App.css';
import ThemeContext from './context/ThemaContext';
import Header from '../src/components/Header'
import HeroSection from './components/HeroSection';
function App() {
  const themeHook = useState('light')
  return(
    <ThemeContext.Provider value={themeHook}>
        <div>
          <Header/>
           
          <HeroSection/>
        </div>
    </ThemeContext.Provider>
  )
}

export default App;
