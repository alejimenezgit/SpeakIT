import React from 'react';
import "./styles.scss";

import ItemMatch from "../../components/ItemMatch"

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
            .oneUserMatches(this.props.user._id,{status: 'match'})
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
       console.log('state', this.state.allMatches);
       
       return this.state.allMatches.map((user, index) => {
            return  <ItemMatch index={index} user={user}/> 
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