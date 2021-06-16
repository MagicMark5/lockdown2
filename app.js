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
const gamesRouter = require('./routes/games');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// The directory to serve is 'dist' after we run 'npm run build'
app.use(express.static(path.join(__dirname, 'dist')));



// Define http request routes here

/* GET index.html */
app.use('/', indexRouter);

/* route 'api/users'
  GET => fetch all registered user accounts from users table
  POST => create new user with checks for valid username and email
  GET 'api/users/games' => fetch all users data and their game sessions in a games array
  GET => 'api/users/highscores' => fetch top 10 game scores by username
*/
app.use('/api/users', usersRouter(dbHelpers));

/* route 'api/games'
  GET => fetch all game_sessions from game_sessions table
  POST => insert into game_sessions with request gameData and userID
*/
app.use('/api/games', gamesRouter(dbHelpers));

// Catch-all to serve index.html for any undefined routes 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

module.exports = app;
