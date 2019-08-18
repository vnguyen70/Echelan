import React, { Component } from "react";
import '../../App.css';
import Event from './Event';

import bgImage from '../../Assets/EventBG.png';

class Events extends Component {
  constructor() {
    super();

    this.state = {
      props: {
        date: this.date,
        month: this.month,
        title: this.title,
        time: this.time, 
        location: this.location, 
        image: this.image
      }
    };
  }
  render() {
    return (
      <div>
        <h1 className="Events-header">UPCOMING EVENTS</h1>
        <div className="Events-general">
          <Event date={"08"} month={"JUNE"} title={"NEW ARTIST SHOWCASE"} time={"7:30PM - 10PM"} location={"@ SOB'S - 123 BROADWAY, NY"} image={bgImage}/>
          <Event date={"08"} month={"JUNE"} title={"NEW ARTIST SHOWCASE"} time={"7:30PM - 10PM"} location={"@ SOB'S - 123 BROADWAY, NY"} image={bgImage}/>
          <Event date={"08"} month={"JUNE"} title={"NEW ARTIST SHOWCASE"} time={"7:30PM - 10PM"} location={"@ SOB'S - 123 BROADWAY, NY"} image={bgImage}/>
          <Event date={"08"} month={"JUNE"} title={"NEW ARTIST SHOWCASE"} time={"7:30PM - 10PM"} location={"@ SOB'S - 123 BROADWAY, NY"} image={bgImage}/>
          <Event date={"08"} month={"JUNE"} title={"NEW ARTIST SHOWCASE"} time={"7:30PM - 10PM"} location={"@ SOB'S - 123 BROADWAY, NY"} image={bgImage}/>
          <Event date={"08"} month={"JUNE"} title={"NEW ARTIST SHOWCASE"} time={"7:30PM - 10PM"} location={"@ SOB'S - 123 BROADWAY, NY"} image={bgImage}/>
          <Event date={"08"} month={"JUNE"} title={"NEW ARTIST SHOWCASE"} time={"7:30PM - 10PM"} location={"@ SOB'S - 123 BROADWAY, NY"} image={bgImage}/>
          <Event date={"08"} month={"JUNE"} title={"NEW ARTIST SHOWCASE"} time={"7:30PM - 10PM"} location={"@ SOB'S - 123 BROADWAY, NY"} image={bgImage}/>
          <Event date={"08"} month={"JUNE"} title={"NEW ARTIST SHOWCASE"} time={"7:30PM - 10PM"} location={"@ SOB'S - 123 BROADWAY, NY"} image={bgImage}/>
        </div>
      </div>
      );
    }
}

export default Events;
