import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Display from './components/display/Display';
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
    </div>
  );
}

export default App;

//Testing-Denea