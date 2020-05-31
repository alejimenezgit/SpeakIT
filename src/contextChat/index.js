import React from 'react'

const CTX = React.createContext();


// retener mi estado mientras mapeamos en un chat que 
// recibimos y renderizar la pagina para que el aparezca
// con un tema sobre el objeto como este

/*
    msg {
        from: 'user',
        msg: 'hi'
    }

    state {
        user1: [ { msg }, { msg }, { msg }],
        user2: [ { msg }, { msg }, { msg }, { msg } ]
    }

*/


function reducer(state, action){
    switch(action.type){
        case 'RECEIVE_MESSAGE':
            return {
               ...state, 
               [action.payload.topic] : {
                   ...state[action.payload.user]
               }
            }
        defau
    }
}

export default function Store(props){

    const reducerHook = React.useReducer(reducer, iniState);

    return (
        <CTX.Provider value={}>
            {props.children}
        </CTX.Provider>
    )
}