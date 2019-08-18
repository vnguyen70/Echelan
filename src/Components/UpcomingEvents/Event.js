import React, { Component } from "react";
import '../../App.css';

class Event extends Component {
  render() {
    return (
      <div className="Event-content" style={{backgroundImage: "url(" + this.props.image + ")"}}>
        <p className="Event-date">{this.props.date}</p>
        <p className="Event-month">{this.props.month}</p>
        <p className="Event-title">{this.props.title}</p>
        <p className="Event-time">{this.props.time}</p>
        <p className="Event-location">{this.props.location}</p>
      </div>
    );  
  }
}

export default Event;
