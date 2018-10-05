import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import content from './content-reducer';
import swapi from './swapi-reducer';

export const reducers = {
    content,
    swapi
};

export default combineReducers(reducers);
