import React from 'react';
import "./styles.scss";

import ItemChat from '../../components/ItemChat'

import apiClientUser from "../../services/users";

class Chat extends React.Component {

    state = {
        allMatches: [],
        isloading: false,
        error: false
    }

    componentDidMount() {
        this.setState({ isloading: true });
        this.updateAllMatches();
    }

    updateAllMatches = () => {
        console.log('aasdasdfasd')
        apiClientUser
            .oneUserMatches(this.props.user._id,{status: 'done'})
            .then((users) => {
                this.setState({
                    allMatches: users.data,
                    isloading: false
                })
                console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuusers', users.data)
            })
            .catch(()=> this.setState({ error: true }))
    }

    allMatches() {
        return this.state.allMatches.map((user, index) => {
             return <ItemChat index={index} user={user} />
        })
     }

    renderChat = () => {
        const {isloading, error} = this.state;
        return  (
            <div>
                <h1> Todos tus matches </h1>
                {isloading && !error ? <div> espera </div> : this.allMatches()}
                {error && <div> error </div>}
            </div>
        )
    }

    render(){
        return this.renderChat();
    }
}


export default Chat; 