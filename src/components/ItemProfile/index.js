import React from 'react';
import "./styles.scss";

export default class ItemProfile extends React.Component {

    renderItemProfile = () => {
        const { user } = this.props;
        console.log(user);
        return (
            <div className="itemProfile">
                <img className="imgItem" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                <div>
                    <div className="itemName"> {user.name} Jimenez </div>
                    <div className="itemName"> {user.name} </div>
                    <div className="itemName"> {user.name} </div>
                </div>  
                <div 
                >
                    <div className="itemName"> {user.name} Jimenez </div>
                    <div className="itemName"> {user.name} </div>
                    <div className="itemName"> {user.name} </div>
                </div>  
            </div>
        );
    }

    render(){
        return this.renderItemProfile();
    }
}


