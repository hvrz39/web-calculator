import { api, apiPaths } from './api';


class Records {

    getAll = params  => api().get(apiPaths.records, { params }).then(res => res.data)

    getById = id  =>  api().get(apiPaths.record.replace(':id', id), {}).then(res => res.data);

    create = params  =>  api().post(apiPaths.records,  params ).then(res => res.data);

    update = ({ id, ...params}) => api().put(apiPaths.records.replace(':id', id), params).then(res => res.data);

    remove = id => api().delete(apiPaths.records.replace(':id', id), {}).then(res => res.data);
}

export default Records