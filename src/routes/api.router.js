const router = require('express').Router();
const indexRouter = require('./index.router');
const registrationRouter = require('./registration.router');

module.exports = router
  .use('/', indexRouter)
  .use('/registration', registrationRouter);
