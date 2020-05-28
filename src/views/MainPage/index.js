import React from 'react';
import "./styles.scss";

import { withAuth } from '../../context/authContext';

import Modal  from '../../components/Modal'
import Button from '../../components/Button';
import Search from '../../components/Search';
import Match from '../../components/Match';
import Chat from '../../components/Chat';

class MainPage extends React.Component {

    state = {
        isRegister: this.props.isRegister,
        isSearch: false,
        isChat: false,
        isMatch: false,
        user: this.props.user,
    }

    closeModalRegister = () => { this.setState({ isRegister: false }) }

    renderModalisRegister = () => {
        return (
            <div>
                <div className="modalBG"> </div>
                <Modal action={this.closeModalRegister}> 
                    Welcome new user :)
                    <br/><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOqvD6s_OYlv9eDaNoWQW0x-3cRKUSlEUgLtXafBnjnJPtU1ou&usqp=CAU" alt="img"/>
                </Modal> 
            </div> 
        )
    }

    openChat = () => {
        this.setState({ 
            isSearch: false,
            isChat: true,
            isMatch: false
        })
    }

    openSearch = () => {
        this.setState({
            isSearch: true,
            isChat: false,
            isMatch: false
        })
    }

    openMatch = () => {
        this.setState({
            isSearch: false,
            isChat: false,
            isMatch: true
        })
    }

    renderMainPage  = () => {
        const {isRegister, isSearch, isChat, isMatch, user} = this.state;
        return (
            <div className="container">

                <div className="inFlex selectContent">
                    <div className="content"> 
                        <Button styles="btnContent" action={this.openChat}> Chat </Button> 
                    </div>
                    <div className="content"> 
                        <Button styles="btnContent" action={this.openSearch}> Search </Button> 
                    </div>
                    <div className="content"> 
                        <Button styles="btnContent" action={this.openMatch}> Match </Button> 
                    </div>
                </div>
                
                <div className="line"></div>

                { isRegister && this.renderModalisRegister() }
                { isSearch && <Search user={user}/>}
                { isChat &&  <Chat />}
                { isMatch && <Match user={user}/>}

            </div>
        );
    }

    render(){
        return this.renderMainPage();
    }
}

export default withAuth(MainPage); 

/*



import React from 'react';
import "./styles.scss";

import Slider from "react-slick";
import Select from 'react-select';

import { withAuth } from '../../context/authContext';

import  Modal  from '../../components/Modal'
import ItemProfile from '../../components/ItemProfile';
import Button from '../../components/Button';

import apiClientUser from "../../services/users";
import apiClientLanguage from "../../services/language";
import apiClientComunication from "../../services/comunication";

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

class MainPage extends React.Component {

    state = {
        isRegister: this.props.isRegister,
        addLanguage: false,
        addUser:  false,
        listAllLanguages: [],
        modalAddLanguage: '',
        user: this.props.user.data
    }

    handleCombo= (e) => {
        this.setState({
            modalAddLanguage: e.value
        })
    }


    convertObject = (languages) => {
        let languagesCombo = languages.map((lan,index) => {
            const { language, _id } = lan;
            return {value:_id, label:language}
        })
        return languagesCombo;
    }
    
    closeModalRegister = () => { this.setState({ isRegister: false }) }
    closeModalAddLan = () => { this.setState({ addLanguage: false }) }
    closeModalAddUser = () => { this.setState({ addUser: false }) }

    addUser= () => { 
        this.setState({ addUser: !this.state.addUser }) 
    }

    addLanguage = () => {
        apiClientLanguage
            .allLanguages()
            .then((language) => {
                this.setState({
                    addLanguage: !this.state.addLanguage ,
                    listAllLanguages: this.convertObject(language.data)
                });
            })
            .catch(() => {
                console.log('no hay languages');
            });
    }

    addLanguageByUser = () => {
        let user = [];
        let language = this.state.modalAddLanguage;
        console.log('all languages from modal', language )
        apiClientComunication
            .addComunitation({user, language})
            .then((language) => {
                apiClientUser
                    .updateUser({comunications: language.data._id}, this.state.user._id)
                    .then((user) => {
                        this.setState({
                            user: user.data
                        })
                    })
                    .catch(() => {
                        console.log('no hay languages');
                    });
                this.setState({
                    addLanguage: !this.state.addLanguage 
                });
            })
            .catch(() => {
                console.log('no hay languages');
            });
    }


    renderModalisRegister = () => {
        return (
            <div>
                <div className="modalBG"> </div>
                <Modal action={this.closeModalRegister}> 
                    Welcome new user :)
                    <br/><br/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSOqvD6s_OYlv9eDaNoWQW0x-3cRKUSlEUgLtXafBnjnJPtU1ou&usqp=CAU" alt="img"/>
                </Modal> 
            </div> 
        )
    }

   
    renderModalAddLanguage = (listAllLanguages) => {
        return (
            <div>
                <div className="modalBG"> </div>
                <Modal action={this.closeModalAddLan}> 
                    Add Language
                    <br/><br/><br/>
                    <Select 
                            closeMenuOnSelect={false}
                            name="nativeLanguages"
                            options={listAllLanguages}
                            placeholder="Select a language"
                            onChange={this.handleCombo}
                        />
                    <br/><br/>
                    <Button action={this.addLanguageByUser}> Añadir </Button>
                </Modal>
                
            </div> 
        )
    }

    renderModalAddUser = () => {
        return (
            <div>
                <div className="modalBG"> </div>
                <Modal action={this.closeModalAddUser}> 
                    Add User
                </Modal> 
            </div> 
        )
    }

    getAllComunications = () => {
        let comunIds = this.state.user.comunications;
        console.log(comunIds, 'todas las comunicaciones')
        let languages = '';
        apiClientComunication
            .allComunicationByIds(this.state.user._id)
            .then((user) => {
                console.log(user.data)
                return <div> <h3> lan </h3></div>
            })
            .catch(() => {
                console.log('no hay languages');
            });
    }

    renderMainPage  = () => {
        const {isRegister,addLanguage,addUser,listAllLanguages} = this.state;
        return (
            <div className="container">
                <div>
                    <div className="selectBox">
                        <h2> Select a language </h2>
                        <Button action={this.addLanguage} styles="btnAdd fr"> + </Button>
                    </div>

                    { isRegister && this.renderModalisRegister() }
                    { addLanguage && this.renderModalAddLanguage(listAllLanguages) }
                    { addUser && this.renderModalAddUser() }


                    <Slider {...settings}>
                        <div>
                            <h3> Ingles </h3>
                        </div>
                        <div>
                            <h3> Español </h3>
                        </div>
                        {this.getAllComunications()}
                    </Slider>
                </div>

                <div className="box">
                    <div className="selectBox pdl-25">
                        <h2> Users  by Language </h2>
                        <Button action={this.addUser} styles="btnAddLanguage"> + </Button>
                    </div>
                    <ItemProfile user={{name: "Alejandro"}}>  </ItemProfile> 
                    <ItemProfile user={{name: "Alejandro"}}>  </ItemProfile> 
                    <ItemProfile user={{name: "Alejandro"}}>  </ItemProfile> 
                    <ItemProfile user={{name: "Alejandro"}}>  </ItemProfile> 
                    <ItemProfile user={{name: "Alejandro"}}>  </ItemProfile> 
                    
              </div>
            </div>
            
        );
    }

    render(){
        return this.renderMainPage();
    }
}


export default withAuth(MainPage); 
*/