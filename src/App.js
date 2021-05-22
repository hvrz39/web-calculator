import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './App.css';

import { LoginForm, NavBar } from './components/molecules'

function App() {
  const { userlogin: {isAuthenticated} } = useSelector(state=>state);
  console.log('App lebel', isAuthenticated)
  if(!isAuthenticated) {
    return (
      <Router>
        <Switch>
            <Route  exact path="/" component={LoginForm} />           
        </Switch>  
      </Router>
    );
  }
  else {
    return (  
      
      <Router>
        <Switch>
            <Route  exact path="/dashboard" component={NavBar} /> 
            <Route  exact path="/" component={LoginForm} /> 
        </Switch>  
      </Router>
    );
  }
}

export default App;
