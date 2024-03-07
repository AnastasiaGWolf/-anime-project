const animeRouter = require('express').Router();
const AnimePage = require('../views/AnimePage');
const { Anime } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');

animeRouter.get('/:id', async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  try {
    const myAn = await Anime.findByPk(id);
    const response = await fetch(`https://api.jikan.moe/v4/anime/${myAn.external_key}`);
    const anime = await response.json();
    console.log(anime);
    renderTemplate(AnimePage, { login, anime }, res);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

module.exports = animeRouter;
