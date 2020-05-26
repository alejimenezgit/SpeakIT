import React from 'react';
import "./styles.scss";

import apiClientUser from "../../services/users";
import { withAuth } from '../../context/authContext';

class Profile extends React.Component {

    state = {
        user: ''
    }

    componentDidMount() {
        console.log(this.props);
        const {_id} = this.props.user;
        apiClientUser
            .oneUser(_id)
            .then((user) => {
                console.log(user, 'useeeeeeeeeer.');
                this.setState({
                    user: user.data
                })
            })
            .catch(() => {
                console.log('no hay languages');
            });
    }

    renderProfile = () => {
        let { user } = this.state;
        console.log(user);
        return (
            <div className="container">
                <div className="profile">
                    <img className="imgProfile" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                    <h1> Name: {user.name}</h1>
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

export default withAuth(Profile);