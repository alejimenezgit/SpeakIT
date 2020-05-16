import React, { Component } from 'react';
import './App.css';

import Login from './views/Login';
import Register from './views/Register';
import MainPage from './views/MainPage';
import HomePage from './views/HomePage';
import AnonRoute from './components/AnonRoute';

import {Route,Switch} from "react-router-dom";

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

  handleLogin = ({ email, password }) => {
    apiClient
      .getUserLogin({ email, password })
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

  handleRegister = ({ name, surnames, email, password }) => {
    apiClient
      .getUserRegister({ name, surnames, email, password })
      .then(({ data: user }) => {
        console.log({ data: user })
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
            <AnonRoute exact path={'/login'} isLoggedIn={isLoggedIn}>
              <Login onLogin={this.handleLogin} /> 
            </AnonRoute>
            <AnonRoute exact path={'/register'} isLoggedIn={isLoggedIn}>
              <Register onRegister={this.handleRegister} />
            </AnonRoute>
            <Route path="/main" component={MainPage}/>
            <Route path="/" component={HomePage}/>
          </Switch>
        )}
      </div>
    )
  }
 
}

export default App;