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

  const addUser = (userName, avatar, email, password) => {
      const query = {
          text: `INSERT INTO users (username, avatar, email, password) VALUES ($1, $2, $3, $4) RETURNING *` ,
          values: [userName, avatar, email, password]
      }

      return db.query(query)
          .then(result => result.rows[0])
          .catch(err => err);
  }

  const getUsersGames = () => {
      const query = {
          text: `SELECT users.id as user_id, username, avatar, email, game_sessions.id as game_id, score, died
      FROM users
      INNER JOIN game_sessions
      ON users.id = game_sessions.user_id`
      }

      return db.query(query)
          .then(result => result.rows)
          .catch(err => err);

  }

  return {
      getUsers,
      getUserByEmail,
      addUser,
      getUsersGames
  };
};