import React from 'react';
import './App.css';

import MainPage from './views/MainPage'
import Header from './components/Header'

import { BrowserRouter as Router,Route,Switch} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
