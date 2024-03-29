const animeRouter = require('express').Router();
const AnimePage = require('../views/AnimePage');
const { Anime } = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');
const { checkUser } = require('../middlewares/common');

animeRouter.get('/:id', checkUser, async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;
  try {
    const myAn = await Anime.findByPk(id);
    const response = await fetch(`https://api.jikan.moe/v4/anime/${myAn.external_key}`);
    const anime = await response.json();
    renderTemplate(AnimePage, { login, anime, myAn }, res);
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

animeRouter.post('/new', async (req, res) => {
  const { external_key, title, picture } = req.body;
  try {
    await Anime.create({ external_key, title, picture });
    res.json({ msg: 'Anime добавлено' });
  } catch (error) {
    console.error(error);
    res.json({ msg: 'Anime уже есть на сайте' });
  }
});

module.exports = animeRouter;
