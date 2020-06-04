import React from 'react';
import "./styles.scss";
import { withAuth } from '../../context/authContext';


export default  class Videochat extends React.Component {

    state = {
        userTo: this.props.location.state.user,
        me: this.props.user._id
    }

    renderChat = () => {
        const { userTo, me} = this.state;
        console.log('Id del chat que queremos hablar: ', userTo );
        console.log('Mi id: ', me )
        return (
            <div className="container">
                Chat
            </div>
        );
    }

    checkRoute = () =>{
        
    }

    render(){
        return  this.renderChat()
    }
}