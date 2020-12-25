import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../../services/api';
import { functionsuccess } from './actions'
import { changeLoadingOff } from '../../components/loading/actions';


export function* GetDataSponRequest({ id_company }) {

    try {
        const response = yield call(api.get, `url/${id_company}`);
        // console.log('resp Spon Saga', response.data)
        yield put(changeLoadingOff());
        yield put(functionsuccess(response.data));
        
    } catch (error) {
        // console.log('res erro', error)
        yield put(changeLoadingOff());

    }

}



export default all([
    takeLatest('@home/EVENT_DATA_SUCCESS_REQUEST', GetDataSponRequest),
]);
