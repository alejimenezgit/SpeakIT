import React from 'react';
import "./styles.scss";

export default  class ItemMatch extends React.Component {

    render(){
        const {index,user, addUser, refuseUser } = this.props;
        return <div key={index} className="match"> 
                    {user.state !== 'match' && 
                        <div>
                            <div>
                                <img className="imgMatch" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                            </div>
                            <div>
                                <div className="itemMatch mName"> {user.name} </div>
                                <div className="itemMatch mSurname"> {user.surnames} </div>
                            </div> 
                        </div>
                    }
                    {user.state === 'pendiente' && <div> Waiting for a response... </div>}
                    {user.state === 'addOrNot' && 
                        <div> 
                            <div> 
                                <button onClick={()=>addUser(user.idCom)}> Add user </button> 
                            </div>
                            <div> 
                                <button onClick={()=>refuseUser(user.idCom)}> Refuse user </button> 
                            </div>
                        </div>
                    }
                </div>
    }
} 


