import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Footer from '../Components/Footer/Footer'

import LogoIcon from '../Assets/Header Branding.svg';
import MenuIcon from '../Assets/Menu.svg';

import Instagram from '../Assets/Instagram_Reverse.svg';
import Twitter from '../Assets/Twitter_Reverse.svg';
import Facebook from '../Assets/Facebook_Reverse.svg';
import Web from '../Assets/web_Reverse.svg';

import TalentBanner from '../Assets/TalentBanner.png';

import '../App.css';

import Home from '../Pages/Home';

class Talent extends React.Component {
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
        <div className="About-banner" style={{backgroundImage: "url(" + TalentBanner + ")"}}>
          <p className="About-banner-text">WE WORK WITH AMAZING TALENT</p>
        </div>
        <div className="About-intro">
          <p className="About-intro-text">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
          </p>
        </div>
        <div className="Talent-general">
          <div className="Talent-panel">
            <p className="Talent-name">ARTIST NAME</p>
            <p className="Talent-title">SONGWRITER</p>
            <div className="Talent-social">
              <img src={Instagram} className="Talent-social-icon" alt="Instagram logo" />
              <img src={Twitter} className="Talent-social-icon" alt="Twitter logo" />
              <img src={Facebook} className="Talent-social-icon" alt="Facebook logo" />
              <img src={Web} className="Talent-social-icon" alt="Web logo" />
            </div>
          </div>
          <div className="Talent-panel">
            <p className="Talent-name">ARTIST NAME</p>
            <p className="Talent-title">SONGWRITER</p>
            <div className="Talent-social">
              <img src={Instagram} className="Talent-social-icon" alt="Instagram logo" />
              <img src={Twitter} className="Talent-social-icon" alt="Twitter logo" />
              <img src={Facebook} className="Talent-social-icon" alt="Facebook logo" />
              <img src={Web} className="Talent-social-icon" alt="Web logo" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="About-CTA">LET'S WORK!</h1>
          <button className="About-button">HIT US UP!</button>
        </div>
        <Footer/>
      </div>
    ); 
  }
}

export default Talent;