import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';
import { TextField, Alert } from '../../atoms'
import Form from '../Form';
import { useMutation } from  'react-query';
import { AuthService } from '../../../services/'

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

    const authService = new AuthService();    
    const { mutate, data, isError, isLoading, isSuccess, isFetching } = useMutation(credentials => signIn(credentials));    
    const signIn = async credentials => await authService.signin(credentials);      

    function onSubmitHandler(e) {
        e.preventDefault();
        const credentials =  {  username: 'rzhoraciov@gmail.com', password: 'adminx' };
        mutate(credentials);
    }
   
    const signinLabel = isLoading ? 'Logining...' : 'Login';

    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginCard>                    
                    <FormControl>
                        { isError && <Alert text={'User not found or incorrect password'} /> }
                        <Form> 
                            <TextField 
                                id={'username'}                               
                                autoFocus
                                name={'username'}                               
                                value={''}
                                disabled={isLoading}
                                onChange={f=>f}
                                label="Username"  /> 
                            <TextField 
                                id={'password'}                               
                                disabled={isLoading}
                                name={'password'}                               
                                value={''}
                                type="password"
                                onChange={f=>f}
                                label="Password"  /> 
                        
                            <Button 
                                text={signinLabel}
                                disabled={isLoading}
                                onClick={onSubmitHandler}
                                 />    
                        </Form>
                    </FormControl>
                </LoginCard>
            </LoginWrapper>
        </LoginContainer>
    );
}

export default LoginForm;