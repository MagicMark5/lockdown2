// Reformat the output of the queries for easier manipulation from the front-end.

const getGamesByUsers = (usersGames) => {
  const gamesByUsers = {};
  
  // keys of gamesByUsers {} will be user_id
  // This function returns Object.values of gamesByUsers, which will be as follows
  // { 
  //   userId, number
  //   username, ""
  //   avatar, ""
  //   email, ""
  //   games [] // array of game sessions the user has played
  // }

  // usersGames parameter will be a result.rows [] of users and game_sessions JOIN
  // game = {user_id, username, avatar, email, game_id, samples, kills, score, shots, time, died, antidote, mode}
  for (let game of usersGames) {
      if (!gamesByUsers[game.user_id]) {
          gamesByUsers[game.user_id] = {
              userId: game.user_id,
              username: game.username,
              avatar: game.avatar,
              email: game.email,
              games: [], // start a new games array for first game
          };
      }
      // update the games array for this user with game_sessions data
      gamesByUsers[game.user_id].games.push({
          id: game.game_id,
          samples: game.samples, // number, maximum 36 
          kills: game.kills,
          score: game.score, 
          shots: game.shots, 
          time: game.time, // seconds remaining in the game (starts from 300)
          died: game.died, // boolean if the player died
          antidote: game.antidote, // boolean if they won the game
          mode: game.mode // default to 'medium'
      });

  }

  return Object.values(gamesByUsers);
};

module.exports = {
  getGamesByUsers,
};