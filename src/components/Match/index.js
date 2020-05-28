import React from 'react';
import "./styles.scss";

class Match extends React.Component {

    state = {
        allUsers: this.props.user.data.match
    }

    addUser = () => {
        console.log('add')
    }

    refuseUser = () => {
        console.log('refuse')
    }

    allMatches() {
       return this.state.allUsers.map((user,index) =>{
            return <div className="boxUser">  
                        {user.id} 
                        {user.status === 'Enviado' ?
                         <div> Enviado </div>  : 
                         <div> <button onClick={this.addUser()}> add </button> <button onClick={this.refuseUser}> refuse </button> </div>}
                   </div>
       })
    }

    renderMatch = () => {
        return (
            <div>
                <h1> All the matches </h1>
                {this.allMatches()}
            </div>
        );
    }

    render(){
        return this.renderMatch();
    }
}


export default Match; 