
export function changeLoadingOn() {
    return {
        type: '@loading/LOADING_ON',
        payload: true
    };
}

export function changeLoadingOff() {
    return {
        type: '@loading/LOADING_OFF',
        payload: false
    };
}
