import React from 'react';
import "./styles.scss";

import apiClientLanguage from "../../services/language";
import apiClientUser from "../../services/users";

import Slider from "react-slick";

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
        languagesByUser: []
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
                this.setState({
                    languagesByUser: users.data,
                    showLanguage: true
                })
            })
            .catch(()=>{
                console.log('error')
            })
    }

    match = ({userToMatch},{user}) => {
        
        const data = {user};
        console.log('los dos users',userToMatch,data.user);

        let objuserToMatch = {
            id: data.user.data._id,
            status: "pendiente"
        }
        console.log('obj user To Match', objuserToMatch);

        apiClientUser
            .updateUser({match: objuserToMatch}, userToMatch._id)
            .then((result) => console.log(result))
            .catch(()=> console.log('error'))

        let objuser = {
            id: userToMatch._id,
            status: "Enviado"
        }
        console.log('obj user', objuser) 

        apiClientUser
            .updateUser({match: objuser}, data.user.data._id)
            .then((result) => console.log(result))
            .catch(()=> console.log('error'))
        
    }

    showUserByLanguage = () => {
        console.log(this.state.languagesByUser)
        const { user } = this.props;
        return (
            <div className="boxAllUsers"> 
                {this.state.languagesByUser.map((userToMatch,index)=>{
                    return <div className="boxUser" key={index}> 
                                {userToMatch.name} <br></br>
                                <button onClick={() => this.match({userToMatch},{user})}> Match </button> 
                           </div>
                })}
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
            <div>
                <div>
                    <h1> Choose a Language </h1>
                    <Slider {...settings}>
                        {this.renderAllLanguages()}
                    </Slider>
                    <div className="box">
                        <div className="selectBox pdl-25">
                            <h2> Users  by Language </h2>
                        </div>
                        {this.showUserByLanguage()}
                    </div>
                </div>
            </div>
        );
    }

    render(){
        const {isloading, error} = this.state;
        return  (
            <div>
                {isloading && !error ? <div> espera </div> : this.renderSearch()}
                {error && <div> error </div>}
            </div>
        )
    }
}


export default Search; 