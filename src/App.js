import React from 'react';
import './App.css';

import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';
import Services from './Pages/Services';
import Talent from './Pages/Talent';
import ContactUs from './Pages/ContactUs';

const history = createBrowserHistory(); 

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 'home', 
      prevPage: 'home',
    };

    this.setPage = this.setPage.bind(this);
  }

  setPage(newPage) {
    console.log(this.state);
    if(newPage==='home') {
      history.push('/'); 
    } else {
      history.push('/' + newPage); 
    }
  
    this.setState({
      page: newPage,  
    });

    window.location.reload(false);
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" render={ (props) => <Home setPage={this.setPage}/> } />
          <Route path="/menu" render={ (props) => <Menu setPage={this.setPage} prevPage={this.state.prevPage}/> } />
          <Route path="/about" render={ (props) => <About setPage={this.setPage} /> } />
          <Route path="/services" render={ (props) => <Services setPage={this.setPage} /> } />
          <Route path="/talent" render={ (props) => <Talent setPage={this.setPage} /> } />
          <Route path="/contactus" render={ (props) => <ContactUs setPage={this.setPage} /> } />
        </div>
      </Router>      
    );
  }
}

export default App;
