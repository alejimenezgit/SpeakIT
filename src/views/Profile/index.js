import React from 'react';
import "./styles.scss";

import apiClientLanguage from "../../services/language";

import { withAuth } from '../../context/authContext';

class Profile extends React.Component {

    state = {
        user: this.props.user,
        languages: []
    }

    componentDidMount() {
        console.log(this.props.user.nativeLanguages)
        apiClientLanguage
            .allById(this.props.user.nativeLanguages)
            .then((result) => this.setState({languages: result.data}))
            .catch(() => console.log('error'))
    }

    renderProfile = () => {
        let { user, languages } = this.state;
        console.log(user)
        return (
            <div className="container">
                <div className="profile">
                    <img className="imgProfile" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                    <h1> Name: {user.name}</h1>
                    <h1> Surname: {user.surnames}</h1>
                    <h1> Email: {user.email} </h1>
                    <h1> Your native languages:  </h1>
                    {languages.map((lan, index) => {
                        return <div key={index}> {lan.language} </div>
                    })}
                    <br/>
                    <button> Edit </button>
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