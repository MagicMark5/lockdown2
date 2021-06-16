import React, {useState, useEffect} from "react";
import sceneEvents from "../phaser/utils/SceneEvents";

export default function Highscores(props) {
	
  return (
    <ul className="highScores sidetab">
      <li>Highscores</li>
      <li>Bomber007: 23413</li>
      <li>Viper59: 20112</li>
    </ul>
  );
}