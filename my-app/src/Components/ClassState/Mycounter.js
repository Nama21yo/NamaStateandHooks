import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";

export default class Mycounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    // this.allClicksCounter = this.allClicksCounter.bind(this);//binding and the console
  }

  allClicksCounter = () => {
    // binding with arrow function
    // this.setState({
    //   count: this.state.count + 1,
    // });
    //Using CallBack Function
    this.setState((plus) => {
      return { count: plus.count + 1 };
    });
  };
  decrement = () => {
    this.setState((prevState) => {
      {
        count: prevState.count - 1;
      }
    });
  };
  reset = () => {
    this.setState(() => {
      {
        count: 100;
      }
    });
  };

  render() {
    return (
      <div>
        <div>Counter</div>
        <h2>{this.state.count}</h2>
        <CounterDisplayer increment={this.allClicksCounter} />
        <button onClick={this.decrement}>decrement by 1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}
