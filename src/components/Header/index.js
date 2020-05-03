import React from 'react';
import "./styles.css";

//import Button from '../Button';

export default class Header extends React.Component {

    renderHeader  = () => {
        return (
            <header className="header">
            <div className="container">
                <a className="logo">Speak IT</a>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <span className="navicon"></span>
                </label>
                <ul className="menu">
                  <li><a href="#work">Log in</a></li>
                  <li><a href="#about">Sign up</a></li>
                </ul>
            </div>
          </header>
        );
    }

    render(){
        return this.renderHeader();
    }
}