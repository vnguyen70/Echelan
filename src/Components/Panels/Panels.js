import React, { Component } from "react";
import panel1 from '../../Assets/PanelBG_1.png';
import panel2 from '../../Assets/PanelBG_2.png';
import panel3 from '../../Assets/PanelBG_3.png';
import '../../App.css';
import Panel from './Panel';

class Panels extends Component {
  constructor() {
    super();

    this.state = {
      props: {
        title: this.title,
        color: this.color, 
        image: this.image
      }
    };
  }
  
  render() {
    return (
      <div className="Panels-general">
        <Panel title={"WHO WE ARE"} color={"#F2F2F2"} image={panel1} lineWidth={"18vh"} setPage={this.props.setPage} page="about"/>
        <Panel title={"WHAT WE DO"} color={"#E6E6E6"} image={panel2} lineWidth={"18vh"} setPage={this.props.setPage} page="services"/>
        <Panel title={"WHO WE WORK WITH"} color={"#F2F2F2"} image={panel3} lineWidth={"27vh"} setPage={this.props.setPage} page="talent"/>
      </div>
      );
    }
}

export default Panels;
