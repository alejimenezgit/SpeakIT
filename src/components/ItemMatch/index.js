import React from 'react';
import "./styles.scss";

import apiClientUser from "../../services/users";
import apiClientComunications from "../../services/comunication";

export default  class ItemMatch extends React.Component {

    addUser = (id) => {
        console.log(id);
        apiClientComunications
            .update(id, {status: 'match'})
            .then((result) => {this.updateAllMatches()})
            .catch(() => {})
    }

    

    refuseUser = () => {
        console.log('refuse')
    }

    updateAllMatches = () => {
        apiClientUser
            .oneUserMatches(this.props.user._id,{status: 'match'})
            .then((users) => {
                this.setState({
                    allMatches: users.data,
                    isloading: false
                })
                console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuusers', users.data)
            })
            .catch(()=> this.setState({ error: true }))
    }

    render(){
        const {index,user} = this.props;
        return <div key={index}> 
                    {user.state !== 'match' && <img width="40" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>}
                    {user.state !== 'match' && user.name}
                    {user.state === 'pendiente' && <div> pendiente </div>}
                    {user.state === 'addOrNot' && 
                        <div> 
                            <div> 
                                <button onClick={() => this.addUser(user.idCom)}> ADD </button> 
                            </div>
                            <div> 
                                <button onClick={() => this.refuseUser(user.idCom)}> REFUSE </button> 
                            </div>
                        </div>
                    }
                </div>
    }
} 


