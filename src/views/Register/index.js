import React from 'react';
import "./styles.scss";
import Header from '../../components/Header';
import Input from '../../components/Input';

export default class Login extends React.Component {

    state = {
        name: '',
        surname: '',
        email: '',
        password: ''
    }

    handleInput = (e) => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    renderLogin  = () => {
        const { name, surname, email, password } = this.state;
        return (
            <div>
                <Header />
                <div className="container"> 
                    <form className="form"> 
                        <Input name="name" type="text" value={name} action={this.handleInput}/>
                        <label htmlFor="" placeholder="Your Name" alt="Name"></label>

                        <Input name="surname" type="text" value={surname} action={this.handleInput}/>
                        <label htmlFor="" placeholder="Your Surname" alt="Full Name"></label>

                        <Input name="email" type="Email" value={email} action={this.handleInput}/>
                        <label htmlFor="" placeholder="Your Email Address" alt="Email"></label>

                        <Input name="password" type="Password" value={password} action={this.handleInput}/>
                        <label htmlFor="" placeholder="Your Password" alt="password"></label>
                    </form>
                </div> 
            </div>
        );
    }

    render(){
        return this.renderLogin();
    }
}