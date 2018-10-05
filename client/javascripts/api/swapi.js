import http from './http';

export const getSwapi = () => {
  return http.get('/people/1').then(res => res.data);
};