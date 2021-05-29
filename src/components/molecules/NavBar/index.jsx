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
    overflow-y: auto; 
    color: white;
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
            <nav style={{ height: '60px', background: 'black', padding: '10px',  width: '100%' }}>
                 Logged as { username }
                <NavLink to='/users' onClick={() => history.push('/users')} >User Management </NavLink> | 
                <NavLink to="/balance" onClick={() => history.push('/balance')} >User Balance </NavLink> |
                <NavLink to="/services" onClick={() => history.push('/services')} >Services </NavLink> |
                <NavLink to="/records" onClick={() => history.push('/services')} >Records </NavLink> |
                <NavLink to="/myrecords" onClick={() => history.push('/services')} >My Records </NavLink> |
                <NavLink to='/' >user 2</NavLink> |
                <a onClick={onClickHandler}>Logout</a>
            </nav>          
        </NavContainer>
    )
}

export default NavBar;