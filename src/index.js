require('express-async-errors');
const express = require('express');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);
app.use((err, req, res, next) => {
  console.log('### Error Handler');
  console.log(err);
  res.sendStatus(500);
});

app.listen(3333, () => console.log('🔥 Server is running at http://localhost:3333'));
