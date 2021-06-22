// Vendor modules
import Phaser from "phaser";
import React from "react";
import ReactDOM from "react-dom";

// React Application
import App from "./components/App.jsx";

/* -------- Phaser Classes -------- */

// Map Scenes
import Forest from "./phaser/maps/Forest";
import Town from "./phaser/maps/Town";
import Dungeon from "./phaser/maps/Dungeon";
import Boss from "./phaser/maps/Boss";
// Dialogue Scenes
import loadingScene from "./phaser/dialogues/loadingScene";
import startMenu from "./phaser/dialogues/startMenu";
import Intro from "./phaser/dialogues/intro";
import GameOver from "./phaser/dialogues/gameOverScene";
import BossUnlock from "./phaser/dialogues/bossunlockScene";
import Winning from "./phaser/dialogues/winningScene";
import GameScore from "./phaser/dialogues/GameScore";
// Game Utils
import Timer from "./phaser/utils/Timer";
import GameUI from './phaser/utils/GameUI';

// Styles
import "./styles/main.scss";
import "./styles/nav.scss";
import "./styles/sidetabs.scss";

// Phaser Game Configuration

const config = {
  type: Phaser.AUTO, // Will try WebGL renderer if supported, falls back to Canvas
    parent: 'phaser-example',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
      },
    scene: [ // First scene in the array will be entry into the game
      loadingScene, 
      startMenu, 
      Intro, 
      Town, 
      Forest, 
      Dungeon, 
      Boss, 
      BossUnlock, 
      Winning,
      GameScore,
      GameOver, 
      Timer,
      GameUI
    ],
    render: {
      pixelArt: true
    }
  };

// Inserts game into a <canvas> element

const game = new Phaser.Game(config);

// Render the React Application components into div with id of 'root'

ReactDOM.render(
  <App />,
  document.getElementById("root") || document.createElement("div")
);

