import produce from 'immer';

const initialState = {
    showAlert: false,
    messageAlert: '',
    colorMessageAlert: 1,
};

export default (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            //   case '@auth/SIGN_IN_REQUEST': {
            //     draft.loading = true;
            //     break;
            //   }
            case '@alert/SEARCH_CITY_FAIL': {
                draft.messageAlert = payload.messageAlert;
                draft.colorMessageAlert = payload.colorMessageAlert;
                draft.showAlert = true;
                break;
            }
            case '@alert/CLEAR_ALERT': {
                draft.messageAlert = '';
                draft.colorMessageAlert = 1;
                draft.showAlert = false;
                break;
            }
            case '@alert/SIGN_FAILURE': {
                draft.messageAlert = payload.messageAlert;
                draft.colorMessageAlert = 3;
                draft.showAlert = true;
                break;
            }
            case '@alert/ALERT_ERROR_MESSAGE': {
                draft.messageAlert = payload.messageAlert;
                draft.colorMessageAlert = payload.colorMessageAlert;
                draft.showAlert = true;
                break;
            }
            default:
        }
    });
};
