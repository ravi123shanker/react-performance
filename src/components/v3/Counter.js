import React from "react";
const Counter = ({ counter, onIncrement }) => {
  return (
    <div className="counter">
      <h2>Counter: {counter}</h2>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};

export default Counter;
