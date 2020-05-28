import React from 'react';
import "./styles.scss";

import { withAuth } from '../../context/authContext';

class Profile extends React.Component {

    state = {
        user: this.props.user
    }

    renderProfile = () => {
        let { user } = this.state;
        return (
            <div className="container">
                <div className="profile">
                    <img className="imgProfile" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                    <h1> Name: {user.name}</h1>
                    <h1> Surname: {user.surnames}</h1>
                    <h1> Email: {user.email} </h1>
                    <h1> Tus Idiomas:  </h1>
                </div>
            </div>
        );
    }

    render(){
        console.log(this.state.user)
        return  this.renderProfile()
    }
}

export default withAuth(Profile);