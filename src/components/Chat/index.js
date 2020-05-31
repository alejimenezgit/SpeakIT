import React, { useEffect } from 'react';
import "./styles.scss";

import ItemChat from '../../components/ItemChat'

import apiClientUser from "../../services/users";



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
    const [textValue, changeTextValue] = React.useState('');
    let allUsers = useUsersChat(props.user._id);
    return (
        allUsers.length !== 0 ?
        (
            <div className="contain"> 
            <div className="inFlex">
                <div className="allChats">
                    {allUsers.allUsers.map((user, index) => {
                        return <ItemChat index={index} user={user} />
                    })}
                </div>
                <div className="contextChat">
                    <div className="nameChat"> Name</div>
                    <div className="chat"> Chat 
                        { [{from:'Alejandro', msg: 'Eres el puto amo'}].map((user, index) => {
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
                        <button> send </button>
                    </div>
                </div>
            </div>
        </div>
        )
        :
        <div> espera </div>
    );

}