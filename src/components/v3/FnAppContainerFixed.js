import React, { useCallback, useState } from "react";
import Counter from "./Counter";
import Child from "./Theme";
const FnAppContainerFixed = (props) => {
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
    <div className="container">
      <Counter counter={counter} onIncrement={onIncrement} />
      <Child onThemeChange={onThemeChange} theme={theme} />
    </div>
  );
};

export default FnAppContainerFixed;
