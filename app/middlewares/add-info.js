'use strict';

const clientConfig = {
    baseURL: 'localhost:8090'
};

module.exports = (request, response, next) => {
    request.info = {
        config: new Buffer(JSON.stringify(clientConfig)).toString('BASE64')
    };

    return next();
};
