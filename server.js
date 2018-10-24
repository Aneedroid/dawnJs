'use strict';
const colors = require('colors');
const app = require('./app/app');

// const server = app.listen(config.port); -- Fix this soon.
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => startUp());

const startUp = () => {
  console.log(colors.green(`INFO::server started on port ${PORT}`)); // eslint-disable-line no-console, max-len
};

const shutDown = () => {
  console.log(colors.red('************ Shutting Down Server **************')); // eslint-disable-line no-console, max-len
};

process.once('SIGINT', shutDown);
process.once('SIGTERM', shutDown);
