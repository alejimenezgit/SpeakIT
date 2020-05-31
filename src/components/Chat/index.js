import React, { useEffect } from 'react';
import "./styles.scss";

import ItemChat from '../../components/ItemChat'

import apiClientUser from "../../services/users";

import {CTX} from '../../contextChat/index'

function useUsersChat(id){
    const [allUsers, setallUsers] = React.useState([]);

    useEffect(() => {
        apiClientUser
        .oneUserMatches(id,{status: 'done'})
        .then((users) => {
            setallUsers({
                allUsers: users.data
            })
        })
        .catch(()=> console.log('error'));
    }, []);

    return allUsers;
}

export default function Chat(props) {

    // CTX 
    const {allChats, sendChatAction, user} = React.useContext(CTX);
    const topics = Object.keys(allChats)

    // Local State
    const [textValue, changeTextValue] = React.useState('');
    const [activeTopic, changeActivetopic] = React.useState(topics[0])

    // Mis datos
    let allUsers = useUsersChat(props.user._id);
    return (
        allUsers.length !== 0 ?
        (
            <div className="contain"> 
            <div className="inFlex">
                <div className="allChats">
                    {topics.map((user, index) => {
                        return <button onClick={e => changeActivetopic(e.target.innerText)}> {user} </button>
                    })}
                </div>
                <div className="contextChat">
                    <div className="nameChat"> 
                        <img width="40" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>   
                        {activeTopic}
                    </div>
                    <div className="chat"> Chat 
                        { allChats[activeTopic].map((user, index) => {
                            return (
                                <div key={index} className="inFlex"> 
                                    <div> {user.from} </div>
                                    <div> {user.msg} </div>
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
                        onClick={() => {sendChatAction({from: user,msg: textValue, topic: activeTopic})
                                 changeTextValue('')}}> send </button>
                    </div>
                </div>
            </div>
        </div>
        )
        :
        <div> espera </div>
    );

}

/*
                    {allUsers.allUsers.map((user, index) => {
                        return <ItemChat index={index} user={user} />
                    })}

*/