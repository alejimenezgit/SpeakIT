import React from 'react';
import "./styles.css";

export default class MainPage extends React.Component {

    renderMainPage  = () => {
        return (
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
        );
    }

    render(){
        return this.renderMainPage();
    }
}