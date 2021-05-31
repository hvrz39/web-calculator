import { api, apiPaths } from './api';

class OperationService {
    requestService = params  =>  api().post(apiPaths.operations,  params).then(res => res.data);
}

export default OperationService;