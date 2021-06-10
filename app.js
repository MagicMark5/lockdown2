const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'src')));

app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

module.exports = app;
