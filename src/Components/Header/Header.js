import React from 'react';

import '../../App.css';

class Header extends React.Component {

  createHeader() {
    return (
      <div className="Header">
        <header className="Header-header">
          <img src={this.props.logoIcon} className="Header-logo" alt="logo" onClick={() => this.props.setPage('home')}/>
          <img prevPage={this.props.prevPage} src={this.props.menuIcon} className="Header-menu" alt="menu" onClick={() => this.props.setPage(this.props.page)}/> 
        </header>
      </div>
    );
  }

  render() {
    return(
      <div>
        {this.createHeader()}
      </div>
    
    ); 
  }
}

export default Header;