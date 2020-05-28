import React from 'react';
import "./styles.scss";

import apiClientUser from "../../services/users";

export default class Match extends React.Component {

    state = {
        allMatches: [],
        isloading: '',
        error: ''
    }

    componentDidMount() {
        this.setState({ isloading: true });
        apiClientUser
            .oneUserMatches(this.props.user._id)
            .then((matches) => this.setState({
                allMatches: matches.data.match,
                isloading: false
            }))
            .catch(()=> this.setState({ error: true }))
    }

    addUser = (user) => {
        console.log(user)
    }

    refuseUser = () => {
        console.log('refuse')
    }
    
    allMatches() {
       return this.state.allMatches.map((user,index) =>{
            return <div key={index} className="boxUser">  
                        {user._id} 
                        {user.status === 'Enviado' && <div> Enviado </div> }
                        {user.status === 'pendiente' && 
                            <div> 
                                <button onClick={() => this.addUser(user)}> add </button> 
                                <button onClick={this.refuseUser}> refuse </button> 
                            </div> 
                        }
                   </div>
       });
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
