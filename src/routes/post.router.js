const postRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Posts = require('../views/Posts');
const { User, Post } = require('../../db/models');

postRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { login, userId } = req.session;
  try {
    const allPostsAnime = await Post.findAll({
      include: [{
        model: User,
        attributes: ['name'],
      }],
      where: { anime: id },
    });
    renderTemplate(Posts, { login, userId, posts: allPostsAnime }, res);
  } catch (error) {
    console.error(error);
    res.status(500).redirect('/404');
  }
});

module.exports = postRouter;
