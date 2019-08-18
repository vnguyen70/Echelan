import React, { Component } from "react";
import '../../App.css';
import Contact from './Contact';

class Contacts extends Component {
  constructor() {
    super();

    this.state = {
      props: {
        title: this.title,
        hint: this.hint
      }
    };
  }
  render() {
    return (
      <div className="Contact-general" style={{backgroundColor: this.props.bgColor, marginTop: this.props.marginTop}}>
        <h1 className="Contact-header" style={{color: this.props.fontColor}}>LET'S WORK!</h1>
        <div className="Contact-form">
          <div className="Contact-row">
            <Contact title={"FULL NAME"} hint={"John Doe"} fontColor = {this.props.fontColor}/>
            <Contact title={"EMAIL"} hint={"Johndoe@persona.com"} fontColor = {this.props.fontColor}/>
          </div>
          <div className="Contact-row">
            <div className="Contact-item">
              <p className="Contact-title" style={{color: this.props.fontColor}}>SUBJECT</p>
              <select className="Contact-select">
                <option  value="Music Submission">Music Selection</option>
              </select>
            </div>
          </div>
          <div className="Contact-row">
            <div className="Contact-item">
              <p className="Contact-title" style={{color: this.props.fontColor}}>LINK TO MUSIC</p>
              <input type="text" className="Contact-single"/>
            </div>
          </div>
          <div className="Contact-row">
            <Contact title={"INSTAGRAM"} hint={"@johndoe"} fontColor = {this.props.fontColor}/>
            <Contact title={"TWITTER"} hint={"@johndoe"} fontColor = {this.props.fontColor}/>
          </div>
          <div className="Contact-row">
            <div className="Contact-item">
              <p className="Contact-title" style={{color: this.props.fontColor}}>MESSAGE</p>
              <input type="text" className="Contact-message"/>
            </div>
          </div>
          <button className="Contact-button">SUBMIT</button>
        </div>
      </div>
      );
    }
}

export default Contacts;
