const userRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const {
  User, Favorites, Post, Anime,
} = require('../../db/models');
const renderTemplate = require('../utils/renderTemplate');

userRouter.post('/registration', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({
      where: {
        [Op.or]: [
          { name },
          { email },
        ],
      },
    });

    if (user) {
      res.json({ msgErr: 'Пользователь с указанным именем или почтой уже существует' });
    } else {
      const hashPassword = await bcrypt.hash(password, 12);
      const newUser = await User.create({ name, email, password: hashPassword });
      req.session.login = newUser.name;
      req.session.userId = newUser.id;
      req.session.save(() => {
        res.json({ msgDone: 'Пользователь успешно зарегистрирован' });
      });
    }
  } catch (error) {
    res.json(error);
  }
});

userRouter.post('/login', async (req, res) => {
  try {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });
    if (!user) {
      res.json({ logErr: 'Пользователь не найден \nБудь внимателен к регистру' });
    } else {
      const checkPass = await bcrypt.compare(password, user.password);
      if (checkPass) {
        req.session.login = user.name;
        req.session.userId = user.id;
        req.session.save(() => {
          res.json({ logMsg: 'Пользователь вернулся! 😻😻😻' });
        });
      } else {
        res.json({ logErr: 'Введен не верный пароль 🙀' });
      }
    }
  } catch (error) {
    res.status(500).redirect('/404');
  }
});

userRouter.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('cookieName');
    res.redirect('/');
  });
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
