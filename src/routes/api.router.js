const router = require('express').Router();
const indexRouter = require('./index.router');

module.exports = router
  .use('/', indexRouter);
