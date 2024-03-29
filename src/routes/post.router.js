const postRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const Posts = require('../views/Posts');
const PostPage = require('../views/PostPage');
const { User, Post } = require('../../db/models');
const { checkUser } = require('../middlewares/common');

postRouter.get('/:id', checkUser, async (req, res) => {
  const { login } = req.session;
  const { id } = req.params;

  try {
    const article = await Post.findByPk(id);
    renderTemplate(PostPage, { login, article, scriptName: '/js/postUpdate.js' }, res);
  } catch (error) {
    console.error(`Error get post for update: ${error}`);
    res.status(500);
  }
});

postRouter.get('/anime/:id', checkUser, async (req, res) => {
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

postRouter.post('/new', async (req, res) => {
  const { userId } = req.session;
  const { title, body, anime } = req.body;
  try {
    const newPost = await Post.create({
      author: userId, title, body, anime: anime || null,
    });
    console.log(newPost);
    res.json({ msgDone: 'Пост сохранен и опубликован' });
  } catch (error) {
    console.error(`Error in create post ===> ${error}`);
    res.status(500).json({ msgErr: 'Не удалось сохранить пост' });
  }
});

postRouter.put('/edit/:id', async (req, res) => {
  const { userId } = req.session;
  const { title, body, anime } = req.body;
  const { id } = req.params;
  console.log(id);

  try {
    const postUpdate = await Post.update({
      author: userId, title, body, anime: anime || null,
    }, { where: { id } });

    if (postUpdate) {
      res.json({ msg: 'Статья обновлена' });
    }
  } catch (error) {
    console.error(error);
    res.status(500);
  }
});

postRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Post.destroy({ where: { id } });
    res.json({ msgDone: 'Пост успешно удален' });
  } catch (error) {
    console.error(`Ошибка при удалении поста ===> ${error}`);
    res.status(500).json({ msgErr: 'Не удалось удалить пост' });
  }
});

module.exports = postRouter;
