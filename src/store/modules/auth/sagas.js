import { call, put, all, takeLatest, delay } from 'redux-saga/effects';

import api from '../../../services/api';
import { changeLoadingOff, signInRequest, signInSuccess, ableAcess, signFailure, signOut, setCityToAcess } from './actions';

import { alertMessage, clearAlert } from '../components/alert/actions';


export function* signUp({ payload }) {
    try {
        const { id_city, name, birthday, accepted_terms_of_use, email, password } = payload;

        const response = yield call(api.post, 'users', { id_city, name, birthday, accepted_terms_of_use, email, password });
        //   if(response){
        //       console.log(response)
        // }
        yield put(changeLoadingOff());
        yield put(signInRequest(email, password));

    } catch (error) {
        // console.log('Registration failed, check your data.');
        yield put(changeLoadingOff());
        if (error.response.data.error) {
            yield put(signFailure(error.response.data.error));
            yield delay(3000)
            yield put(clearAlert());
        }else{
            yield put(signFailure('Falha ao registrar, tente novamente.'));
            yield delay(3000)
            yield put(clearAlert());
        }
    }
}

export function* signUpSponRequest({ payload }) {
    try {
        const { email, password } = payload;
        // console.log('asdas', payload)

        const response = yield call(api.post, 'companies', payload);
        // console.log(response.data)
        
        yield put(changeLoadingOff());
        yield put(signInRequest(email, password));

    } catch (error) {
        // console.log('Registration failed, check your data.');
        yield put(changeLoadingOff());
        if (error.response.data.error) {
            yield put(signFailure(error.response.data.error));
            yield delay(3000)
            yield put(clearAlert());
        }else{
            yield put(signFailure('Falha ao registrar, tente novamente.'));
            yield delay(3000)
            yield put(clearAlert());
        }
    }
}

export function* signIn({ payload }) {
    const { email, password } = payload;

    try {
        const response = yield call(api.post, 'sessions', { email, password });
        // console.log('session', response.data)
        const { token, user } = response.data;
        api.defaults.headers.Authorization = `Bearer ${token}`;
        
        yield put(setCityToAcess(user.city));
        yield put(changeLoadingOff());
        yield put(signInSuccess(token, user));
        
    } catch (error) {
        yield put(changeLoadingOff());
        // console.log('error session', error)

        if (error.response.status == 500) {
            yield put(signFailure('Erro ao realizar Login, Sem Conexão com Servidor'));
        }else if (error.response) {
            yield put(signFailure(error.response.data.error));
        }else {
            yield put(signFailure('Erro ao realizar Login, Sem Conexão com Servidor'));
        }
        yield delay(3000)
        yield put(clearAlert());
    }
}

export function* signOutRequest() {
    yield put(signOut());
    // yield put(changeCity());
    yield put(ableAcess(false));
}


export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }

}




export function* forgetPasswordRequest({ payload }) {

    try {
        const response = yield call(api.post, 'session/forgetpassword', {email: payload});
        // console.log('Forget', response.data)
        yield put(alertMessage(response.data.message, 1));
        yield put(changeLoadingOff());        
        yield delay(3000)
        yield put(clearAlert());
        
    } catch (error) {
        // console.log('Forget Error', error);
        yield put(changeLoadingOff());
        
        if (error.response.status == 500) {
            yield put(alertMessage('Erro ao realizar Operação, Sem Conexão com Servidor', 2));
        }else if (error.response) {
            yield put(alertMessage(error.response.data.error, 3));
        }else {
            yield put(alertMessage('Erro ao realizar Operação, Sem Conexão com Servidor', 3));
        }
        yield delay(3000)
        yield put(clearAlert());
    }

}





export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SIGN_IN_REQUEST', signIn),
    takeLatest('@auth/SIGN_UP_REQUEST', signUp),
    takeLatest('@auth/SIGN_OUT_REQUEST', signOutRequest),
    takeLatest('@auth/SIGN_UP_SPON_REQUEST', signUpSponRequest),,
    takeLatest('@auth/FORGET_PASSWORD_REQUEST', forgetPasswordRequest),
]);
