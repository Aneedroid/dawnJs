import { PUT_SWAPI } from '../actions/types';

const initialState = {
  swapiContent: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PUT_SWAPI: {
      const newState = { ...state };
      newState.swapiContent = action.swapi;
      return newState;
    }   
    default:
      return state;
  }
};
