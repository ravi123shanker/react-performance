import React, { useCallback, useState } from "react";
import Child from "./Child";
const FnCounterFixed = (props) => {
  const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState({ light: true, className: "light-theme" });
  const onIncrement = useCallback(() => {
    setCounter(counter + 1);
  }, []);
  const onThemeChange = useCallback(() => {
    setTheme({
      light: !theme.light,
      className: !theme.light ? "light-theme" : "dark-theme",
    });
  }, []);

  return (
    <div className="counter">
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={onIncrement}>+</button>
      </div>
      <Child onThemeChange={onThemeChange} theme={theme} />
    </div>
  );
};

export default FnCounterFixed;
