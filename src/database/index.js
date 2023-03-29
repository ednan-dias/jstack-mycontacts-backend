const { Client } = require('pg');

let options = {};

console.log(process.env.NODE_ENV);

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
    host: 'mycontacts-database.cfeiyls03gl2.sa-east-1.rds.amazonaws.com',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'mycontacts',
  };
}

console.log({ options });

const client = new Client(options);

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
