import { api, apiPaths } from './api';


class AuthService {

     signin = params  => api().post(apiPaths.signin,  params)
    
}

export default AuthService;