import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Services from './Pages/Services';
import Talent from './Pages/Talent';
import ContactUs from './Pages/ContactUs';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home', 
      prevPage: 'home',
      showHome: true,
      showMenu: false, 
      showAbout: false, 
      showServices: false, 
      showTalent: false, 
      showContactUs: false, 
    };

    this.setPage = this.setPage.bind(this);
  }

  setPage(newPage) {
    console.log('setting view to ', newPage); 
    this.setState({
      prevPage: this.state.page,
      page: newPage,
      showHome: false,
      showMenu: false, 
      showAbout: false, 
      showServices: false, 
      showTalent: false, 
      showContactUs: false,
    });
    if(newPage === 'home') {
      this.setState({
        showHome: true, 
      });
    } else if(newPage === 'menu') {
      this.setState({
        showMenu: true, 
      });
    } else if(newPage === 'about') {
      this.setState({
        showAbout: true, 
      });
    } else if(newPage === 'services') {
      this.setState({
        showServices: true, 
      });
    } else if(newPage === 'talent') {
      this.setState({
        showTalent: true, 
      });
    } else if(newPage === 'contactus') {
      this.setState({
        showContactUs: true, 
      });
    }
    console.log(this.state);
  }
  
  render() {
    const showHome = this.state.showHome ? {} : {display: 'none'};
    const showMenu = this.state.showMenu ? {} : {display: 'none'};
    const showAbout = this.state.showAbout ? {} : {display: 'none'};
    const showServices = this.state.showServices ? {} : {display: 'none'};
    const showTalent = this.state.showTalent ? {} : {display: 'none'};
    const showContactUs = this.state.showContactUs ? {} : {display: 'none'};

    return (
      <Router>
        <div>
          {/* {this.displayView()} */}
          <div style={showHome}>
            <Home setPage={this.setPage}/> 
          </div>
          <div style={showMenu}>
            <Menu setPage={this.setPage} prevPage={this.state.prevPage}/> 
          </div> 
          <div style={showAbout}>
            <About setPage={this.setPage} /> 
          </div> 
          <div style={showServices}>
            <Services setPage={this.setPage} /> 
          </div> 
          <div style={showTalent}>
            <Talent setPage={this.setPage} /> 
          </div> 
          <div style={showContactUs}>
            <ContactUs setPage={this.setPage} /> 
          </div> 

          {/* <Route exact path="/" component={Home} />
          <Route path="/menu" component={Menu} /> */}
        </div>
      </Router>      
    );
  }
}



export default App;
