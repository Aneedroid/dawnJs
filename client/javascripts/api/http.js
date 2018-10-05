import axios from 'axios';
// import config from 'client/javascripts/config';

const http = axios.create({
  baseURL: 'https://swapi.co/api',
  headers: {
    Accept: 'application/json'
  }
});

http.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return Promise.reject(error);
});

export default http;
