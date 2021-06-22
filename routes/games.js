const express = require('express');
const router = express.Router();

module.exports = ({
  getGames,
  insertGameSession
}) => {

  /* All routes here are mounted onto the 'api/games' router */

  /* GET all games with 'api/games' */
  router.get('/', (req, res) => {
    getGames()
        .then((games) => res.json(games))
        .catch((err) => res.json({
            error: err.message
        }));
  });

  
  /* POST 'api/games' to insert a new game session into db */
  router.post('/', (req, res) => {
    // const currentUserID = req.session.user_id;
    const currentUserID = Math.ceil(Math.random() * 5);

    // check if a current user is logged in
    // if (!currentUserID) {
    //   return res.redirect("/");
    // }

    const gameData = req.body;

    insertGameSession(gameData, currentUserID)
      .then((queryResponse) => res.json(queryResponse))
      .catch((err) => console.log("Insert error: ", err));
  });

    return router;
};
