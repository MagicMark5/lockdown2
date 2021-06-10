# Lockdown (version 2.0.0)

## How to Use 

### Run Front-End code for Development (Independent from Express back-end)

Run `npm run devClient` in the project root directory.

This starts a webpack-dev-server, and will open the application in the browser. The app will hot-reload when any files in the src folder are changed and saved. Note that this is only for the purposes of developing the front-end application and will not have access to any back-end routes or data. 

### Serve the full application (Node/Express back-end & Phaser Front-End)
1) Run `npm run build` to bundle the client-side code into a `dist` folder
2) Run `npm start` to start the express server 
3) Go to `http://localhost:3001`