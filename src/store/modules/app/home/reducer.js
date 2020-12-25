import produce from 'immer';

const initialState = {
    data: [],
};

export default (state = initialState, { type, payload }) => {
    return produce(state, draft => {
        switch (type) {
            case '@home/EVENT_DATA_SUCCESS': {
                draft.data = payload;
                break;
            }

            default:
        }
    });
};
