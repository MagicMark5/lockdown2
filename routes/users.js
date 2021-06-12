var express = require('express');
var router = express.Router();
const {
  getGamesByUsers
} = require('../helpers/dataHelpers');

module.exports = ({
  getUsers,
  getUserByEmail,
  getUserByUserName,
  addUser,
  getUsersGames
}) => {

  /* All routes here are prepended by the '/users' router */

  /* GET users listing. */
  router.get('/', (req, res) => {
      getUsers()
          .then((users) => res.json(users))
          .catch((err) => res.json({
              error: err.message
          }));
  });

  router.get('/games', (req, res) => {
    // 'api/users/games' route
    // getUsersGames returns a JOIN of users and game_sessions tables
    // 'usersGames', which is then formatted by getGamesByUsers
    getUsersGames()
        .then((usersGames) => {
            const formattedGames = getGamesByUsers(usersGames);
            // formattedGames will be an [] of values as follows
            // { 
            //   userId, number
            //   username, ""
            //   avatar, ""
            //   email, ""
            //   games [] // array of game sessions the user has played
            // }
            res.json(formattedGames);
        })
        .catch((err) => res.json({
            error: err.message
        }));
  });

  router.post('/', (req, res) => {

      const {
          username,
          avatar,
          email,
          password
      } = req.body;

      //Check if email already exists
      getUserByEmail(email)
        .then(user => {
            if (user) {
                res.json({
                    msg: 'Sorry, a user account with this email already exists'
                });
            } else {  
                // If email is available, check if username already exists
                getUserByUserName(username)
                .then(user => {
                    if (user) {
                        res.json({
                            msg: 'Sorry, a user account with this username already exists'
                        });
                    } else {
                        // If email and username are available, addUser into the db
                        return addUser(username, avatar, email, password)
                    }
                });
            }

        })
        .then(newUser => res.json(newUser))
        .catch(err => res.json({
            error: err.message
        }));

  })

  return router;
};
