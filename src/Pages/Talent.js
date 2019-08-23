import React from 'react';

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import LogoIcon from '../Assets/Header Branding.svg';
import MenuIcon from '../Assets/Menu.svg';

import Instagram from '../Assets/Instagram_Reverse.svg';
import Twitter from '../Assets/Twitter_Reverse.svg';
import Facebook from '../Assets/Facebook_Reverse.svg';
import Web from '../Assets/web_Reverse.svg';

import TalentBanner from '../Assets/TalentBanner.png';

import '../App.css';

import DetailedHeader from '../Components/Detailed/DetailedHeader';
import DetailedContact from '../Components/Detailed/DetailedContact';

class Talent extends React.Component {
  setView = page => {
    this.props.setView(page);
  }

  render() {
    return(
      <div>
        <Header prevPage={"talent"} page={'menu'} setPage={this.props.setPage} logoIcon = {LogoIcon} menuIcon = {MenuIcon}/>
        <DetailedHeader 
          title="WE WORK WITH AMAZING TALENT"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"
          bannerImage={TalentBanner}
        />
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
        <DetailedContact setPage={this.props.setPage}/>
        <Footer setPage={this.props.setPage}/>
      </div>
    ); 
  }
}

export default Talent;