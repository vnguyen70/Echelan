import React from 'react';

import '../../App.css';

class DetailedContact extends React.Component {
  setView = page => {
    this.props.setView(page);
  }

  render() {
    return(
      <div>
        <div>
          <h1 className="About-CTA">LET'S WORK!</h1>
          <button className="About-button" onClick={() => this.props.setPage('contactus')}>HIT US UP!</button>
        </div>
      </div>
    ); 
  }
}

export default DetailedContact;