const { Client } = require('pg');

console.log({ host: process.env.RDS_HOSTNAME });

let options = {};

if (process.env.NODE_ENV === 'DEV') {
  options = {
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'mycontacts',
  };
} else if (process.env.NODE_ENV === 'PROD') {
  options = {
    host: process.env.RDS_HOSTNAME,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    port: process.env.RDS_PORT,
    database: 'mycontacts',
  };
}

const client = new Client(options);

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
