import { api, apiPaths } from './api';


class AuthService {

     signin = params  => api().post(apiPaths.signin,  params).then(res => res.data)
    
}

export default AuthService;