module.exports = (err, req, res, next) => {
  console.log('### Error Handler');
  console.log(err);
  res.sendStatus(500);
};
