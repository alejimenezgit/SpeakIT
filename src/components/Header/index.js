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
                    {!isLoggedIn 
                        ? 
                        <div>
                            <input className="menu-btn" type="checkbox" id="menu-btn" />
                            <label className="menu-icon" htmlFor="menu-btn">
                                <span className="navicon"></span>
                            </label>
                            <ul className="menu">
                                <li><Link to={'/login'}>Log in</Link></li>
                                <li><Link to={'/register'}>Sign up</Link></li>
                            </ul> 
                        </div>
                        :
                        <div>
                            <input className="menu-btn" type="checkbox" id="menu-btn" />
                            <label className="menu-icon" htmlFor="menu-btn">
                                <span className="navicon"></span>
                            </label>
                            <div className="menu profileDesple">
                                <ul>
                                    <li> <div className="boxImgNav">   
                                            <img className="ImgNav" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                                         </div> 
                                        <ul>
                                            <li className="itemDesple"> 
                                                <Link to={'/profile'}>Profile</Link>
                                            </li>
                                            <li className="itemDesple">
                                                <Link onClick={handleLogout} className="bttnlogout">  Log out </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <ul className="menu profileDespleMobile">
                                <li><Link to={'/login'}>Profile</Link></li>
                                <li><Link onClick={handleLogout}>Log out</Link></li>
                            </ul>
                        </div>
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