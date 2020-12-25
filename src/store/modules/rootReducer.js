import { combineReducers } from 'redux';

import config from './config/reducer';
import alert from './components/alert/reducer';
import loading from './components/loading/reducer';
import modalBottomConfirm from './components/modalBottomConfirm/reducer';
import auth from './auth/reducer';
import user from './user/reducer';
import home from './app/home/reducer';


export default combineReducers({
    alert,
    config,
    loading,
    modalBottomConfirm,
    user,
    auth,
    home,
});


// export default rootReducer = (state, action) => {
//     if (action.type === '@config/CLEAR_STORAGE_AND_STATE') {
//         // for all keys defined in your persistConfig(s)
//         // storage.removeItem('persist:otherKey')
//         // async () => await AsyncStorage.removeItem('persist:achadosapp')
//         async () => await persistReducers.flush();

//         state = undefined;
//     }
//     return appReducer(state, action)
//   }

