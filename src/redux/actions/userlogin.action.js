export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGOUT = 'USER_LOGIN_LOGOUT';
export const USER_LOGIN_LOADING = 'USER_LOGIN_LOADING';

export const userLogout = () => ({ type: USER_LOGOUT });
export const userLoginLoad  = () => ({ type: USER_LOGIN_LOADING });
export const userLoginSuccess = payload => ({ type: USER_LOGIN_SUCCESS, payload });

