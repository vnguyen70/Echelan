import React from 'react';

import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'

import LogoIcon from '../Assets/Header Branding.svg';
import MenuIcon from '../Assets/Menu.svg';

import ServiceBanner from '../Assets/ServiceBanner.png';

import '../App.css';

import DetailedHeader from '../Components/Detailed/DetailedHeader';
import DetailedContact from '../Components/Detailed/DetailedContact';

class Services extends React.Component {
  setView = page => {
    this.props.setView(page);
  }

  render() {
    return(
      <div>
        <Header prevPage={"services"} page={'menu'} setPage={this.props.setPage} logoIcon = {LogoIcon} menuIcon = {MenuIcon}/>
        <DetailedHeader 
          title="WE CREATE."
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,"
          bannerImage={ServiceBanner}
        />
        <div className="Services-general">
          <div className="Services-row">
            <div className="Services-img"/>
            <div className="Services-description-div">
              <p className="Service-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
            </div>
          </div>
          <div className="Services-row">
            <div className="Services-description-div">
              <p className="Service-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
            </div>
            <div className="Services-img"/>
          </div>
          <div className="Services-row">
            <div className="Services-img"/>
            <div className="Services-description-div">
              <p className="Service-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
            </div>
          </div>
          <div className="Services-row">
            <div className="Services-description-div">
              <p className="Service-description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et</p>
            </div>
            <div className="Services-img"/>
          </div>
        </div>
        <DetailedContact setPage={this.props.setPage}/>
        <Footer setPage={this.props.setPage}/>
      </div>
    ); 
  }
}

export default Services;