import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import '../../App.css';

import About from '../../Pages/About';
import Menu from '../../Pages/Menu';
import Services from '../../Pages/Services';
import Talent from '../../Pages/Talent';
import ContactUs from '../../Pages/ContactUs';


class Header extends React.Component {
  setView = page => {
    this.props.setView(page);
  }

  createHeader() {
    return (
      <Router>
        <div className="Header">
          <header className="Header-header">
            <img src={this.props.logoIcon} className="Header-logo" alt="logo" />
            <Link to="/about">
              <img src={this.props.menuIcon} className="Header-menu" alt="menu" /> 
            </Link>
          </header>
          <div>
              <Route path="/about" component={ContactUs} />
          </div>
        </div>
      </Router>
    );
  }

  render() {
    return(
      <div>
        {this.createHeader()}
      </div>
    
    ); 
  }
}

export default Header;