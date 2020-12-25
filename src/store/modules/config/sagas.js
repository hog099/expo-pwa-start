import { put, all, takeLatest, delay } from 'redux-saga/effects';

import { changeServerConfigSuccess } from './actions';
import { changeLoadingOff } from '../components/loading/actions';
import { alertMessage, clearAlert } from '../components/alert/actions';


export function* changeServerRequest({ payload }) {

    yield put(changeServerConfigSuccess(payload));
    // yield put(clearstorageandstate());
    yield put(changeLoadingOff());
    yield put(alertMessage('Atualizado Com Sucesso', 1));
    yield delay(3000)
    yield put(clearAlert());

}





export default all([
    takeLatest('@config/CHANGE_SERVER_REQUEST', changeServerRequest),
]);
