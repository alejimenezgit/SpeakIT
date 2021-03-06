import React from 'react';
import "./styles.scss";

import { Link } from "react-router-dom";
import { withAuth } from '../../context/authContext';
//import { Logo } from '/Logo';
 
class Header extends React.Component {

    renderHeader  = () => {
        const { handleLogout, isLoggedIn } = this.props;
        return (
            <header className="header">
                <div className="container">
                    <Link to={ isLoggedIn ? '/mainpage' : '/'}>
                        <div>
                            <img alt="img" className="imgLogo" src="./images/charla.png" /> 
                        </div>
                        <div className="logo">
                            Speak IT 
                        </div>  
                    </Link>
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
                                                <label onClick={handleLogout} className="bttnlogout">  Log out </label>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <ul className="menu profileDespleMobile">
                                <li><Link to={'/profile'}>Profile</Link></li>
                                <li><label onClick={handleLogout}>Log out</label></li>
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