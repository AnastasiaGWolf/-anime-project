const router = require('express').Router();
const { secureRoute } = require('../middlewares/common');
const userRouter = require('./user.router');
const indexRouter = require('./index.router');
const loginRouter = require('./login.router');
const registrationRouter = require('./registration.router');
const errorRouter = require('./error.router');

module.exports = router
  .use('/', indexRouter)
  .use('/registration', secureRoute, registrationRouter)
  .use('/login', secureRoute, loginRouter)
  .use('/account', userRouter)
  .use('/404', errorRouter);
