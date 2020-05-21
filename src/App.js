import React, { Component } from 'react';
import {Switch} from "react-router-dom";
import './App.css';

import Login from './views/Login';
import Register from './views/Register';
import MainPage from './views/MainPage';
import HomePage from './views/HomePage';

import Header from './components/Header'
import AnonRoute from './components/AnonRoute';
import PrivateRoute from './components/PrivateRoute';

import AuthProvider from "./context/authContext";

class App extends Component {
  render(){
    return (
      <AuthProvider>
        <Header />
        <Switch>
            <AnonRoute     exact path={'/login'}    component={Login} />
            <AnonRoute     exact path={'/register'} component={Register} />
            <PrivateRoute  exact path={'/mainpage'} component={MainPage} />
            <AnonRoute     exact path={'/'}         component={HomePage} />
        </Switch>
      </AuthProvider>
    )
  }
}

export default App;