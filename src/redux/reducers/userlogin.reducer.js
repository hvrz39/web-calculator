import { USER_LOGIN_LOADING, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../actions/userlogin.action';


const initialState = {
    isAuthenticated: false,
    username: '',
    role: ''
}

const userlogin = (state=initialState, action) => {

    const { type, payload } = action;

    switch(type) {
        case USER_LOGOUT:
        case USER_LOGIN_LOADING: {
            return initialState;
        }
        case USER_LOGIN_SUCCESS: {
            return {
                ...payload,
                isAuthenticated: true 
            };
        }
        default:
            return state;
    }
}

export default userlogin;