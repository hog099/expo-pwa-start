import { all } from 'redux-saga/effects';


import auth from './auth/sagas';
import config from './config/sagas';
import user from './user/sagas';
import home from './app/home/sagas';

export default function* rootSaga() {
  return yield all([
      auth,
      user,
      config,
      home
]);
}
