import { api, apiPaths } from './api';


class UserBalanceService {

    getAllBalance = params  => api().get(apiPaths.userbalances, { params }).then(res => res.data)

    getBalance = id  =>  api().get(apiPaths.userbalance.replace(':id', id), {}).then(res => res.data);

    create = params  =>  api().post(apiPaths.userbalances,  params ).then(res => res.data);

    update = ({ id, ...params}) => api().put(apiPaths.user.replace(':id', id), params).then(res => res.data);

    remove = id => api().delete(apiPaths.user.replace(':id', id), {}).then(res => res.data);
}

export default UserBalanceService