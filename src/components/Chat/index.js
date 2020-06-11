import React from 'react';
import "./styles.scss";

import { Link } from "react-router-dom";
import {CTX} from '../../contextChat/index'
import apiClientComunications from "../../services/comunication"

function saveChat(value) {
    apiClientComunications
        .pushComunication(value.id, {chat: value})
        .then()
        .catch()
}

export default function Chat(props) {
    const {allChats, sendChatAction, user, idComunication} = React.useContext(CTX);
    const topics = Object.keys({...allChats});
    const [textValue, changeTextValue] = React.useState('');
    const [activeTopic, changeActivetopic] = new React.useState(topics[0])
    console.log(allChats, 'todos los chats');
    return (
        JSON.stringify({...allChats}) !== JSON.stringify({}) 
        ?  (<div className="contain inFlex boxChat">
                    <div className="allChats">
                        <div className="alluser"> All the User </div>
                        {topics.map((user, index) => {
                            return <button className="btnChat" key={index} onClick={e => changeActivetopic(e.target.innerText)}> {user} </button>
                        })}
                    </div>
                    <div className="contextChat">
                        <div className="userChat"> 
                            <div>
                                <img width="40" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                            </div>
                            <div className="nameChatActive">  {activeTopic} </div>
                            <div className="videoIcon">
                             <Link to={'/videochat'}> 
                                <img width="40" src="./images/videocall.png" alt="videocall"/>
                             </Link>
                            </div>
                             
                        </div>
                        <div className="chat"> 
                            { {...allChats}[activeTopic].map((user, index) => {
                                let sendStyle = activeTopic === user.chat.from;
                                return (
                                        <div key={index} className={sendStyle ? 'receiveUser' : 'sendUser'}> 
                                            <div> {user.chat.msg} </div>
                                        </div>
                                )
                            })}
                        </div>
                        <div className="boxSend"> 
                            <input 
                                className="textInput"
                                value={textValue}
                                onChange={(e)=> changeTextValue(e.target.value)}
                            />
                            <button className="btnSend"
                            onClick={() => {
                                    sendChatAction({from: user,msg: textValue, topic: activeTopic, id: idComunication[activeTopic] })
                                    changeTextValue('')
                                    saveChat({from: user,msg: textValue, topic: activeTopic, id: idComunication[activeTopic]})
                                    }}> Send </button>
                        </div>
                    </div>
            </div>
        )
        :
        <div className="contain inFlex boxChat">
           <h1> No chats yet </h1>
        </div>
    );
}