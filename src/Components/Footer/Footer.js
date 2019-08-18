import React from 'react';
import Logo from '../../Assets/Footer Branding.svg';
import Instagram from '../../Assets/Instagram.svg';
import Twitter from '../../Assets/Twitter.svg';
import Facebook from '../../Assets/Facebook.svg';
import Web from '../../Assets/web.svg';
import '../../App.css';

function Footer() {
  return (
    <div className="Footer-general">
      <header className="Footer-footer">
        <img src={Logo} className="Footer-logo" alt="logo" />
        <div style={{display: "flex", flexDirection:"row"}}>
          <div className="Footer-text-div">
            <p className="Footer-text">WHO WE ARE</p>
            <p className="Footer-text">WHAT WE DO</p>
            <p className="Footer-text">WHO WE WORK WITH</p>
          </div>
          <div className="Footer-icons-div">
            <img src={Instagram} className="Footer-icon" alt="Instagram logo" />
            <img src={Twitter} className="Footer-icon" alt="Twitter logo" />
            <img src={Facebook} className="Footer-icon" alt="Facebook logo" />
            <img src={Web} className="Footer-icon" alt="Web logo" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Footer;
