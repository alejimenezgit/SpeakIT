import React from 'react';
import './App.css';

import Login from './views/Login'
import Register from './views/Register'
import MainPage from './views/MainPage'

import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={MainPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;