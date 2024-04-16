import React, { Component } from "react";

export default class EvenCounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>Even Displayer: {this.props.even}</p>
      </div>
    );
  }
}
