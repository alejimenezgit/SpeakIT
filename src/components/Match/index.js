import React from 'react';
import "./styles.scss";

import ItemMatch from "../../components/ItemMatch"

import apiClientComunications from "../../services/comunication";
import apiClientUser from "../../services/users";

export default class Match extends React.Component {

    state = {
        allMatches: [],
        isloading: false,
        error: false
    }

    componentDidMount() {
        this.usersMatches();
    }

    addUser = (id) => {
        console.log(id);
        apiClientComunications
            .update(id, {status: 'match'})
            .then((result) => {this.usersMatches()})
            .catch(() => {})
    }

    

    refuseUser = () => {
        console.log('refuse')
    }
    
    usersMatches = () => {
        this.setState({ isloading: true });
        console.log('props', this.props)
        apiClientUser
            .oneUserMatches(this.props.user._id,{status: 'match'})
            .then((users) => {
                console.log(users);
                this.setState({
                    allMatches: users.data,
                    isloading: false
                })
                console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuusers', users.data)
            })
            .catch(()=> this.setState({ error: true }))
    }

    allMatches() {
       console.log('state', this.state.allMatches);
       
       return this.state.allMatches.map((user, index) => {
            return  <ItemMatch index={index} user={user} addUser={this.addUser} refuseUser={this.refuseUser}/> 
       })
    }
    renderMatch = () => {
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
        return this.renderMatch();
    }
}