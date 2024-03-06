const indexRouter = require('express').Router();
const { secureRoute } = require('../middlewares/common');
const renderTemplate = require('../utils/renderTemplate');
const Account = require('../views/Account');
const ErrorPage = require('../views/ErrorPage');
const Home = require('../views/Home');
const Registration = require('../views/Registration');
const Login = require('../views/Login');
const {
  User, Favorites, Post, Anime,
} = require('../../db/models');

indexRouter.get('/', async (req, res) => {
  try {
    const { login } = req.session;
    const cards = await Anime.findAll({ raw: true });
    renderTemplate(Home, { cards, login }, res);
  } catch (error) {
    res.status(500);
  }
});

indexRouter.get('/registration', secureRoute, (req, res) => {
  renderTemplate(Registration, {}, res);
});

indexRouter.get('/login', secureRoute, (req, res) => {
  renderTemplate(Login, {}, res);
});

indexRouter.get('/account', async (req, res) => {
  const { login, userId } = req.session;
  try {
    const user = await User.findByPk(userId);

    const favorites = await Favorites.findAll({
      include: [{
        model: Anime,
        attributes: ['title', 'picture'],
      }],
      where: { user_id: userId },
    });

    const posts = await Post.findAll({ where: { author: userId } });
    renderTemplate(Account, {
      login, user, favorites, posts,
    }, res);
  } catch (error) {
    res.status(500);
  }
});

indexRouter.get('/404', (req, res) => {
  const { login } = req.session;
  renderTemplate(ErrorPage, { login }, res);
});

// indexRouter

module.exports = indexRouter;
