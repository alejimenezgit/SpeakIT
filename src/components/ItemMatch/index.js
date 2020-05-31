import React from 'react';
import "./styles.scss";

export default  class ItemMatch extends React.Component {

    render(){
        const {index,user, addUser, refuseUser } = this.props;
        return <div key={index}> 
                    {user.state !== 'match' && <img width="40" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>}
                    {user.state !== 'match' && user.name}
                    {user.state === 'pendiente' && <div> pendiente </div>}
                    {user.state === 'addOrNot' && 
                        <div> 
                            <div> 
                                <button onClick={()=>addUser(user.idCom)}> ADD </button> 
                            </div>
                            <div> 
                                <button onClick={()=>refuseUser(user.idCom)}> REFUSE </button> 
                            </div>
                        </div>
                    }
                </div>
    }
} 


