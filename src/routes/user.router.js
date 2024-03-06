const userRouter = require('express').Router();
const { where } = require('sequelize');
const Account = require('../views/Account');
const {
  User, Favorites, Post, Anime,
} = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');

userRouter.get('/', async (req, res) => {
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

userRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    res.json(user);
  } catch (error) {
    res.status(500).redirect('/404');
  }
});

userRouter.put('/update', async (req, res) => {
  const { userId } = req.session;
  const { name, email } = req.body;

  try {
    const userUpdate = await User.update({
      name, email,
    }, { where: { id: userId } });
    // userUpdate.set({ name, email });
    // await userUpdate.save();
    res.json(userUpdate);
  } catch (error) {
    res.status(500);
  }
});

module.exports = userRouter;
