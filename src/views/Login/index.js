import React from 'react';
import "./styles.scss";
import Header from '../../components/Header';
import Input from '../../components/Input';

export default class Login extends React.Component {

    state = {
        name: '',
    }

    handleInput = (e) => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    renderLogin  = () => {
        const { name } = this.state;
        return (
            <div>
                <Header />
                <div className="container"> 
                    <div>
                        <Input title='Name' styles="form" name="name" type="text" value={name} action={this.handleInput}/>
                    </div>
                    <div class="container">
                        <form action="#">
                            <input type="text" required />
                            <label for="" placeholder="Your Full Name" alt="Full Name"></label>
                            <input type="Email" required />
                            <label for="" placeholder="Your Email Address" alt="Email"></label>
                            <textarea required></textarea>
                            <label for="" placeholder="Your Message" alt="Message"></label>
                        </form>
                    </div>
                </div> 
            </div>
        );
    }

    render(){
        return this.renderLogin();
    }
}