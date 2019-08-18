import React, { Component } from "react";
import '../../App.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact-item">
        <p className="Contact-title" style={{color: this.props.fontColor}}>{this.props.title}</p>
        <input type="text" className="Contact-field" placeholder={this.props.hint}/>
      </div>
      );
    }
}

export default Contact;
