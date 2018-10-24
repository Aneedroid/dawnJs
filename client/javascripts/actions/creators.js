import {
  PUT_CONTENT,
  PUT_SWAPI,
  GET_SWAPI_DATA,
} from 'client/javascripts/actions/types';

export const putContentToState = content => {
  return { type: PUT_CONTENT, content };
};

export const putSwapiToState = swapi => {
  return { type: PUT_SWAPI, swapi };
};

export const getSwapi = () => {
  return { type: GET_SWAPI_DATA };
};