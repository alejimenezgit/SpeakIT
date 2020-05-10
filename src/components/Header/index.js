import React from 'react';
import "./styles.scss";

import { BrowserRouter as Router, Link} from "react-router-dom";

export default class Header extends React.Component {

    renderHeader  = () => {
        return (
            <Router>
                <header className="header">
                    <div className="container">
                        <div className="logo">Speak IT</div>
                        <input className="menu-btn" type="checkbox" id="menu-btn" />
                        <label className="menu-icon" htmlFor="menu-btn">
                            <span className="navicon"></span>
                        </label>
                        <ul className="menu">
                            <li><Link to={'/login'}>Log in</Link></li>
                            <li><Link to="#about">Sign up</Link></li>
                        </ul>
                    </div>
                </header>
            </Router>
        );
    }

    render(){
        return this.renderHeader();
    }
}