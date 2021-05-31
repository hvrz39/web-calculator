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
    const { menuSettings, username } = useSelector(state => state.userlogin);

    function onClickHandler(e) {
        window.localStorage.access_token = ''
        window.localStorage.expiresIn = '';
        dispatch(userLogout())
        history.push('/login');
    }

    return (
        <NavContainer>
            <nav>
                 Logged as { username }
                 { menuSettings.map(({ menu, name }) => 
                    (
                        <NavLinkOption>
                            <NavLink to={`/${menu}`} >{name} </NavLink>  
                        </NavLinkOption>)
                 )}
                 <a onClick={onClickHandler}>Logout</a>
            </nav>          
        </NavContainer>
    )
}

export default NavBar;