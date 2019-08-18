import React, { Component } from "react";
import '../../App.css';

class Panel extends Component {
  render() {
    return (
      <div className="Panels-panel" style={{backgroundImage: "url(" + this.props.image + ")"}}> 
        <p className="Panels-label">{this.props.title}</p>
        <div className="Underline"/>
      </div>
    );  
  }
}

export default Panel;