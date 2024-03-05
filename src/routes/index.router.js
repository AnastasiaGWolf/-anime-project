const indexRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Home = require('../views/Home');
const { Anime } = require('../../db/models');

indexRouter.get('/', async (req, res) => {
  try {
    const cards = await Anime.findAll({ raw: true });
    renderTemplate(Home, { cards }, res);
  } catch (error) {
    res.status(500);
  }
});

module.exports = indexRouter;
