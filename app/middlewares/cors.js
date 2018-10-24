'use strict';

module.exports = async (request, response, next) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  //eslint-disable-next-line max-len
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
};
