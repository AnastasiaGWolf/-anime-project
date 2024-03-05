const indexRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
const { Anime } = require('../../db/models');

indexRouter.get('/', async (req, res) => {
  try {
    const { login } = req.session;
    const cards = await Anime.findAll({ raw: true });
    renderTemplate(Home, { cards, login }, res);
  } catch (error) {
    res.status(500);
  }
});

indexRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
});

module.exports = indexRouter;
