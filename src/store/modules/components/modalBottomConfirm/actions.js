
export function showModalConfirmOn(msg) {
    return {
        type: '@modalConfirmBottom/SHOW_MODALCONFIRM',
        payload: msg
    };
}

export function showModalConfirmOff() {
    return {
        type: '@modalConfirmBottom/HIDE_MODALCONFIRM'
    };
}
