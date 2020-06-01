import React, { Component } from 'react';
import "./styles.scss";

export default class Input extends Component {
    render(){
        const { type, name, value, action, placeholder, error} = this.props;
        return (
            <div> 
                <input className="input" type={type} name={name} value={value} onChange={action} placeholder={placeholder} required/>
                <div className="msgError"> {error} </div>
            </div>
        )
    }
}