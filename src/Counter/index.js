import React, { Component } from "react";
import Child from "./Child";
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter: 0,
            lightTheme: true
        }
    }
    onIncrement=(counter)=>{
        this.setState({counter: counter+1});
    }
    onThemeChange=()=>{
        this.setState({lightTheme: !this.state.lightTheme})
    }
    render(){
        return <div className="counter">
            <div><h2>Counter: {this.state.counter}</h2>
            <button onClick={()=>this.onIncrement(this.state.counter)}>+</button></div>
            <Child onThemeChange={()=>this.onThemeChange()} theme={{light:this.state.lightTheme, className: this.state.lightTheme ? "light-theme" : "dark-theme"}} />
        </div>
    }
}

export default Counter;