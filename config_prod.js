const config = {
    port: process.env.PORT,
    database: {
        client: 'pg',
        useNullAsDefault: true,
        connection: process.env.DATABASE_URL,
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