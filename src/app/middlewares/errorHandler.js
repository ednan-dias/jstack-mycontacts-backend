module.exports = (err, req, res, next) => {
  console.log('### Error Handler', err);
  res.sendStatus(500);
};
