import produce from 'immer';

const initialState = {
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  return produce(state, draft => {
      switch (type) {
      case '@loading/LOADING_ON': {
        draft.loading = payload;
        break;
      }
      case '@loading/LOADING_OFF': {
        draft.loading = payload;
        break;
      }
      default:
    }
  });
};
