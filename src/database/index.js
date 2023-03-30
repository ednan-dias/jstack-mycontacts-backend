const { Client } = require('pg');

const {
  DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_DATABASE,
} = process.env;

const options = {
  host: DB_HOSTNAME,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
};

const client = new Client(options);

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
