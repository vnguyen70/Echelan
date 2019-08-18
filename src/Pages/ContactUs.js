import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from '../Components/Footer/Footer'

import LogoIcon from '../Assets/Header Branding.svg';
import MenuIcon from '../Assets/Menu.svg';

import ContactBanner from '../Assets/ContactBanner.png';

import '../App.css';

import Home from '../Pages/Home';

import Contacts from '../Components/Contacts/Contacts';

class ContactUs extends React.Component {
  setView = page => {
    this.props.setView(page);
  }

  render() {
    return(
      <div>
        <Router>
          <div className="Header">
            <header className="Header-header">
              <img src={LogoIcon} className="Header-logo" alt="logo" />
              <Link to="/">
                <img src={MenuIcon} className="Header-menu" alt="menu" /> 
              </Link>
            </header>
            <div>
                <Route exact path="/" component={Home} />
            </div>
          </div>
        </Router>
        <div className="About-banner" style={{backgroundImage: "url(" + ContactBanner + ")"}}>
          <p className="About-banner-text">HIT US UP!</p>
        </div>
        <Contacts  fontColor = "#707070" bgColor = "#FFFFFF" marginTop = "0vh"/>
        <div style={{marginBottom: "20vh"}}/>
        <Footer/>
      </div>
    ); 
  }
}

export default ContactUs;