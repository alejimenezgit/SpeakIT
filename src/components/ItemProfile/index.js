import React from 'react';
import "./styles.scss";

export default class ItemProfile extends React.Component {

    renderItemProfile = () => {
        const { user, index, action } = this.props;
        return (
            <div key={index} className="itemProfiles">
                <img className="imgItem" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                <div>
                    <div className="itemProfile pName"> {user.name} </div>
                    <div className="itemProfile pSurname"> {user.surnames} </div>
                </div>  
                <div>
                    <button onClick={() => action(user)} className="buttonMatch"> MATCH </button>
                </div>
            </div>
        );
    }

    render(){
        return this.renderItemProfile();
    }
}


