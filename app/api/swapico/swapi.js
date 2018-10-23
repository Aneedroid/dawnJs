'use strict';
const swapiHttp = require('../helpers/swapi-helper');

const getSwapi = async () => {
    return await swapiHttp.getSwapiData('/people/1');
};

module.exports = {
  getSwapi
};