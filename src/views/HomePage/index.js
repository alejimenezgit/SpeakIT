import React from 'react';
import "./styles.css";

export default class HomePage extends React.Component {

    renderHomePage  = () => {
        return (
                <div className="container">
                    home 
                </div>
        );
    }

    render(){
        return this.renderHomePage();
    }
}