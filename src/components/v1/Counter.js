import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { counter, onIncrement } = this.props;
    return (
      <div className="counter">
          <h2>Counter: {counter}</h2>
          <button onClick={onIncrement}>
            +
          </button>
        </div>
    );
  }
}

export default Counter;
