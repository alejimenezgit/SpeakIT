import React from 'react';
import "./styles.scss";

import ItemMatch from "../../components/ItemMatch";
import Notification from "../../components/Notification";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

import apiClientUser from "../../services/users";
import apiClientComunications from "../../services/comunication";


export default class Match extends React.Component {

    state = {
        allMatches: [],
        isloading: false,
        error: false,
        toastAdd: false,
        toastDelete: false,
    }

    componentDidMount() {
        this.usersMatches();
    }

    addUser = (id) => {
        apiClientComunications
            .update(id, {status: 'match'})
            .then((result) => {
                this.setState({toastAdd: true});
                setTimeout(() => {
                    this.setState({toastAdd: false})
                },3000)
                this.usersMatches()})
            .catch(() => {})
    }

    refuseUser = (id) => {
        apiClientComunications
            .update(id, {status: 'delete'})
            .then((result) => {
                this.setState({toastDelete: true})
                setTimeout(() => {
                    this.setState({toastDelete: false})
                },3000)
                this.usersMatches()})
            .catch(() => {})
    }
    
    usersMatches = () => {
        console.log(this.props.user)
        this.setState({ isloading: true });
        apiClientUser
            .oneUserMatches(this.props.user._id,{status: 'match'})
            .then((users) => {
                this.setState({
                    allMatches: users.data,
                    isloading: false
                })
            })
            .catch(()=> this.setState({ error: true }))
    }

    allMatches() {
        return (
            <div className="bgMatches">
                <h1> Todos tus matches </h1>
                {this.state.allMatches.map((user, index) => {
                        return  <ItemMatch index={index} user={user} addUser={this.addUser} refuseUser={this.refuseUser}/> 
                })}
           </div>
       
       )
    }
    renderMatch = () => {
        const {isloading, error} = this.state;
        return  (
            <div>
                { this.state.toastAdd && 
                    <Notification bottom={35}>
                        Add User in Chat
                    </Notification>
                }
                { this.state.toastDelete && 
                    <Notification bottom={35}>
                        Delete User
                    </Notification>
                }
                {isloading && !error ? <Loading /> : this.allMatches()}
                {error && <Error />}
            </div>
        )
    }

    render(){
        return this.renderMatch();
    }
}