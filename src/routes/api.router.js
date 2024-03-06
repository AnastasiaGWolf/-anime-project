const router = require('express').Router();
const userRouter = require('./user.router');
const indexRouter = require('./index.router');
const animeRouter = require('./anime.router');

module.exports = router
  .use('/', indexRouter)
  .use('/users', userRouter)
  .use('/anime', animeRouter);
