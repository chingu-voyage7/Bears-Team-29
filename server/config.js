const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path: path.join(__dirname, '../.env')});

const env =
  ['test', 'production', 'development', 'staging'].indexOf(
    process.env.NODE_ENV,
  ) === -1
    ? 'development'
    : process.env.NODE_ENV;

const port = process.env.APP_PORT || 2205;

module.exports = {
  env,
  port,
  database: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    name: process.env.DB_NAME,
  },
};
