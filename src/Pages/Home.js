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
  constructor(props) {
    super(props);

    this.state = {page: this.props.page};
  }

  render(){
    return (
      <div className="App">
        <Header prevPage={'home'} page={'menu'} setPage={this.props.setPage} logoIcon = {LogoIcon} menuIcon = {MenuIcon}/>
        <Panels setPage={this.props.setPage} />
        <Posts/>
        <Events/>
        <Contacts fontColor = "#FFFFFF" bgColor = "#4E00E2" marginTop = "25vh"/>
        <Footer setPage={this.props.setPage}/>
      </div>
    );
  }
}

export default Home;
