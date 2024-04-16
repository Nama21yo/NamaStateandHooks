import React, { Component } from "react";

export default class OddCounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>Odd Displayer: {this.props.odd}</p>
      </div>
    );
  }
}
