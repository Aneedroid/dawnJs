import { PUT_CONTENT } from '../actions/types';

const initialState = {
  contentString: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PUT_CONTENT:
      const newState = { ...state };
      newState.contentString = action.content;
      return newState;
    default:
      return state;
  }
};
