import React, { useState } from "react";
import Counter from "./Counter";
import Theme from "./Theme";
const FnAppContainer = (props) => {
  const [counter, setCounter] = useState(0);
  const [lightTheme, setLighTheme] = useState(true);
  const onIncrement = () => {
    setCounter(counter + 1);
  };
  const onThemeChange = () => {
    setLighTheme(!lightTheme);
  };
  return (
    <div className="container">
      <Counter counter={counter} onIncrement={onIncrement} />
      <Theme
        theme={{
          light: lightTheme,
          className: lightTheme ? "light-theme" : "dark-theme",
        }}
        onThemeChange={onThemeChange}
      />
    </div>
  );
};

export default FnAppContainer;
