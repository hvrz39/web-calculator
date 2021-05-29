import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { LoginForm, NavBar } from './components/molecules';
import { Pages } from './common/page.config';
import { ListViewEditPage } from './components/pages';

import styled from 'styled-components';

const WrapperContainer = styled.div
`
    width: 100%; 
    margin: auto   
`;

const MainContent = styled.div
`
    background: #ddd; 
    margin: auto,
    min-width: 500px
    
`;

const ProtectedPage = prop => {

  const { userlogin: {isAuthenticated} } = useSelector(state=>state);  

  if(!isAuthenticated) {
    return (
      <Router>
        <Switch>
            <Route  exact path="/login" component={LoginForm} />           
        </Switch>  
      </Router>
    );
  }

  return (
    <WrapperContainer>
     
        <NavBar />
        <MainContent  >
          <Router>
            <Switch>
              <Route exact path='/balance'  >
                <ListViewEditPage page={Pages.balances} />
              </Route>
              <Route exact  path='/users' >
                <ListViewEditPage page={Pages.users} />
              </Route>     
              <Route exact path='/services'  >
                <ListViewEditPage page={Pages.services} />
              </Route>  
              <Route exact path='/records'  >
                <ListViewEditPage page={Pages.records} />
              </Route>          
              <Route exact path='/' >
                <UserPage2 />
              </Route> 
            </Switch>
          </Router>
        </MainContent>
    </WrapperContainer>
  )
}



function UserPage2() {
  return (
    <div>
      User page2
    </div>
  )
}

function App() {
    return (        
      <Router>
        <Switch>
            <Route  path="/" component={ProtectedPage} /> 
            <Route  path="/login" component={LoginForm} /> 
        </Switch>  
      </Router>
    );  
}

export default App;
