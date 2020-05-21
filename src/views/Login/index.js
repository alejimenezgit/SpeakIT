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
        console.log(this.props)
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
                        <Input name="email" type="Email" value={email} action={this.handleInput}/>
                        <LabelForm placeholder="Your Email Address" alt="Email"/>

                        <Input name="password" type="Password" value={password} action={this.handleInput}/>
                        <LabelForm placeholder="Your Password" alt="password"/>

                        <input type="submit" value="submit" />
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