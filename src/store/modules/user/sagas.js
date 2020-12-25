import { call, put, all, takeLatest, delay } from 'redux-saga/effects';
// import { delay } from 'redux-saga/utils';

import api from '../../../services/api';
import { getUserDataSuccess, getAddressSuccess, getCitiesSuccess, getStatesSuccess, verifyUserNameSuccess, verifyUserNameFailure, clearVerifyUserName, userUpdateSuccess } from './actions';
import { signOutRequest } from '../auth/actions';
import { changeLoadingOff } from '../components/loading/actions';
import { alertMessage, clearAlert } from '../components/alert/actions';


export function* registerPushTokenRequest({ payload }) {
  
    try {
        yield call(api.post, `pushnoti/registertoken`, payload);
        // console.log('response', response.data)
        yield put(changeLoadingOff());
        // yield put(getUserDataSuccess(response.data));
        // yield put(userUpdateSuccess(response.data)); // Entra em loop

    } catch (error) {
        // console.log('error', error)
        // yield put(changeLoadingOff());
        if (error.response.data.error) {
            // console.log('error', error.response.data.error)
            // yield put(alertMessage(error.response.data.error, 3));
            // delay(500, yield put(clearAlert()));
        } else {
            // yield put(alertMessage('Erro ao captar Dados de perfil do usuário', 3));
            // delay(500, yield put(clearAlert()));

        }

    }
}



export function* userDataRequest({ id, token }) {
    const headers = {
        authorization: `Bearer ${token}`
    }

    try {
        const response = yield call(api.get, `users/getData/${id}`, headers);
        // console.log('response', response.data)
        yield put(changeLoadingOff());
        yield put(getUserDataSuccess(response.data));
        // yield put(userUpdateSuccess(response.data)); // Entra em loop

    } catch (error) {
        // console.log('error', error)
        // yield put(changeLoadingOff());
        if (error.response.data.error) {
            // yield put(alertMessage(error.response.data.error, 3));
            // delay(500, yield put(clearAlert()));
        } else {
            // yield put(alertMessage('Erro ao captar Dados de perfil do usuário', 3));
            // delay(500, yield put(clearAlert()));

        }

    }
}



export function* getAddressRequest({ payload }) {

    const urlviacep = `https://viacep.com.br/ws/${payload}/json/`;

    try {
        const response = yield call(api.get, urlviacep);
        // console.log('resp viacep', response.data);
        yield put(getAddressSuccess(response.data));

    } catch (error) {
        alert('Sem Resposta do ViaCep')
        // console.log('error', error);
        // console.log('error', error.response.data.error);
    }
}


export function* getCitiesRequest({ payload }) {
    try {
        const response = yield call(api.post, 'config/cities', { uf: payload });
        // console.log('resp spons', response.data);
        yield put(getCitiesSuccess(response.data));

    } catch (error) {
        // console.log('error', error);
        // console.log('error', error.response.data.error);
    }
}


export function* getStatesRequest() {
    try {
        const response = yield call(api.get, 'config/states');
        // console.log('resp spons', response.data);
        yield put(getStatesSuccess(response.data));

    } catch (error) {
        // console.log('error', error);
        // console.log('error', error.response.data.error);
    }
}







export function* verifyUserNameRequest({ payload }) {
    const headers = {
        authorization: `Bearer ${payload.token}`
    }
    const values = {
        id_user: payload.id_user,
        username: payload.username,
    }

    try {
        const response = yield call(api.post, 'avaliableUserName', values, headers);
        yield put(verifyUserNameSuccess(response.data.message));
        // console.log('retorno', response.data.message)
        yield delay(3000)
        yield put(clearVerifyUserName());

    } catch (error) {
        if (error.response.data.error) {
            yield put(verifyUserNameFailure(error.response.data.error));
            yield delay(3000)
            yield put(clearVerifyUserName());
            // console.log('error', error.response.data.error);
        } else {
            // console.log('error');
            yield delay(3000)
            yield put(clearVerifyUserName());
        }
    }

}

export function* userUpdateRequest({ token, userLogged, values }) {
    const headers = {
        // accept: 'application/json',
        'Content-Type': 'multipart/form-data',
        authorization: `Bearer ${token}`,
    }
    try {
        const response = yield call(api.put, `users/${userLogged.id}`, values, headers);
        // console.log('cheguei aqui')
        // console.log('retorno', response)
        // console.log('retorno', response.data)
        yield put(userUpdateSuccess(response.data));
        yield put(changeLoadingOff());
        yield put(alertMessage('Atualizado Com Sucesso', 1));
        yield delay(3000)
        yield put(clearAlert());

        // history.push('AccountConfigUser');

    } catch (error) {
        // console.log('error', error);
        if (error.response.data.error) {
            yield put(alertMessage(error.response.data.error, 3));
            yield delay(3000)
            yield put(clearAlert());
            // console.log('error01', error.response.data.error);
        } else {
            yield put(alertMessage('Falha na Operação', 3));
            yield delay(3000)
            yield put(clearAlert());
            // console.log('error03');
        }
        yield put(changeLoadingOff());
    }

}



export function* userChangeEmailRequest({ token, values }) {
    const headers = {
        authorization: `Bearer ${token}`,
    }
    // console.log('DATAAAA', values)
    try {
        yield call(api.post, 'users/changeemail', values, headers);

        yield put(changeLoadingOff());
        yield put(alertMessage('Atualizado Com Sucesso', 1));
        yield delay(3000)
        yield put(clearAlert());
        yield put(signOutRequest());

    } catch (error) {
        // console.log('error00', error);
        if (error.response.data.error) {
            yield put(alertMessage(error.response.data.error, 3));
            yield put(changeLoadingOff());
            yield delay(3000)
            yield put(clearAlert());
            // console.log('error01', error.response.data.error);
        } else {
            yield put(alertMessage('Falha na Operação', 3));
            yield put(changeLoadingOff());
            yield delay(3000)
            yield put(clearAlert());
            // console.log('error03');
        }
    }

}



export function* userChangePasswordRequest({ token, values }) {
    const headers = {
        authorization: `Bearer ${token}`,
    }

    try {
        yield call(api.post, 'users/changepassword', values, headers);

        yield put(changeLoadingOff());
        yield put(alertMessage('Atualizado Com Sucesso', 1));
        yield delay(3000)
        yield put(clearAlert());
        yield put(signOutRequest());

    } catch (error) {
        // console.log('error01', error.response.data.errors[0]);        
        if (error.response.data.errors) {
            let errors = error.response.data.errors;
            let message = '';
            for (let index = 0; index < errors.length; index++) {
                if(index>0) message += ' | ';
                message += `${errors[index]}`
            }
            yield put(alertMessage(message, 3));
            yield delay(3000)
            yield put(clearAlert());
            // console.log('error01', error.response.data.error);
        } else {
            yield put(alertMessage('Falha na Operação', 3));
            yield delay(3000)
            yield put(clearAlert());
            // console.log('error03');
        }
        yield put(changeLoadingOff());
    }

}





export default all([
    takeLatest('@user/SEND_REGISTER_TOKEN_PUSH_NOTIFICATION', registerPushTokenRequest),
    takeLatest('@user/GET_USERDATA_REQUEST', userDataRequest),
    takeLatest('@user/GET_ADDRESS_REQUEST', getAddressRequest),
    takeLatest('@user/GET_STATES_REQUEST', getStatesRequest),
    takeLatest('@user/GET_CITIES_REQUEST', getCitiesRequest),
    takeLatest('@user/VERIFY_USERNAME_REQUEST', verifyUserNameRequest),
    takeLatest('@user/USER_UPDATE_REQUEST', userUpdateRequest),
    takeLatest('@user/USER_CHANGEEMAIL_REQUEST', userChangeEmailRequest),
    takeLatest('@user/USER_CHANGEPASSWORD_REQUEST', userChangePasswordRequest),
]);
