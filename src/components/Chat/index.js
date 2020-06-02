import React from 'react';
import "./styles.scss";

//import ItemChat from '../../components/ItemChat'

import {CTX} from '../../contextChat/index'
import Loading from "../../components/Loading";

export default function Chat(props) {

    // CTX 
    const {allChats, sendChatAction, user, idComunication} = React.useContext(CTX);
    const topics = Object.keys({...allChats});
    // Local State
    const [textValue, changeTextValue] = React.useState('');
    const [activeTopic, changeActivetopic] = new React.useState(topics[0])
    return (
        JSON.stringify({...allChats}) !== JSON.stringify({}) 
        ?  (<div className="contain"> 
                <div className="inFlex">
                    <div className="allChats">
                        {topics.map((user, index) => {
                            return <button key={index} onClick={e => changeActivetopic(e.target.innerText)}> {user} </button>
                        })}
                    </div>
                    <div className="contextChat">
                        <div className="nameChat"> 
                            <img width="40" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>   
                            {activeTopic}
                        </div>
                        <div className="chat"> Chat 
                            { {...allChats}[activeTopic].map((user, index) => {
                                return (
                                    <div key={index} className="inFlex"> 
                                        <div> {user.chat.from} =  </div>
                                        <div> {user.chat.msg} </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text"> 
                            <input 
                                value={textValue}
                                onChange={(e)=> changeTextValue(e.target.value)}
                            />
                            <button
                            onClick={() => {
                                    sendChatAction({from: user,msg: textValue, topic: activeTopic, id: idComunication[activeTopic]})
                                    changeTextValue('')
                                    }}> send </button>
                        </div>
                    </div>
                </div>
            </div>
        )
        :
        <Loading /> 
    );
}