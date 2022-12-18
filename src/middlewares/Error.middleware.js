function ErrorMiddleware(err, req, res, next) {
  console.error(err);
  res.status(err.code).send(err);
}

module.exports = ErrorMiddleware;
