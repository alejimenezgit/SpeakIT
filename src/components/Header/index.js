import React from 'react';
import "./styles.scss";

import { Link } from "react-router-dom";

import apiClient from "../../services/users";

import {Redirect} from "react-router-dom";

export default class Header extends React.Component {
/*
    logOut = () =>{
        apiClient
        .logout()
        .then(() => {
            return (<Redirect
                        to={{
                        pathname: "/",
                        }}
                    />
                )
            
        })
        .catch((error) => {
            console.log('error, no has salido -----------------------------------------')
        });
    }


    <button onClick={this.logOut}>Salir </button>
*/
    renderHeader  = () => {
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
                        <button> </button>
                    </ul>
                </div>
            </header>
        );
    }

    render(){
        return this.renderHeader();
    }
}