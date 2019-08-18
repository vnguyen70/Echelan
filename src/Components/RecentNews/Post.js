import React, { Component } from "react";
import '../../App.css';

class Post extends Component {
  render() {
    return (
      <div className="Post-content">
        <div className="Post-image"/>
        <p className="Post-category">{this.props.category}</p>
        <p className="Post-title">{this.props.title}</p>
        <p className="Post-description">{this.props.description}</p>
        <button className="Post-button">READ MORE</button>
      </div>
    );  
  }
}

export default Post;
