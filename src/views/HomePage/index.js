import React from 'react';
import "./styles.css";

import Header from '../../components/Header'

export default class HomePage extends React.Component {

    renderHomePage  = () => {
        return (
            <div>
                <Header />
                <div className="container">
                <div className="box"> 
                </div>
                <div className="box"> 
                </div>
                <div className="box"> 
                </div>
                <div className="box"> 
                </div>
            </div>
            </div>
            
        );
    }

    render(){
        return this.renderHomePage();
    }
}