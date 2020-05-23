import React from 'react';
import "./styles.scss";
import Input from '../../components/Input';
import { withAuth } from '../../context/authContext';
import apiClient from "../../services/language";

class Register extends React.Component {

    state = {
        name: '',
        surnames: '',
        email: '',
        password: '',
        nativeLanguages: '',
        languages: ''
    }

    componentDidMount() {
        let {isloading, error} = this.state;
        isloading = true;
        apiClient
            .allLanguages()
            .then((language) => {
                console.log(language.data, 'hay languages');
                this.setState({
                    languages: language.data,
                });
                isloading = false;
            })
            .catch(() => {
                error = true;
                console.log('no hay languages');
            });
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
        const { name, surnames, email, password, languages, isloading } = this.state;
        return (
            <div>
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

                        <Input name="nativeLanguages" type="Password" value={password} action={this.handleInput}/>
                        <label htmlFor="" placeholder="Your Password" alt="password"></label>

                        {isloading && 
                            languages.map((language, index) => {
                                return <div>{languages.language}</div>
                            })
                        }
                               
                                
                        
                    
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

export default withAuth(Register)

/*

*/