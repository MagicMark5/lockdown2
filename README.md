# Lockdown (version 2.0.0)

# Play the game 

* [Here](https://lockdown-v2.herokuapp.com/)

## Develop the game 

#### Run Front-End Application for Development (No server connection)

Run `npm start` in the `client` folder from your command line.

This starts webpack-dev-server. Your browser will open and go to `http://localhost:8080`. The server will restart when any files in the src folder are changed and saved. Note that this is only for the purposes of developing the front-end. The app will not have access to any back-end routes or the database. But you can still play-through the game!  

#### Serve the full production application (Node/Express back-end & Phaser Front-End)

1) Run `npm run build` while in the `client` folder from the command line. 

* This will bundle the minified client code into a newly created `build` directory. 

2) Run `npm start` while in the root directory from your command line. 

* This run will run the back-end Node-Express app and serve the client/build directory at `http://localhost:3001` in your browser.

3) Go to `http://localhost:3001` to play the game on the server! (Note: Currently the highscores API is unavailable)

##### Notes
* This game was developed by a small team of contributors from [this](https://github.com/adamm13/lockdown) repository. The game was given a new repository to migrate the game away from a template and configure a webpack build process for hosting the game and adding new features (Additional React components, Highscores API, Options to play with a different Avatar, and more features continue to develop!). Thus, version 2.0.0 is born.
* The game is currently only playable on a desktop/laptop/tablet with a keyboard. Mobile support for game controls is still in development. 