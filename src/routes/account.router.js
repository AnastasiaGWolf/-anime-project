const accountRouter = require('express').Router();
const Account = require('../views/Account');
const {
  User, Favorites, Post, Anime,
} = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');

accountRouter.get('/', async (req, res) => {
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

    console.log(favorites);
    const posts = await Post.findAll({ where: { author: userId } });
    renderTemplate(Account, {
      login, user, favorites, posts,
    }, res);
  } catch (error) {
    res.status(500);
  }
});

module.exports = accountRouter;
