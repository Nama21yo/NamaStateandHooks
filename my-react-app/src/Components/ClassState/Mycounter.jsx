import React, { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
import OddCounterDisplayer from "./OddCounterDisplayer";

export default class Mycounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 100,
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
  // evenClicks() {
  //   this.setState((evens) => {
  //     return { count: evens % 2 == 0 ? evens : evens - 1 };
  //   });
  // }
  decrement = () => {
    this.setState((prevState) => {
      {
        return { count: prevState.count - 1 };
      }
    });
  };
  reset = () => {
    this.setState(() => {
      {
        return { count: 100 };
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Counter Using States in Class Component</h2>
        <h2>{this.state.count}</h2>
        <h2>
          <EvenCounterDisplayer
            even={
              this.state.count % 2 == 0
                ? this.state.count
                : this.state.count - 1
            }
          />
          <OddCounterDisplayer
            odd={
              this.state.count % 2 == 0
                ? this.state.count - 1
                : this.state.count
            }
          />
        </h2>
        <div className="flex">
          <CounterDisplayer increment={this.allClicksCounter} class="green" />
          <button onClick={this.decrement} className="green">
            decrement by 1
          </button>
          <button onClick={this.reset} className="red">
            Reset
          </button>
        </div>
      </div>
    );
  }
}
