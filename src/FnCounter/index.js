import React, { useState } from "react";
import Child from "./Child";
const FnCounter = (props) => {
  const [counter, setCounter] = useState(0);
  const [lightTheme, setLighTheme] = useState(true);
  const onIncrement = () => {
    setCounter(counter + 1 );
  };
  const onThemeChange = () => {
    setLighTheme(!lightTheme);
  };
  return (
    <div className="counter">
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={onIncrement}>+</button>
      </div>
      <Child
        onThemeChange={onThemeChange}
        theme={{
          light: lightTheme,
          className: lightTheme ? "light-theme" : "dark-theme",
        }}
      />
    </div>
  );
};

export default FnCounter;
