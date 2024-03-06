require('@babel/register');
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const cors = require('cors');

const app = express();
const { PORT, SESSION_SECRET } = process.env;

const apiRouter = require('./routes/api.router');

const sessionConfig = {
  name: 'cookieName',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Mellon',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 1000 * 60 * 60,
    httpOnly: true,
  },
};

const corsConfig = {
  origin: [],
  credentials: true,
}

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));
app.use(cors(corsConfig));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', apiRouter);

app.get('/*', (req, res) => {
  res.redirect('/404');
});

app.listen(PORT, function () {
  console.log(`Server started on http://localhost:${this.address().port}`);
});
