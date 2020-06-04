import React from 'react';
import "./styles.scss";

import { withAuth } from '../../context/authContext';

import ContextChat from '../../contextChat/index'

import Modal  from '../../components/Modal'
import Button from '../../components/Button';
import Search from '../../components/Search';
import Match from '../../components/Match';
import Chat from '../../components/Chat';
import ButtonEffect from '../../components/ButtonEffect';

class MainPage extends React.Component {

    state = {
        isRegister: this.props.isRegister,
        isSearch: false,
        isChat: false,
        isMatch: false,
        user: this.props.user,
        isMain: true,
        closeModal: false
    }

    closeModalRegister = () => { this.setState({ 
        isRegister: false,
        closeModal: true
     }) 
    }

    renderModalisRegister = () => {
        if(!this.state.closeModal){
            return (
                <div>
                    <div className="modalBG"> </div>
                    <Modal action={this.closeModalRegister}> 
                        <img className="imgWelcome" src="./images/welcome.png" alt="img"/>
                    </Modal> 
                </div> 
            )
        }
       
    }

    openChat = () => {
        this.setState({ 
            isSearch: false,
            isChat: true,
            isMatch: false,
            isMain: false
        })
    }

    openSearch = () => {
        this.setState({
            isSearch: true,
            isChat: false,
            isMatch: false,
            isMain: false
        })
    }

    openMatch = () => {
        this.setState({
            isSearch: false,
            isChat: false,
            isMatch: true,
            isMain: false
        })
    }

    mainImg = () => {
        return (<div className="imgMap">
                    <div className="titleMap"> Search, do a match, and learn speaking a differents languages </div>
                    <img src="./images/map.png" alt="map"/>
                </div>)
    }

    renderMainPage  = () => {
        const {isRegister, isSearch, isChat, isMatch, user, isMain} = this.state;
        return (
            <div className="container">
                <div className="inFlex selectContent">
                    <div className="content"> 
                        <ButtonEffect action={this.openChat}> CHAT </ButtonEffect>
                    </div>
                    <div className="content"> 
                        <ButtonEffect action={this.openSearch}> SEARCH </ButtonEffect>
                    </div>
                    <div className="content"> 
                        <ButtonEffect action={this.openMatch}> MATCH </ButtonEffect>
                    </div>
                </div>

                { isMain && this.mainImg()}
                { isSearch && <Search user={user}/>}
                { isChat &&  <ContextChat user={user}>
                                <Chat user={user}/>
                             </ContextChat> 
                }
                { isMatch && <Match user={user}/>}
            </div>
        );
    }

    render(){
        return this.renderMainPage();
    }
}

export default withAuth(MainPage); 