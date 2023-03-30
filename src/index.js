require('dotenv/config');
require('express-async-errors');
const express = require('express');

const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const routes = require('./routes');

const app = express();

app.get('/', (req, res) => {
  console.log('Server is running');
  return res.send('Server is running');
});

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('Server is running at http://localhost:3001 🔥'));
