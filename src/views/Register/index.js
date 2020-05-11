import React from 'react';
import "./styles.scss";
import Header from '../../components/Header';

export default class Login extends React.Component {

    renderLogin  = () => {
        return (
            <div>
                <Header />
                <div className="container"> 
                    Register
                </div> 
            </div>
        );
    }

    render(){
        return this.renderLogin();
    }
}