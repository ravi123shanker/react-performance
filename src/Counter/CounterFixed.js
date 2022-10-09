import React, { Component } from "react";
import Child from "./Child";
class CounterFixed extends Component{
    constructor(props){
        super(props);
        this.state={
            counter: 0,
            theme: {
                light: true,
                className: "light-theme"
            }
        }
    }
    onIncrement=()=>{
        this.setState({counter: this.state.counter+1});
    }
    onThemeChange=()=>{
        const {theme}=this.state
        this.setState({theme: {light: !theme.light, className: !theme.light ? "light-theme" : "dark-theme"}})
    }
    render(){
        return <div className="counter">
            <div><h2>Counter: {this.state.counter}</h2>
            <button onClick={this.onIncrement}>+</button></div>
            <Child onThemeChange={this.onThemeChange} theme={this.state.theme} />
        </div>
    }
}

export default CounterFixed;