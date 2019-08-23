import React from 'react';
import '../App.css';

import LogoIcon from '../Assets/Header Branding_Reverse.svg';
import CancelIcon from '../Assets/Cancel.svg';

import Header from '../Components/Header/Header';

class Menu extends React.Component {
  render() {
    return (
      <div className="App">
        <Header page={this.props.prevPage} setPage={this.props.setPage} logoIcon = {LogoIcon} menuIcon = {CancelIcon}/>
        <div className="Menu-general">
          <p className="Menu-label" onClick={() => this.props.setPage('about')}>WHO WE ARE</p>
          <p className="Menu-label" onClick={() => this.props.setPage('services')}>WHAT WE DO</p>
          <p className="Menu-label" onClick={() => this.props.setPage('talent')}>WHO WE WORK WITH</p>
          <p className="Menu-label">EVENTS</p>
          <p className="Menu-label" onClick={() => this.props.setPage('contactus')}>HIT US UP</p>
        </div>
      </div>
    );
  }
}

export default Menu;
