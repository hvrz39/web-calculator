import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserService from './services/user.service';
import { useQuery, useQueryClient } from 'react-query'; 
import './App.css';
import {DataGrid} from './components/molecules';
import { LoginForm, NavBar } from './components/molecules';
import { UserManagementPage, UserBalanceManagementPage } from './components/pages';

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
//   const { 
//     data, 
//     isLoading, 
//     isFetching, 
//     isError, 
//     error 
// } = useQuery(
//         ['fetch-all-users'],            
//         () => fetchUser(), 
//         { 
//             staleTime: 2000,
//             keepPreviousData: true
//         }
//     );

    

  // const fetchUser = async () => {            
  //     return await userService.getAll({ });
  // } 
    
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
        {/* <PageContent></PageContent> */}
        
        <MainContent  >
        <Router>
          <Switch>
            <Route exact path='/balance'  >
                <UserBalanceManagementPage />
            </Route>
            <Route exact  path='/users' >
              <UserManagementPage />
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
