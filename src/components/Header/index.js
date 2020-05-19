import React from 'react';
import "./styles.scss";

import { Link } from "react-router-dom";
import { withAuth } from '../../context/authContext';

class Header extends React.Component {

    renderHeader  = () => {
        const { handleLogout, isLoggedIn, user } = this.props;
        return (
            <header className="header">
                <div className="container">
                    <Link to={'/'}> <div className="logo">Speak IT</div> </Link>
                    <input className="menu-btn" type="checkbox" id="menu-btn" />
                    <label className="menu-icon" htmlFor="menu-btn">
                        <span className="navicon"></span>
                    </label>
                    {!isLoggedIn && 
                        <ul className="menu">
                            <li><Link to={'/login'}>Log in</Link></li>
                            <li><Link to={'/register'}>Sign up</Link></li>
                        </ul>
                    }
                    {isLoggedIn && 
                        <ul className="menu">
                            <li> {user.data.name}</li>
                            <li className="profile"></li>
                            <li> <button onClick={handleLogout}>  Log Out </button>  </li>
                        </ul>
                    }
                </div>
            </header>
        );
    }

    render(){
        return this.renderHeader();
    }
}

export default withAuth(Header);