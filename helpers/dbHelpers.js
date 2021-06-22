module.exports = (db) => {

  const getUsers = () => {
      const query = {
          text: 'SELECT * FROM users',
      };

      return db
          .query(query)
          .then((result) => result.rows)
          .catch((err) => err);
  };

  const getUserByEmail = email => {

      const query = {
          text: `SELECT * FROM users WHERE email = $1` ,
          values: [email]
      }

      return db
          .query(query)
          .then(result => result.rows[0])
          .catch((err) => err);
  }

  const getUserByUserName = username => {

    const query = {
        text: `SELECT * FROM users WHERE username = $1` ,
        values: [username]
    }

    return db
        .query(query)
        .then(result => result.rows[0])
        .catch((err) => err);
  }

  const addUser = (userName, avatar, email, password) => {
      const query = {
          text: `INSERT INTO users (username, avatar, email, password) VALUES ($1, $2, $3, $4) RETURNING *` ,
          values: [userName, avatar, email, password]
      }

      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
  }

  // Get all users and their game sessions
  const getUsersGames = () => {
    const query = {
        text: `SELECT users.id as user_id, username, avatar, email, game_sessions.id as game_id, samples, kills, score, shots, time, died, antidote, mode
        FROM users
        INNER JOIN game_sessions
        ON users.id = game_sessions.user_id`
    }

    return db.query(query)
        .then(result => result.rows)
        .catch(err => err);
  }

  // Get highscores ordered by descending scores
  const getHighscores = () => {
    const query = {
        text: `SELECT users.id as user_id, username, avatar, game_sessions.id as game_id, samples, kills, score, died, antidote, mode
        FROM users
        INNER JOIN game_sessions
        ON users.id = game_sessions.user_id
        ORDER BY score DESC
        LIMIT 10`
    }
    return db.query(query)
            .then(result => result.rows)
            .catch(err => err);
  }



    const getGames = () => {
        const query = {
            text: 'SELECT * FROM game_sessions',
        };

        return db
            .query(query)
            .then((result) => result.rows)
            .catch((err) => err);
    }

  // POST 'api/games' helper to insert gameData into game_sessions table
  const insertGameSession = (gameData, userID) => {
    // assemble SQL query parameters with gameData, which comes from req.body
    const {samples, kills, score, died, antidote, mode} = gameData;
    const queryParams = [
        samples,
        kills, 
        score, 
        died,
        antidote,
        mode, 
        userID
    ];
    // assemble sql query for insert into game_sessions table with params
    const queryString = `
    INSERT INTO game_sessions(samples, kills, score, died, antidote, mode, user_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7);
    `;
    // Insert into game_sessions and return db response
    return db.query(queryString, queryParams)
        .then((insertRes) => {
            console.log("Successful insertion", insertRes.rows);
            return insertRes.rows;
        })
        .catch((err) => console.error("query insert error:", err));
  }
  

  return {
      getUsers,
      getUserByEmail,
      getUserByUserName,
      addUser,
      getUsersGames,
      getHighscores,
      getGames,
      insertGameSession
  };
};