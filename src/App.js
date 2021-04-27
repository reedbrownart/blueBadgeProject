import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Display from './components/display/Display';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import style from './App.css';


function App(props) {

  const [isMarket, setIsMarket] = useState(true);
  const [isMyStore, setIsMyStore] = useState(false);
  const [sessionToken, setSessionToken] = useState("");
  
  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setSessionToken(localStorage.getItem("token"))
  }

  return (
    <div className="App">
      <Navbar 
        setIsMarket = {setIsMarket}
        setIsMyStore = {setIsMyStore}/>
      <Display 
        isMarket = {isMarket} 
        isMyStore = {isMyStore}
        updateToken = {updateToken} />
    </div>
  );
}

export default App;
