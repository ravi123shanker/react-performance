import React, { Component } from "react";
class Child extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {theme, onThemeChange}=this.props;
        return <div className={`${theme.className}`}>
            <h2>Child</h2>
            <button onClick={onThemeChange}>Change Theme</button>
        </div>
    }
}

export default Child;