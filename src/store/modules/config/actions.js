export function ChangeEnvApiURL() {
    return {
        type: '@config/CHANGE_API_URL_ENV',
    };
}

export function changeServerConfigRequest(server) {
    return {
        type: '@config/CHANGE_SERVER_REQUEST',
        payload: server
    };
}

export function changeServerConfigSuccess(data) {
    return {
        type: '@config/CHANGE_SERVER_SUCCESS',
        payload: data
    };
}

export function clearstorageandstate() {
    return {
        type: '@config/CLEAR_STORAGE_AND_STATE'
    };
}

export function changeThemeStyle() {
    return {
        type: '@config/CHANGE_THEME'
    };
}
