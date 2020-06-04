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
        match: [],
        nativeLanguages: [],
        comunications: [],
        languages: [''],
        nameError: '',
        surnamesError: '',
        emailError: '',
        passwordError: '',
        nativeLanguagesError: '',
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
            .catch(() => {});
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

    validate = () => {
        let emptyName       = "";
        let emptySurname    = "";
        let emptyEmail      = "";
        let emptyPassword   = "";
        let lengthPassword  = "";
        let emptyLanguages  = "";

        const { name, surnames, email, password, nativeLanguages, match } = this.state;

        if(name === "")
            emptyName = "You must complete the Name";
        if(surnames === "")
            emptySurname = "You must complete the Surname"; 
        if(password === "")
            emptyPassword = "You must complete the Password";
        else if (password.length < 4)
            lengthPassword = "You must complete the Password with more characters";
        if(email === "")
            emptyEmail = "You must complete the Email";
        if(nativeLanguages.length === 0)
            emptyLanguages = "Select a language as a minimum";


        if(emptyName !== "") 
            this.setState({ nameError: emptyName})
        if(emptySurname !== "") 
            this.setState({ surnamesError: emptySurname})
        if(lengthPassword !== "")
            this.setState({ passwordError: lengthPassword})
        if(emptyPassword !== "") 
            this.setState({ passwordError: emptyPassword})
        if(emptyEmail !== "") 
            this.setState({ emailError: emptyEmail})
        if(emptyLanguages !== "")
            this.setState({ nativeLanguagesError: emptyLanguages})
        
        if(emptyName !== "" || emptySurname !== "" || lengthPassword !== "" ||
           emptyPassword !== "" || emptyEmail !== "" || emptyLanguages !== "")
            return false;

        return true;
    }


    handleSubmit = (e) => {
        e.preventDefault();
        if(this.validate()){
            const {handleRegister} = this.props
            const { name, surnames, email, password, nativeLanguages, comunications, match } = this.state;
            handleRegister({ name, surnames, email, password, nativeLanguages, comunications, match });
        } 
    };

    renderLogin  = () => {
        const { name, surnames, email, password, languages, nameError, surnamesError,
                 emailError, passwordError, nativeLanguagesError } = this.state;
        return (
            <div className="container"> 
                <form className="form" onSubmit={this.handleSubmit}> 
                <div className="titleForm"> <h1> Register </h1> </div>
                <div className="boxInputs">
                    <Input name="name" type="text" value={name} placeholder="Your Name..." action={this.handleInput} error={nameError}/>
                    <Input name="surnames" type="text" value={surnames} placeholder="Your surname..." action={this.handleInput} error={surnamesError}/>
                    <Input name="email" type="Email" value={email} placeholder="Your email address..." action={this.handleInput} error={emailError}/>
                    <Input name="password" type="Password" value={password} placeholder="Your password..." action={this.handleInput} error={passwordError}/>
                </div>
                    <Select 
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        isMulti
                        name="nativeLanguages"
                        options={languages}
                        className="selectMulti"
                        placeholder="Select your native language"
                        onChange={this.handleCombo}
                    />
                        <div className="msgError langerrors"> {nativeLanguagesError} </div>
                    <br/> <br/>
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div> 
        );
    }

    render(){
        return this.renderLogin();
    }
}

export default withAuth(Register);