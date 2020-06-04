import React from 'react';
import "./styles.scss";

export default  class ItemMatch extends React.Component {

    render(){
        const {user, addUser, refuseUser } = this.props;
        return <div className="match"> 
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
                    {user.state === 'pendiente' && <div className="wait"> Waiting for a response... </div>}
                    {user.state === 'addOrNot' && 
                        <div className="response"> 
                            <div> 
                                <button className="buttonResponse" onClick={()=>addUser(user.idCom)}> Add user </button> 
                            </div>
                            <div> 
                                <button  className="buttonResponse" onClick={()=>refuseUser(user.idCom)}> Refuse user </button> 
                            </div>
                        </div>
                    }
                </div>
    }
} 


