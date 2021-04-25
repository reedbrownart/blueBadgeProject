import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Display from './components/display/Display';
import Hero from "./components/display/market/Hero";
import Grid from "./components/display/market/Grid"
import style from './App.css';


function App(props) {

  const [isMarket, setIsMarket] = useState(true);
  const [isMyStore, setIsMyStore] = useState(false);

  return (
    <div className="App">
      <Navbar 
        setIsMarket = {setIsMarket}
        setIsMyStore = {setIsMyStore}/>
      <Display 
        isMarket = {isMarket} 
        isMyStore = {isMyStore} />
      {/* <Hero /> is this the correct place for this?}
      {/* <Grid /> need to know where to place this?*/} 

    </div>
  );
}

export default App;

//Testing-Denea