import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';
import { TextField, Alert } from '../../atoms'
import Form from '../Form';
import { useMutation } from  'react-query';
import { AuthService } from '../../../services'
import useFormFields from '../../../hooks/userFormFields';
import { useDispatch, useSelector } from 'react-redux';
import * as userloginActions from '../../../redux/actions/userlogin.action';
import { useHistory  } from 'react-router-dom';

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
    max-width: 470px;
    width: 100%;
    background: #fff
`;

const FormControl = styled.div
`   padding: 50px 60px;
    max-width: 470px;
`;    
const AlertWrapper = styled.div
`   padding: .5em 0em;    
`;  

const LoginForm = props => {   
    
    const authService = new AuthService();    
    const [fields, setFields]  = useFormFields({ username: 'user1@tester.com', password: 'user1'});
    
    const signIn = async credentials => await authService.signin(credentials);  
    const { mutate: createToken, data, isError, isLoading, isSuccess, error } = useMutation(credentials => signIn(credentials));    

    const dispatch = useDispatch();    
    const userlogin = useSelector(state=> state.userlogin);        
    const history = useHistory();
    
    function onSubmitHandler(e) {
        e.preventDefault();
        const { username, password } = fields;
        const credentials =  {  username, password };
        createToken(credentials);        
        dispatch(userloginActions.userLoginLoad())
    }
   
    function redirect(role) {
        role === 'admin' ?
            history.push("/users") :
            history.push("/myrecords");
    }

    if(userlogin.isAuthenticated) {
        redirect(userlogin.role);
    }

    if(isSuccess && !userlogin.isAuthenticated) {     

        window.localStorage.access_token = data.access_token;
        window.localStorage.expiresIn = data.expiresIn;  
        dispatch(userloginActions.userLoginSuccess(data));
        const { role } = data;
        redirect(role);
    }    

    const signinLabel = isLoading ? 'Logining...' : 'Login';
    const disabledButton = isLoading || (!fields.username || !fields.password);

    return (
        <LoginContainer>
            <LoginWrapper>
                <LoginCard>                    
                    <FormControl>                       
                        { isError && <AlertWrapper><Alert text={'User or password incorrect'} /> </AlertWrapper>}
                        <Form onSubmit={onSubmitHandler}> 
                            <TextField 
                                id={'username'}                               
                                autoFocus
                                name={'username'}                               
                                value={fields.username}
                                disabled={isLoading}
                                onChange={setFields}
                                label="Username"  /> 
                            <TextField 
                                id={'password'}                               
                                disabled={isLoading}
                                name={'password'}                               
                                value={fields.password}
                                type="password"
                                onChange={setFields}
                                label="Password"  /> 
                        
                            <Button 
                                text={signinLabel}
                                width={'100%'}
                                disabled={disabledButton}
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