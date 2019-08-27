import React from 'react';
import '../App.css';

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import LogoIcon from '../Assets/Header Branding.svg';
import MenuIcon from '../Assets/Menu.svg';

import ContactBanner from '../Assets/ContactBanner.png';

import Contacts from '../Components/Contacts/Contacts';

class ContactUs extends React.Component {
  setView = page => {
    this.props.setView(page);
  }

  render() {
    return(
      <div>
        <Header prevPage={"contactus"} page={'menu'} setPage={this.props.setPage} logoIcon = {LogoIcon} menuIcon = {MenuIcon}/>
        <div className="About-banner" style={{backgroundImage: "url(" + ContactBanner + ")"}}>
          <p className="About-banner-text">HIT US UP!</p>
        </div>
        <Contacts  fontColor = "#707070" bgColor = "#FFFFFF" marginTop = "0vh"/>
        <div style={{marginBottom: "20vh"}}/>
        <Footer setPage={this.props.setPage}/>
      </div>
    ); 
  }
}

export default ContactUs;