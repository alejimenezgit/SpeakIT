import React from 'react';
import "./styles.scss";
import Header from '../../components/Header';
import Input from '../../components/Input';

export default class Login extends React.Component {

    state = {
        name: '',
        surnames: '',
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
        const { name, surnames, email, password } = this.state;
        const { onRegister } = this.props;
        if (email !== "" && password !== "" &&
            name !== "" && surnames !== "") {
                onRegister({ name, surnames, email, password });
        }
      };

    renderLogin  = () => {
        const { name, surnames, email, password } = this.state;
        return (
            <div>
                <Header />
                <div className="container"> 
                    <form className="form" onSubmit={this.handleSubmit}>  
                        <Input name="name" type="text" value={name} action={this.handleInput}/>
                        <label htmlFor="" placeholder="Your Name" alt="Name"></label>

                        <Input name="surnames" type="text" value={surnames} action={this.handleInput}/>
                        <label htmlFor="" placeholder="Your Surname" alt="Full Name"></label>

                        <Input name="email" type="Email" value={email} action={this.handleInput}/>
                        <label htmlFor="" placeholder="Your Email Address" alt="Email"></label>

                        <Input name="password" type="Password" value={password} action={this.handleInput}/>
                        <label htmlFor="" placeholder="Your Password" alt="password"></label>
                    
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