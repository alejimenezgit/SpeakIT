import React from 'react';
import "./styles.scss";

export default class ItemChat extends React.Component {

    render(){
        const {index,user} = this.props;
        return <div key={index}> 
                    {user.state === 'done' &&
                        <div>
                            <img width="40" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                            {user.name}
                            <button> CHAT </button>
                        </div>
                    }
                </div>
    }
}
