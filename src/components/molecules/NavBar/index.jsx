import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { userLogout } from '../../../redux/actions/userlogin.action';

const NavContainer = styled.div
`
    height: 100vh;
    width: 100%;   
    min-height: 100vh;
    display: flex;
    overflow-y: auto;        
`;

const NavBar = props => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { userlogin: { username, role} } = useSelector(s => s);

    function onClickHandler(e) {
        dispatch(userLogout())
        history.push('/');
    }

    return (
        <NavContainer>
            <nav>
                Logged as { role }
                <a href="#" onClick={onClickHandler}>Logout</a>
            </nav>
        </NavContainer>
    )
}

export default NavBar;