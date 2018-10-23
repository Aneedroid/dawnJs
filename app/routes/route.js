'use strict';
const express = require('express');
const router = express.Router();
const swapi = require('../service/swapi');

router.get('/heroes', async (req, res, next) => {
    const fruitsList = ['Batman','Flash','Wolverine','Rajinikanth'];
    try {
        return res.json(fruitsList);
    }
    catch (err) {
        next(err);
    }
});

router.get('/swapico', async (req, res, next) => {
    try {
        return res.json(await swapi.getStarWarsData());
    }
    catch (err) {
        next(err);
    }
});


module.exports = router;