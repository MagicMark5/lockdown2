const express = require('express');
const router = express.Router();
const {
  getGamesByUsers
} = require('../helpers/dataHelpers');

module.exports = ({
  getUsers,
  getUserByEmail,
  getUserByUserName,
  addUser,
  getUsersGames, 
  getHighscores,
}) => {

  /* All routes here are prepended by the '/users' router */

  /* GET all users */
  router.get('/', (req, res) => {
      getUsers()
          .then((users) => res.json(users))
          .catch((err) => res.json({
              error: err.message
          }));
  });

  
  /* POST 'api/users' to create a new user account */
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
    });
    
    router.get('/games', (req, res) => {
      // GET 'api/users/games' returns all users and their game sessions
      // getUsersGames returns a JOIN of users and game_sessions tables
      // 'usersGames', which is then formatted by getGamesByUsers
      getUsersGames()
          .then((usersGames) => {
              console.log(usersGames);
              const formattedGames = getGamesByUsers(usersGames);
              // formattedGames will be an [] of values as follows
              /* 
              { 
                userId, number
                username, ""
                avatar, ""
                email, ""
                games [] // array of game sessions the user has played
              } 
              */
              res.json(formattedGames);
          })
          .catch((err) => res.json({
              error: err.message
          }));
    });

    router.get('/highscores', (req, res) => {
        // GET 'api/users/highscores'
        res.send("Hello! It works!");
        // getHighscores()
        //     .then((highscores) => {
        //         // returns array of top 10 game sessions ordered by score 
        //         res.json(highscores)
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         res.json({ error: err.message });
        //     });
    })

    return router;
};
