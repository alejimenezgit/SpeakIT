import React, { useEffect } from 'react'
import io from 'socket.io-client';

import Loading from "../components/Loading";
import Error from "../components/Error";

import apiClientUser from "../services/users";
import apiClientComunications from "../services/comunication"

export const CTX = React.createContext();

function reducer(state, action){
    const {from,msg,topic} = action.payload;
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
               ...state, 
               [topic] : [
                   ...state[topic],
                   {
                       from,
                       msg
                   }
               ]
            }
        default:
            return state;
    }
}

let socket;

function sendChatAction (value) {
    console.log(value)
    apiClientComunications
            .update(value.id, {chat: value})
            .then((result) => console.log('chat guardado'))
            .catch(() => {})
    socket.emit('chat message', value)
}

let iniState = [];
let idComunication = []

export default function Store(props){

    const [allUsers, setallUsers] = React.useState([]);
    const [isloading, setLoading] = React.useState(true);
    const [isError, setError] = React.useState(false);

    useEffect(() => {
        let unmounted = false;
        apiClientUser
        .oneUserMatches(props.user._id,{status: 'done'})
        .then((users) => {
            if(!unmounted){
                setallUsers(users.data);
            }
            setLoading(false)
        })
        .catch(()=> setError(true));

        return () => {
            unmounted = true;
        }
    },[]);

    if(allUsers.length !== 0){
        allUsers.forEach((user,index) => {
            iniState[user.name] =  user.chat
        });
        allUsers.forEach((user,index) => {
            idComunication[user.name] =  user.idCom
        });
        console.log('idsCOm:',idComunication)
    } 

    const [allChats, dispatch] = React.useReducer(reducer, iniState);

    if(!socket){
        socket = io(':3002');
        socket.on('chat message', function(msg){
            console.log(msg);
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
