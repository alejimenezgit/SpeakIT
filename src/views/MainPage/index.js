import React from 'react';
import "./styles.scss";

import { withAuth } from '../../context/authContext';

import ContextChat from '../../contextChat/index'

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