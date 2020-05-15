import React, { Component } from 'react';
import './App.css';

import Login from './views/Login'
import Register from './views/Register'
import MainPage from './views/MainPage'
import AnonRoute from './components/AnonRoute'

import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

import apiClient from "./services/users";

class App extends Component {

  state = {
    isLoggedIn: false,
    user: null,
    isLoading: true,
  };

  componentDidMount() {
    apiClient
      .whouseris()
      .then((user) => {
        console.log(user, 'estas conectado');
        this.setState({
          isLoading: false,
          isLoggedIn: true,
          user,
        });
      })
      .catch((error) => {
        console.log('no estas conectado');
        this.setState({
          isLoading: false,
          isLoggedIn: false,
          user: null,
        });
      });
  }

  handleLogin = ({ username, password }) => {
    apiClient
      .login({ username, password })
      .then(({ data: user }) => {
        this.setState({
          isLoggedIn: true,
          user,
        });
      })
      .catch((error) => {
        this.setState({
          isLoggedIn: false,
          user: null,
        });
      });
  };


  render(){
    const { isLoggedIn, isLoading } = this.state;
    return (
      <div>
        {isLoading && <div> Loading.......</div>}
        {!isLoading && (
          <Switch>
            <Route path="/register" component={Register}/>
            <AnonRoute exact path={'/login'} isLoggedIn={isLoggedIn}>
              <Login onLogin={this.handleLogin} /> 
            </AnonRoute>
            <Route path="/login" component={Login}/>
            <Route path="/" component={MainPage}/>
          </Switch>
        )}
      </div>
    )
  }
 
}

export default App;