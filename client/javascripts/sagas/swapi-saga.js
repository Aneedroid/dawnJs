import { takeEvery, put, call } from 'redux-saga/effects';
import { GET_SWAPI_DATA } from '../actions/types';
import { putSwapiToState } from '../actions';
import { getSwapi } from '../api/swapi';

export const getSwapiData = function* () {
  try {
    const swapi = yield call(getSwapi);
    yield put(putSwapiToState(swapi));
  }
  catch (error){
    yield put(putSwapiToState(null));
  }
};

export default function* navSaga() {
  yield takeEvery(GET_SWAPI_DATA, getSwapiData);
}