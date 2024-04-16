import React, { Component } from "react";

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.increment}>Increment by 1</button>
      </div>
    );
  }
}
