const pg = require('pg');
require('dotenv').config();

const env = process.env.NODE_ENV;

production

const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=disable`;
const dbConnection = env === 'development' ? connectionString : process.env.DATABASE_URL

const client = new pg.Client({
    connectionString: dbConnection,
});

if (env === 'development') {
    console.log( `Connected to ${process.env.DB_NAME} on ${process.env.DB_HOST}` );
} else if (env === 'production') {
    console.log( `Connected to ${process.env.DATABASE_URL} on ${env} mode` );
}

client.connect();

module.exports = client;