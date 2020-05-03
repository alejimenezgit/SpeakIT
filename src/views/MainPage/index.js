import React from 'react';
import "./styles.css";

import Header from '../../components/Header'

export default class MainPage extends React.Component {

    renderMainPage  = () => {
        return (
            <div className="home">
                hola
            </div>
        );
    }

    render(){
        return this.renderMainPage();
    }
}