import React from 'react';

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import LogoIcon from '../Assets/Header Branding.svg';
import MenuIcon from '../Assets/Menu.svg';

import Instagram from '../Assets/Instagram_Reverse.svg';
import Twitter from '../Assets/Twitter_Reverse.svg';
import Facebook from '../Assets/Facebook_Reverse.svg';

import AboutBanner from '../Assets/AboutBanner.png';
import Tyhiem from '../Assets/About_Tyhiem.png';

import '../App.css';

import DetailedHeader from '../Components/Detailed/DetailedHeader';
import DetailedContact from '../Components/Detailed/DetailedContact';

class About extends React.Component {
  setView = page => {
    this.props.setView(page);
  }

  render() {
    return(
      <div>
        <Header prevPage={"about"} page={'menu'} setPage={this.props.setPage} logoIcon = {LogoIcon} menuIcon = {MenuIcon}/>
        <DetailedHeader 
          title="WE ARE A DIFFERENT TYPE OF MUSIC COMPANY"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"
          bannerImage={AboutBanner}
        />
        <div className="About-team">
          <img src={Tyhiem} className="About-team-member-image"/>
          <div className="About-team-member-general">
            <p className="About-team-member-name">TYHIEM CANNON</p>
            <p className="About-team-member-title">FOUNDER</p>
            <div className="About-team-member-social">
              <img src={Instagram} className="About-social-icon" alt="Instagram logo" />
              <img src={Twitter} className="About-social-icon" alt="Twitter logo" />
              <img src={Facebook} className="About-social-icon" alt="Facebook logo" />
            </div>
            <p className="About-team-member-bio">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
            <p className="About-team-member-experience">EXPERIENCE</p>
            <div className="About-team-member-experience-list">
              <p className="About-team-member-experience-item">Lorem-ipsum</p>
              <p className="About-team-member-experience-item">Lorem-ipsum</p>
              <p className="About-team-member-experience-item">Lorem-ipsum</p>
              <p className="About-team-member-experience-item">Lorem-ipsum</p>
              <p className="About-team-member-experience-item">Lorem-ipsum</p>
              <p className="About-team-member-experience-item">Lorem-ipsum</p>
              <p className="About-team-member-experience-item">Lorem-ipsum</p>
              <p className="About-team-member-experience-item">Lorem-ipsum</p>
            </div>
          </div>
        </div>
        <DetailedContact setPage={this.props.setPage}/>
        <Footer setPage={this.props.setPage}/>
      </div>
    ); 
  }
}

export default About;