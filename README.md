# Lockdown (version 2.0.0)

## How to Use 

### Run Front-End code for Development (Independent from Express back-end)

Run `npm run devClient` in the project root directory.

This starts webpack-dev-server. Your browser will open and go to `http://localhost:8080`. The server will restart when any files in the src folder are changed and saved. Note that this is only for the purposes of developing the front-end. The app will not have access to any back-end routes or the database. 

### Serve the full application (Node/Express back-end & Phaser Front-End)

1) Run `npm run server` 
* This command will bundle the client-side code into a `dist` folder and then serve the dist directory at `http://localhost:3001`

2) Go to `http://localhost:3001` to play the game on the server