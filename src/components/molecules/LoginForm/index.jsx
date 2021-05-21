import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';
import { TextField } from '../../atoms'
import Form from '../Form';

const LoginContainer = styled.div
`
    height: 100vh;
    width: 100%;   
    min-height: 100vh;
    display: flex;
    overflow-y: auto;        
`;

const LoginWrapper = styled.div
`
    margin: auto;
    padding: 10px;        
`;
const LoginCard = styled.div
`
    padding: 50px 60px;
    max-width: 420px;
    width: 100%;
    background: #fff
`;

const FormControl = styled.div
`   padding: 50px 60px;
    max-width: 420px;
`;    

const LoginForm = props => {   
    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginCard>
                    <FormControl>
                        <Form>
                            <TextField 
                                id={'username'}                               
                                autoFocus
                                name={'username'}                               
                                value={''}
                                onChange={f=>f}
                                label="Username"  /> 
                            <TextField 
                                id={'password'}                               
                                autoFocus
                                name={'password'}                               
                                value={''}
                                type="password"
                                onChange={f=>f}
                                label="Password"  /> 
                        
                            <Button text="Login" />    
                        </Form>
                    </FormControl>
                </LoginCard>
            </LoginWrapper>
        </LoginContainer>
    );
}

export default LoginForm;