import React from 'react';
import '../App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import LogoIcon from '../Assets/Header Branding_Reverse.svg';
import CancelIcon from '../Assets/Cancel.svg';

import Home from '../Pages/Home';

class Menu extends React.Component {
  render() {
    return (
      <div className="App">
        {<Router>
          <div className="Header">
            <header className="Header-header">
              <img src={LogoIcon} className="Header-logo" alt="logo" /> 
              <Link to="/">
                <img src={CancelIcon} className="Header-menu" alt="menu" /> 
              </Link>
            </header>
            <div>
                <Route exact path="/" component={Home} />
            </div>
          </div>
        </Router>}
        <div className="Menu-general">
          <p className="Menu-label">WHO WE ARE</p>
          <p className="Menu-label">WHAT WE DO</p>
          <p className="Menu-label">WHO WE WORK WITH</p>
          <p className="Menu-label">EVENTS</p>
          <p className="Menu-label">HIT US UP</p>
        </div>
      </div>
    );
  }
}

export default Menu;
