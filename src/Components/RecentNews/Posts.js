import React, { Component } from "react";
import '../../App.css';
import Post from './Post';

class Posts extends Component {
  constructor() {
    super();

    this.state = {
      props: {
        category: this.category,
        title: this.title, 
        description: this.description, 
      }
    };
  }
  render() {
    return (
      <div>
        <h1 className="Posts-header">RECENT NEWS</h1>
        <div className="Posts-general">
          <Post category={"CATEGORY"} title={"THIS IS A SAMPLE POST TITLE"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. cum sociis natoque penatibus et"}/>
          <Post category={"CATEGORY"} title={"THIS IS A SAMPLE POST TITLE"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. cum sociis natoque penatibus et"}/>
          <Post category={"CATEGORY"} title={"THIS IS A SAMPLE POST TITLE"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. cum sociis natoque penatibus et"}/>
        </div>
        <button className="Posts-button">SEE MORE NEWS</button>
      </div>
      );
    }
}

export default Posts;
