import produce from 'immer';

const initialState = {
    messageModal: null,
};

export default (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case '@modalConfirmBottom/SHOW_MODALCONFIRM': {
                draft.messageModal = payload;
                break;
            }
            case '@modalConfirmBottom/HIDE_MODALCONFIRM': {
                draft.messageModal = null;
                break;
            }
            default:
        }
    });
};
