const registrationRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const Registration = require('../views/Registration');
const renderTemplate = require('../utils/renderTemplate');

const { User } = require('../../db/models');

registrationRouter.get('/', (req, res) => {
  renderTemplate(Registration, {}, res);
});

registrationRouter.post('/', async (req, res) => {
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

module.exports = registrationRouter;
