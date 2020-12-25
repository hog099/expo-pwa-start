export function clearAlert() {
    return {
        type: '@alert/CLEAR_ALERT',
    };
}

export function alertMessage(error, color) {
    return {
        type: '@alert/ALERT_ERROR_MESSAGE',
        payload: { messageAlert: error, colorMessageAlert: color }
    };
}

