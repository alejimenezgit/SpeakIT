import React from 'react';
import "./styles.scss";
import Input from '../../components/Input';
import { withAuth } from '../../context/authContext';
import apiClient from "../../services/language";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

class Register extends React.Component {

    state = {
        name: '',
        surnames: '',
        email: '',
        password: '',
        nativeLanguages: [],
        languages: ['']
    }

    convertObject = (languages) => {
        let languagesCombo = languages.map((lan,index) => {
            const { language, _id } = lan;
            return {value:_id, label:language}
        })
        return languagesCombo;
    }

    componentDidMount() {
        apiClient
            .allLanguages()
            .then((language) => {
                this.setState({
                    languages: this.convertObject(language.data)
                });
            })
            .catch(() => {
                console.log('no hay languages');
            });
    }

    handleInput = (e) => {
        this.setState({
         [e.target.name]: e.target.value
        })
    }

    handleCombo= (e) => {
        this.setState({
            nativeLanguages: e.map((languages, index) => languages.value)
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { name, surnames, email, password, nativeLanguages } = this.state;
        const { handleRegister } = this.props;
            if (email !== "" && password !== "" && name !== "" && surnames !== "" 
                && nativeLanguages.length > 0) {
                    let comunications = [];
                    handleRegister({ name, surnames, email, password, nativeLanguages, comunications });
            }
    };

    renderLogin  = () => {
        const { name, surnames, email, password, languages } = this.state;
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
                        <br/>
                        <Select 
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            isMulti
                            name="nativeLanguages"
                            options={languages}
                            placeholder="Select your native language"
                            onChange={this.handleCombo}
                        />
                        <br/> <br/>
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
                        <select
                            native
                            type="select"
                            name="nativeLanguages"
                            multiple={true}
                            select="multiple"
                            value={nativeLanguages}
                            onChange={this.handleCombo}
                            >
                                {languages.map((lan,index) => {
                                    return <option key={index} value={lan.language}> {lan.language} </option>
                                })}
                        </select>   
*/