import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { userLogout } from '../../../redux/actions/userlogin.action';

const NavContainer = styled.div
`
    width: 100%;     
    display: flex;   
    color: white;   
    background: #3979A7;   
`;

const NavLinkOption = styled.div
`
    margin-top: 10px;
    padding: 1.5em .1em;
    display: inline;
`;

const NavBar = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userlogin: { username, role} } = useSelector(s => s);

    function onClickHandler(e) {
        window.localStorage.access_token = ''
        window.localStorage.expiresIn = '';
        dispatch(userLogout())
        history.push('/login');
    }

    return (
        <NavContainer>
            <nav>
                 {/* Logged as { username } */}
                 <NavLinkOption>
                    <NavLink to='/users' onClick={() => history.push('/users')} >Users </NavLink>  
                 </NavLinkOption>
                 <NavLinkOption>
                    <NavLink to="/balance" onClick={() => history.push('/balance')} >Balances </NavLink> 
                 </NavLinkOption>
                <NavLink  to="/services" onClick={() => history.push('/services')} >Services </NavLink> 
                <NavLink to="/records" onClick={() => history.push('/services')} >Records </NavLink> 
                <NavLink to="/myrecords" onClick={() => history.push('/services')} >My Records </NavLink>                 <a onClick={onClickHandler}>Logout</a>
            </nav>          
        </NavContainer>
    )
}

export default NavBar;