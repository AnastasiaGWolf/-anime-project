require('@babel/register');
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');
const apiRouter = require('./routes/api.router');

const app = express();
const { PORT } = process.env;

// * Middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', apiRouter);

app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, function () {
  console.log(`Server started on http://localhost:${this.address().port}`);
});
