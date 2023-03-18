import React, { Component } from "react";
import './../../css/style.css';

export default class Input extends Component {

  render() {
    let {refName,refSeats} = this.props
    return (
      <div className="group-input">
        <label htmlFor="name">
          Your Name <span>*</span>
          <input id="name" ref={refName}></input>
        </label>
        <label htmlFor="seat">
          Number of seats <span>*</span>
          <input id="seat" type="number" ref={refSeats}></input>
        </label>
      </div>
    );
  }
}
