import React, {useState, useEffect} from "react";
import sceneEvents from "../phaser/utils/SceneEvents";

export default function Navigation(props) {
	

  return (
    <nav>
      <ul className="navigation">
        <li>Highscores</li>
        <li>Controls</li>
        <li>Game Stats</li>
      </ul>
    </nav>
  );
}