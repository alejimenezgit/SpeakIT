import React, { useEffect } from 'react'
import io from 'socket.io-client';

import Loading from "../components/Loading";
import Error from "../components/Error";

import apiClientUser from "../services/users";
import apiClientComunications from "../services/comunication"

export const CTX = React.createContext();

function reducer(state, action){
    console.log(action.payload, 'PAAAAYLOAD')
    const {from,msg,topic,id} = action.payload;


    const a = {...state};
    console.log(a,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    const b = {[topic]: [...state[topic], {chat :{from,msg,topic,id}}]}
    console.log(b,'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb')

    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return { 
                [topic] : [
                    ...state[topic],
                    {chat :
                        {
                        from,
                        msg,
                        topic,
                        id
                    }
                    }
                    
                ]
            }
        default:
            return state;
    }
}

let socket;

function sendChatAction (value) {
    console.log('valooooooooooooooooooooooooooooor',value)
    apiClientComunications
            .pushComunication(value.id, {chat: value})
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
         async function getApiUsers() {
             
            apiClientUser
            .oneUserMatches(props.user._id,{status: 'done'})
            .then((users) => {
                setallUsers(users.data);
                setLoading(false)
            })
            .catch(()=> setError(true));
        }
         getApiUsers();
    },[]);

    if(allUsers.length !== 0){
        allUsers.forEach((user,index) => {
            iniState[user.name] =  user.chat
        });
        allUsers.forEach((user,index) => {
            idComunication[user.name] =  user.idCom
        });
    } 

    const [allChats, dispatch] = React.useReducer(reducer, iniState);
    console.log(allChats, 'beforeeeeeeeeeeee reduceeeeeeeeeee')

    if(!socket){
        socket = io(':3002');
        socket.on('chat message', function(msg){
            console.log('reciveee del socket' ,msg);
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
