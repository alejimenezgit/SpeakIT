import React from 'react';
import "./styles.scss";

import apiClientUser from "../../services/users";
import apiClientLanguage from "../../services/language";

import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Notification from "../../components/Notification";

import Slider from "react-slick";
import ItemProfile from '../../components/ItemProfile';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
};

class Search extends React.Component {

    state = {
        allLanguages: [],
        isloading: false,
        error: false,
        showLanguage: true,
        languagesByUser: [],
        user: this.props.user,
        toastSucces: false,
        numBottom: 0
    }

    convertObject = (languages) => {
        let languagesCombo = languages.map((lan,index) => {
            const { language, _id } = lan;
            return {value:_id, label:language}
        })
        return languagesCombo;
    }

    componentDidMount(){
        this.setState({isloading: true,});
        apiClientLanguage
            .allLanguages()
            .then((language) => {
                this.setState({
                    allLanguages: this.convertObject(language.data),
                    isloading: false,
                });
            })
            .catch(() => {
                this.setState({ error: true });
            });
    }

    selectLanguage = (a) => {
        apiClientUser
            .allbyUser({nativeLanguages:a})
            .then((users) => {
                let alltheUser = []
                users.data.forEach((user) => {
                   if(user._id !== this.state.user._id) alltheUser.push(user)
                });
                this.setState({
                    languagesByUser: alltheUser,
                    showLanguage: true
                })
            })
            .catch(()=>{
               this.setState({error: true})
            })
    }

    match = (userToMatch) => {
        const {user} = this.state;
        const body = {
                        sender: user._id, 
                        receiver: userToMatch._id, 
                        status: "pendiente",
                        chat: []
                     }

        apiClientUser
            .createMatch(body)
            .then((resultado) => { 
                this.setState({toastSucces: true});
                setTimeout(() => {
                    this.setState({toastSucces: false})
                },3000)
            })
            .catch(() => this.setState({error: true}))
    }

    showUserByLanguage = () => {
        return (
            <div>
                <div className="boxAllUsers"> 
                    <div className="selectBox pdl-25">
                        <h2 className="usersTitle"> Users  by Language </h2>
                    </div>
                </div>
                <div>
                {this.state.languagesByUser.map((userToMatch,index)=>{
                    return <ItemProfile user={userToMatch} index={index} action={this.match}/> 
                })}
                </div>
            </div>
        
        )
    }

    renderAllLanguages = () =>{
        return this.state.allLanguages.map((lan, index) => {
            return <div key={index} onClick={() => this.selectLanguage(lan.value)}> 
                        <h3> {lan.label} </h3> 
                    </div>
        });
    }

    renderSearch = () => {
        return (
            <div className="boxSearch">
                { this.state.toastSucces && 
                    <Notification bottom={35}>
                        Success
                    </Notification>
                }
                <h1> Choose a Language: </h1>
                <Slider {...settings}>
                    {this.renderAllLanguages()}
                </Slider>
                <div className="box">
                    {this.showUserByLanguage()}
                </div>
            </div>
        );
    }

    render(){
        const {isloading, error} = this.state;
        return  (
            <div> 
                {isloading && !error ? <Loading /> : this.renderSearch()}
                {error && <Error />}
            </div>
        )
    }
}


export default Search; 