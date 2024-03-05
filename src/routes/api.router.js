const router = require('express').Router();
const { secureRoute } = require('../middlewares/common');
const indexRouter = require('./index.router');
const loginRouter = require('./login.router');
const registrationRouter = require('./registration.router');

module.exports = router
  .use('/', indexRouter)
  .use('/registration', secureRoute, registrationRouter)
  .use('/login', secureRoute, loginRouter);
