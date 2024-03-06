const errorRouter = require('express').Router();
const renderTemplate = require('../utils/renderTemplate');
const ErrorPage = require('../views/ErrorPage');

errorRouter.get('/', (req, res) => {
  const { login } = req.session;
  renderTemplate(ErrorPage, { login }, res);
});

module.exports = errorRouter;
