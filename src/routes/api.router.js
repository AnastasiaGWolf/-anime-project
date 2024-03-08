const router = require('express').Router();
const userRouter = require('./user.router');
const indexRouter = require('./index.router');
const animeRouter = require('./anime.router');
const postRouter = require('./post.router');
const favoritesRouter = require('./favorites.router');

module.exports = router
  .use('/', indexRouter)
  .use('/users', userRouter)
  .use('/anime', animeRouter)
  .use('/posts', postRouter)
  .use('/favorites', favoritesRouter);
