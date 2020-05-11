import React, { Component } from 'react';
import "./styles.scss";

class Input extends Component {
    render(){
        const { title, styles, type, name, value, action} = this.props;
        return (
            <div className="box-input">
                <div className="txtForm"> {title} </div>
                <input className={styles} type={type} name={name} value={value} onChange={action}/>
            </div>
        )
    }
}

export default Input;