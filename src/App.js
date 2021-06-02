import React from 'react';
import { Route, Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './App.css';
import { LoginForm, NavBar } from './components/molecules';
import { Pages } from './common/page.config';
import { ListViewEditPage, NerService } from './components/pages';

import styled from 'styled-components';

const WrapperContainer = styled.div
`
    width: 100%; 
    margin: auto   
`;

const MainContent = styled.div
`
    background: #ddd; 
    margin: auto;
    min-width: 950px;
    width: 950px; 
`;

const RouteGuard  = ({ Component, ...props }) => {

  const { userlogin: {isAuthenticated, role } } = useSelector(state=>state);  

  // check roles
  console.log('CHECK ROLES HERE')
  if (!isAuthenticated) {    
      return <Redirect to="/login" />;
  } 
  
  debugger
  if(!props.roles.includes(role)) {
    return <Redirect to="/unauthorized" />;
  }
  return (
      <Route
          {...props}
          component={routeProps => <Component {...routeProps} />}
      />
  );
};

function App() {
  const { userlogin: {isAuthenticated} } = useSelector(state=>state); 
    return (  
      <WrapperContainer>
        <MainContent>
        <Router>
          {isAuthenticated && <NavBar /> }
          <Switch>
              <Route  exact path="/login" component={LoginForm} />
              <RouteGuard path='/users' Component={() => <ListViewEditPage  page={Pages.users} />}  roles={['admin']}/>
              <RouteGuard path='/balances' Component={() => <ListViewEditPage  page={Pages.balances} />} roles={['admin']}/>
              <RouteGuard path='/services' Component={() => <ListViewEditPage  page={Pages.services} />} roles={['admin']}/>
              <RouteGuard path='/records' Component={() => <ListViewEditPage  page={Pages.records} />} roles={['admin']}/>
              <RouteGuard path='/myrecords' Component={() => <ListViewEditPage  page={Pages.myrecords} />} roles={['user']}/>
              <RouteGuard path='/newservice' Component={props => <NerService {...props} />} roles={['user']}/>
              <Route path='/unauthorized' component={() => <h3>Unauthorized</h3>} />
              <RouteGuard path='/' Component={() => <ListViewEditPage  page={Pages.users} />} roles={['admin']}/>
          </Switch>  
        </Router>
        </MainContent>
      </WrapperContainer>      
    );  
}

export default App;
