import React from 'react';
import "./styles.scss";

import { Link } from "react-router-dom";
import { withAuth } from '../../context/authContext';

class Header extends React.Component {

    renderHeader  = () => {
        const { handleLogout } = this.props;
        return (
            <header className="header">
                <div className="container">
                    <Link to={'/'}> <div className="logo">Speak IT</div> </Link>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu">
                        <li><Link to={'/login'}>Log in</Link></li>
                        <li><Link to={'/register'}>Sign up</Link></li>
                        <button onClick={handleLogout}>  Log Out </button> 
                    </ul>
                </div>
            </header>
        );
    }

    render(){
        return this.renderHeader();
    }
}

export default withAuth(Header);