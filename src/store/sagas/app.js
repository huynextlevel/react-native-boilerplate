import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as actions from '../actions';
import * as appActions from '../action/app';
import * as ApiService from '../../services/api';

export function* loginSaga(action) {
  try {
    // Call API
    // const response = yield call(ApiService.login, action.payload.values);
    // Mock response
    const response = {
      status: 200,
      data: { id: 1, success: true, message: 'Success' },
    };

    if (response.status === 200) {
      yield put(appActions.saveLoginData(response.data));
      action.payload.navigation.navigate('Main');
    }
  } catch (err) {
    console.log(err.response);
  }
}

export default function* userSagas() {
  yield all([takeEvery(actions.Login, loginSaga)]);
}
