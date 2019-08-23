import React from 'react';

import '../../App.css';

class DetailedHeader extends React.Component {
  setView = page => {
    this.props.setView(page);
  }

  render() {
    return(
      <div>
        <div className="About-banner" style={{backgroundImage: "url(" + this.props.bannerImage + ")"}}>
          <p className="About-banner-text">{this.props.title}</p>
        </div>
        <div className="About-intro">
          <p className="About-intro-text">
            {this.props.description}
          </p>
        </div>
      </div>
    ); 
  }
}

export default DetailedHeader;