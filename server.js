'use strict';
const colors = require('colors');
const app = require('./app/app');
const config = require('./app/config');

// const server = app.listen(config.port); -- Fix this soon.
const PORT = process.env.PORT || 8090;
const server = app.listen(PORT, () => startUp());

const startUp = () => {
    console.log(colors.green(`INFO::server started on port ${PORT}`));
};

const shutDown = () => {
    console.log(colors.red('************ Shutting Down Server **************'));
};

process.once('SIGINT', shutDown);
process.once('SIGTERM', shutDown);
