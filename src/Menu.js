import React from 'react';
import { Route, Link } from 'react-router-dom'

import './App.css';
import App from './App';

import Header from './Components/Header/Header';

function Menu() {
  return (
    <div className="App">
     <Header/>
     <div className="Menu-links">
      <p>WHO WE ARE</p>
      <p>WHAT WE DO</p>
      <p>WHO WE WORK WITH</p>
      <p>EVENTS</p>
      <p>HIT US UP!</p>
     </div>
    </div>
  );
}

export default Menu;
