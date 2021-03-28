const env = require('env-smart');
env.load();

const config = {
    port: process.env.PORT,
    database: {
        client: process.env.DATABASE_CLIENT, // prod: pg, dev: sqlite3
        useNullAsDefault: true,
        connection: process.env.DATABASE_URL || {
            filename: process.env.DATABASE_FILENAME
        },
        migrations: {
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeds'
        }
    },
    services: {
        steam_service: {
            url: 'https://steam-serv.herokuapp.com'
        }
    }
};

module.exports = config;