import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Display from './components/display/Display';
import style from './App.css';


function App(props) {

  const [isMarket, setIsMarket] = useState(true);
  const [isMyStore, setIsMyStore] = useState(false);
  const [sessionToken, setSessionToken] = useState("");
  
  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(localStorage.getItem("token"))
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  return (
    <div className="App">
      <Navbar 
        setIsMarket = {setIsMarket}
        setIsMyStore = {setIsMyStore}
        updateToken = {updateToken}
        clearToken = {clearToken}
        token = {sessionToken}/>
      <Display 
        isMarket = {isMarket} 
        isMyStore = {isMyStore}
        updateToken = {updateToken}
        token = {sessionToken} />
    </div>
  );
}

export default App;