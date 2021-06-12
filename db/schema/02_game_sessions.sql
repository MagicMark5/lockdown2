DROP TABLE IF EXISTS game_sessions CASCADE;

CREATE TABLE game_sessions(
    id SERIAL PRIMARY KEY NOT NULL,
    samples INTEGER NOT NULL,
    kills INTEGER NOT NULL,
    score INTEGER NOT NULL, 
    shots INTEGER NOT NULL,
    time INTEGER NOT NULL, 
    died BOOLEAN NOT NULL, 
    antidote BOOLEAN NOT NULL, 
    mode VARCHAR(255) NOT NULL DEFAULT "medium",
    user_id INTEGER REFERENCES users(id)
);