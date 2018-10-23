'use strict';
const swapiApi = require('../api/swapico/swapi');

const getStarWarsData = async () => {
    return await swapiApi.getSwapi();
};

module.exports = {
  getStarWarsData
};