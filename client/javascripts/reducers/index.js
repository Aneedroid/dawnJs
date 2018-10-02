import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import content from './content-reducer';

export const reducers = {
    content
};

export default combineReducers(reducers);
