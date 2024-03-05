const loginRouter = require('express').Router();
const bcrypt = require('bcrypt');
const Login = require('../views/Login');
const renderTemplate = require('../utils/renderTemplate');

const { User } = require('../../db/models');

loginRouter.get('/', (req, res) => {
  renderTemplate(Login, {}, res);
});

loginRouter.post('/', async (req, res) => {
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
    res.status(500);
  }
});

module.exports = loginRouter;
