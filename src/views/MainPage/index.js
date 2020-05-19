import React from 'react';
import "./styles.scss";

import Header from '../../components/Header'

export default class MainPage extends React.Component {

    renderMainPage  = () => {
        return (
            <div>
                <Header />
                <div className="container">
                    <div className="box"> 
                        main
                    </div>
                </div>
            </div>
        );
    }

    render(){
        return this.renderMainPage();
    }
}