import React from 'react';
import "./styles.scss";

export default class Profile extends React.Component {

    state = {

    }

    componentDidMount() {

    }

    renderProfile = () => {
        return (
            <div className="container">
                <div className="profile">
                    <img className="imgProfile" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                    <h1> Name: </h1>
                    <h1> Surname: </h1>
                    <h1> Email: </h1>
                </div>
            </div>
        );
    }

    render(){
        return this.renderProfile();
    }
}