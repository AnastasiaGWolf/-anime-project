const animeRouter = require('express').Router();
const AnimePage = require('../views/AnimePage');
const { Anime } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');

animeRouter.get('/:id', async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  try {
    const animeInfo = await Anime.findByPk(id);
    renderTemplate(AnimePage, { login, anime: animeInfo }, res);
  } catch (error) {
    res.status(500);
  }
});

module.exports = animeRouter;
