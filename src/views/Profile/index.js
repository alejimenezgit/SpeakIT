import React from 'react';
import "./styles.scss";

import apiClientLanguage from "../../services/language";

import { withAuth } from '../../context/authContext';

import Input from '../../components/Input';
import ItemPerfil from '../../components/ItemPerfil'

import apiClientUser from "../../services/users";

class Profile extends React.Component {

    state = {
        languages: [],
        edit: false,
        name: this.props.user.name,
        surnames: this.props.user.surnames,
        email: this.props.user.email
    }

    componentDidMount() {
        apiClientLanguage
            .allById(this.props.user.nativeLanguages)
            .then((result) => this.setState({languages: result.data}))
            .catch(() => console.log('error'))
    }

    handleInput = (e) => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }


    edit = () => {
        this.setState({edit: true})
    }

    validate = () => {
        let emptyName       = "";
        let emptySurname    = "";
        let emptyEmail      = "";

        const { name, surnames, email } = this.state;

        if(name === "")
            emptyName = "You must complete the Name";
        if(surnames === "")
            emptySurname = "You must complete the Surname"; 
        if(email === "")
            emptyEmail = "You must complete the Email";

        if(emptyName !== "") 
            this.setState({ nameError: emptyName})
        if(emptySurname !== "") 
            this.setState({ surnamesError: emptySurname})
        if(emptyEmail !== "") 
            this.setState({ emailError: emptyEmail})
        
        if(emptyName !== "" || emptySurname !== "" || emptyEmail !== "" )
            return false;

        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({edit: false})
        if(this.validate()){
            const { name, surnames, email} = this.state;
            apiClientUser
                .updateUser({ name, surnames, email}, this.props.user._id)
                .then((response) => {
                     this.setState({
                         name: name,
                         surnames: surnames,
                         email: email
                     })
                    })
                .catch(() => console.log('error to save'))
        } 
    };

    renderProfile = () => {
        let { languages, edit, name, surnames, email } = this.state;
        return (
            <div className="container">
                <div className="profile">
                    <img className="imgProfile" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                    
                    {!edit  ?
                        <div className="boxUser">
                            <ItemPerfil title="Name" value={name} />
                            <ItemPerfil title="Surname" value={surnames} />
                            <ItemPerfil title="Email" value={email} />
                            <h1> Your native languages:  </h1>
                                {languages.map((lan, index) => {
                                    return <div className="dateUser" key={index}> - {lan.language} </div>
                                })}
                            <br/>
                            <button onClick={this.edit} className="btnEditProfile"> Edit </button>
                        </div>
                        :
                        <form className="boxUser" onSubmit={this.handleSubmit}>
                            <h1> Name: </h1> 
                            <Input name="name" type="text" value={name} action={this.handleInput}/>
                            <div className="line"></div>

                            <h1> Surname: </h1> 
                            <Input name="surname" type="text" value={surnames} action={this.handleInput}/>
                            <div className="line"></div>

                            <h1> Email: </h1> 
                            <Input name="email" type="text" value={email} action={this.handleInput}/>
                            <div className="line"></div>

                            <h1> Your native languages:  </h1>
                                {languages.map((lan, index) => {
                                    return <div className="dateUser" key={index}> - {lan.language} </div>
                                })}
                            <br/>
                            <input type="submit" className="btnEditProfile" value="Save"/>
                        </form>
                    }                
                </div>
            </div>
        );
    }

    render(){
        return  this.renderProfile()
    }
}

export default withAuth(Profile);