import { api, apiPaths } from './api';


class Services {

    getAll = params  => api().get(apiPaths.services, { params }).then(res => res.data)

    getById = id  =>  api().get(apiPaths.service.replace(':id', id), {}).then(res => res.data);

    create = params  =>  api().post(apiPaths.services,  params ).then(res => res.data);

    update = ({ id, ...params}) => api().put(apiPaths.service.replace(':id', id), params).then(res => res.data);

    remove = id => api().delete(apiPaths.service.replace(':id', id), {}).then(res => res.data);
}

export default Services