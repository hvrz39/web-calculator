import { api, apiPaths } from './api';


class UserService {
    
    getAll = params  => api().get(apiPaths.users, { params }).then(res => res.data)

    getById = id => api().get(apiPaths.user.replace(':id', id), {}).then(res => res.data);
    
}

export default UserService