const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// Import database setup
const db = require('./db');
const dbHelpers = require('./helpers/dbHelpers')(db);
// Import custom routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// The directory to serve is 'dist' after we run 'npm run build'
app.use(express.static(path.join(__dirname, 'dist')));

// Define http request routes here
app.use('/', indexRouter);
app.use('/api/users', usersRouter(dbHelpers));

// Catch-all to serve index.html for any undefined routes 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = app;
