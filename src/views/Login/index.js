import React from 'react';
import "./styles.scss";
import Header from '../../components/Header';
import Input from '../../components/Input';
import LabelForm from '../../components/LabelForm';

export default class Login extends React.Component {

    state = {
        email: '',
        password: ''
    }

    handleInput = (e) => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    renderLogin  = () => {
        const { email, password } = this.state;
        return (
            <div>
                <Header />
                <div className="container"> 
                    <form className="form">
                        <Input name="email" type="Email" value={email} action={this.handleInput}/>
                        <LabelForm placeholder="Your Email Address" alt="Email"/>

                        <Input name="password" type="Password" value={password} action={this.handleInput}/>
                        <LabelForm placeholder="Your Password" alt="password"/>
                    </form>
                </div> 
            </div>
        );
    }

    render(){
        return this.renderLogin();
    }
}