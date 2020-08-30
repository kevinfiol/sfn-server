let config;

if (process.env.PROD !== undefined && process.env.PROD == 1)
    config = require('./config_prod.js');
else
    config = require('./config_dev.js');

module.exports = config;