import { api, apiPaths } from './api';


class MyRecords {

    getAll = params  => api().get(apiPaths.myrecords, { params }).then(res => res.data)

    getById = id  =>  api().get(apiPaths.myrecord.replace(':id', id), {}).then(res => res.data);

    create = params  =>  api().post(apiPaths.myrecords,  params ).then(res => res.data);

    update = ({ id, ...params}) => api().put(apiPaths.myrecord.replace(':id', id), params).then(res => res.data);

    remove = id => api().delete(apiPaths.myrecord.replace(':id', id), {}).then(res => res.data);
}

export default MyRecords