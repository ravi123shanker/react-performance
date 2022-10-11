import React, { Component } from "react";
import Counter from "./Counter";
import Theme from "./Theme";
class AppContainerFixed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      theme: {
        light: true,
        className: "light-theme",
      },
    };
  }
  onIncrement = () => {
    const counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  };
  onThemeChange = () => {
    const { theme } = this.state;
    this.setState({
      theme: {
        light: !theme.light,
        className: !theme.light ? "light-theme" : "dark-theme",
      },
    });
  };
  render() {
    return (
      <div className="container">
        <Counter counter={this.state.counter} onIncrement={this.onIncrement} />
        <Theme theme={this.state.theme} onThemeChange={this.onThemeChange} />
      </div>
    );
  }
}

export default AppContainerFixed;
