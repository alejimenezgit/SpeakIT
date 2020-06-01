import React from 'react';
import "./styles.scss";

import Input from '../../components/Input';
import LabelForm from '../../components/LabelForm';

import { withAuth } from '../../context/authContext';

class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleInput = (e) => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        const { handleLogin } = this.props;
        if (email !== "" && password !== "") {
            handleLogin({ email, password });
        }
      };

    renderLogin  = () => {
        const { email, password } = this.state;
        return (
            <div>
                <div className="container" onSubmit={this.handleSubmit}> 
                    <form className="form">
                         <div className="titleForm"> <h1> Log in </h1> </div>
                        <Input name="email" type="Email" placeholder="Email Address" value={email} action={this.handleInput}/>
                        <Input name="password" type="Password" placeholder="Password" value={password} action={this.handleInput}/>
                        <input className="submit" type="submit" value="Submit" />
                    </form>
                </div> 
            </div>
        );
    }

    render(){
        return this.renderLogin();
    }
}

export default withAuth(Login);