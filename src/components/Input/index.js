import React, { Component } from 'react';
import "./styles.scss";

export default class Input extends Component {
    render(){
        const { type, name, value, action} = this.props;
        return <input type={type} name={name} value={value} 
                        onChange={action} required/>
    }
}