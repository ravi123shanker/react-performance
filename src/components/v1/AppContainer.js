import React, { Component } from "react";
import Counter from "./Counter";
import Theme from "./Theme";
class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      lightTheme: true,
    };
  }
  onIncrement = () => {
    const counter = this.state.counter;
    this.setState({ counter: counter + 1 });
  };
  onThemeChange = () => {
    this.setState({ lightTheme: !this.state.lightTheme });
  };
  render() {
    return (
      <div className="container">
        <Counter
          counter={this.state.counter}
          onIncrement={() => this.onIncrement()}
        />
        <Theme
          theme={{
            light: this.state.lightTheme,
            className: this.state.lightTheme ? "light-theme" : "dark-theme",
          }}
          onThemeChange={() => this.onThemeChange()}
        />
      </div>
    );
  }
}

export default AppContainer;
