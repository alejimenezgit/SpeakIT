import React, { useEffect } from 'react'
import io from 'socket.io-client';
import apiClientUser from "../services/users";
import apiClientComunications from "../services/comunication"
export const CTX = React.createContext();

function useUsersChat(id){

}

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
        .catch(()=> console.log('error'));

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
    console.log(props.user)
    const user =  props.user.name;
    console.log(isloading)
    if(!isloading){
        return (
            <CTX.Provider value={{allChats, sendChatAction, user, idComunication}}>
                {props.children}
            </CTX.Provider>
        )
    }else  
        return 'loading'
}



// retener mi estado mientras mapeamos en un chat que 
// recibimos y renderizar la pagina para que el aparezca
// con un tema sobre el objeto como este

/*
    msg {
        from: 'user',
        msg: 'hi',
        user: 'user1
    }

    state {
        user1: [ { msg }, { msg }, { msg }],
        user2: [ { msg }, { msg }, { msg }, { msg } ]
    }


    msg {
        from: 'user',
        msg: 'hi',
        topic: 'general'
    }

    state {
        general: [ { msg }, { msg }, { msg }],
        topic2: [ { msg }, { msg }, { msg }, { msg } ]
    }
*/



/* const iniState = {
    general: [
        {from: '( Me )   =', msg: ' hello'},
        {from: '( Aron ) =', msg: ' hello Alejandro'},
        {from: '( Me )   =', msg: ' How are you?'},
        {from: '( Me )   =', msg: ' hello sony'}
    ],
    topic2: [
        {from: '( Aron ) =', msg: ' hello'},
        {from: '( Me )   =', msg: ' hello Alejandro'},
        {from: '( Aron ) =', msg: ' by'}
    ]
}
*/



/*
             let iniState = {}
            if(users.data.allUsers.length !== 0) {
                users.data.allUsers.forEach((user,index) => {
                    iniState[user.name] =  [{from: '( Aron ) =', msg: ' hello'},
                                           {from: '( Aron ) =', msg: ' hello'}]
                });
                setallUsers({
                    allUsers: iniState
                })
            } else {
                iniState = []
            }
            
*/