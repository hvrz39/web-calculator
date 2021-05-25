import { api, apiPaths } from './api';


class UserService {
    
    getAll = params  => api().get(apiPaths.users, { params }).then(res => res.data)

    getById = id => api().get(apiPaths.user.replace(':id', id), {}).then(res => res.data);

    getAllBalance = params  => api().get(apiPaths.userbalances, { params }).then(res => res.data)
    
}

export default UserService