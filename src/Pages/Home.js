import React from 'react';
import '../App.css';

import Header from '../Components/Header/Header';
import Panels from '../Components/Panels/Panels';
import Posts from '../Components/RecentNews/Posts';
import Events from '../Components/UpcomingEvents/Events';
import Contacts from '../Components/Contacts/Contacts';
import Footer from '../Components/Footer/Footer';

import LogoIcon from '../Assets/Header Branding.svg';
import MenuIcon from '../Assets/Menu.svg';

class Home extends React.Component {
  render(){
    return (
      <div className="App">
       <Header setView = {this.props.setView} logoIcon = {LogoIcon} menuIcon = {MenuIcon}/>
       <Panels/>
       <Posts/>
       <Events/>
       <Contacts fontColor = "#FFFFFF" bgColor = "#4E00E2" marginTop = "25vh"/>
       <Footer/>
      </div>
    );
  }
}

export default Home;
