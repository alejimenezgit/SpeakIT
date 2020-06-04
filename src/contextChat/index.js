import React, { useEffect } from 'react'
import io from 'socket.io-client';

import Loading from "../components/Loading";
import Error from "../components/Error";

import apiClientUser from "../services/users";

export const CTX = React.createContext();

function reducer(state, action){
    const {from,msg,topic,id} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return { 
                [topic] : [
                    ...state[topic],
                    {chat : {from,msg,topic,id }}
                ]
            }
        case 'NOTHING':
            return {}
        default:
            return state;
    }
}

let socket;

function sendChatAction (value) {
    socket.emit('chat message', value)
}

let iniState = [];  


export default function Store(props){

    const [allUsers, setallUsers] = React.useState([]);
    const [isloading, setLoading] = React.useState(true);
    const [isError, setError] = React.useState(false);
    const [allChats, dispatch] = React.useReducer(reducer, iniState);
    let idComunication = [];

    

    useEffect(() => {
         function getApiUsers() {
            apiClientUser
            .oneUserMatches(props.user._id,{status: 'done'})
            .then((users) => {
                setallUsers(users.data);
                setLoading(false)
            })
            .catch(()=> setError(true));
        }
         getApiUsers();

         return () => {
            dispatch({type:'NOTHING', payload: ""})
            iniState = []
            setallUsers([])
            socket = false
         }
    },[props.user._id]);

    if(allUsers.length > 0){
        allUsers.forEach((user,index) => {
            iniState[user.name] =  user.chat
        });
        allUsers.forEach((user,index) => {
            idComunication[user.name] =  user.idCom
        });
    } 

    if(!socket){
        socket = io(':3002');
        socket.on('chat message', function(msg){
            dispatch({type:'RECEIVE_MESSAGE', payload: msg})
        })
    }

    const user =  props.user.name;
    if(!isloading && !isError){
        return (
            <CTX.Provider value={{allChats, sendChatAction, user, idComunication}}>
                {props.children}
            </CTX.Provider>
        )
    }else if (isloading)  
        return <Loading />
    else if (isError)
        return <Error />
}
