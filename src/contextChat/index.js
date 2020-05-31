import React, { useEffect } from 'react'
import io from 'socket.io-client';
import apiClientUser from "../services/users";
export const CTX = React.createContext();

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
    socket.emit('chat message', value)
}

 const iniState2 = {
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

let iniState = []

export default function Store(props){

    let allUsers = useUsersChat(props.user._id);

    if(allUsers.length !== 0){
        allUsers.allUsers.forEach((user,index) => {
            iniState[user.name] =  [    {from: '( Me )   =', msg: ' hello'},
                                        {from: '( Aron ) =', msg: ' hello Alejandro'},
                                        {from: '( Me )   =', msg: ' How are you?'},
                                        {from: '( Me )   =', msg: ' hello sony'}]
        });
    } 

    const [allChats, dispatch] = React.useReducer(reducer, iniState);

    if(!socket){
        socket = io(':3002');
        socket.on('chat message', function(msg){
            console.log(msg);
            dispatch({type:'RECEIVE_MESSAGE', payload: msg})
        })
    }
    
    const user = "ale";

    return (
        <CTX.Provider value={{allChats, sendChatAction, user,  }}>
            {props.children}
        </CTX.Provider>
    )
}
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