import {fork} from 'redux-saga/effects';
import swapiSaga from './swapi-saga.js';

export default function* rootSaga() {
  yield [
    fork(swapiSaga)
  ];
}