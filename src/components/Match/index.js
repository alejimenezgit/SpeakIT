import React from 'react';
import "./styles.scss";

import apiClientUser from "../../services/users";

export default class Match extends React.Component {

    state = {
        allMatches: [],
        isloading: false,
        error: false
    }

    componentDidMount() {
        this.setState({ isloading: true });
        apiClientUser
            .oneUserMatches(this.props.user._id)
            .then((users) => {
                this.setState({
                    allMatches: users.data,
                    isloading: false
                })
            })
            .catch(()=> this.setState({ error: true }))
    }

    addUser = (user) => {
        console.log(user)
    }

    refuseUser = () => {
        console.log('refuse')
    }
    
    allMatches() {
       console.log('state', this.state.allMatches, this.state.statusMatches);
       
       return this.state.allMatches.map((user, index) => {
            return <div key={index}> 
                        <img width="40" src="https://devshift.biz/wp-content/uploads/2017/04/profile-icon-png-898.png" alt="imgprofile"/>
                        {user.name}
                        {user.state}
                    </div>
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
