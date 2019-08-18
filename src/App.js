import React from 'react';
import './App.css';

import Header from './Components/Header/Header';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LogoIcon from './Assets/Header Branding.svg';
import MenuIcon from './Assets/Menu.svg';

import Home from './Pages/Home';
import Menu from './Pages/Menu';
import About from './Pages/About';


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {currPage: 'home'};

      // this.setView.bind(this);
  }

  setView = page => {
    this.setState({currPage: page});
  }


  displayView = page => {
    switch(page) {
      case 'home':
        return (
          <div>
            <Home setView = {this.setView}/>
          </div>
        );
      case 'menu': 
        return <Menu/>;
      default: 
        return <Home/>;
    }
  }
  
  render() {
    return (
      <div>
        {this.displayView(this.state.currPage)}
      </div>
    );
  }

}



export default App;
