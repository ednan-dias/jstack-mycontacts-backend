require('express-async-errors');
const express = require('express');

const { networkInterfaces } = require('os');
const cors = require('./app/middlewares/cors');
const errorHandler = require('./app/middlewares/errorHandler');

const routes = require('./routes');

const nets = networkInterfaces();

console.log(nets);

const app = express();

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => console.log('🔥 Server is running at http://localhost:3001'));
