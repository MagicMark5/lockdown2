import React, {useState, useEffect} from "react";
import sceneEvents from "../phaser/utils/SceneEvents";

export default function GameStats(props) {
	const [inventory, setInventory] = useState(0);
	const [killCount, setKillCount] = useState(0);
	const [finalScore, setFinalScore] = useState(null);
	const [timer, setTimer] = useState('00:00');
	const [danger, setDanger] = useState(false);

	const score = finalScore || (inventory * 100) + (killCount * 500);

	useEffect(() => {

		sceneEvents.on('sample-collected', (playerInventory) => {		
			setInventory(playerInventory.length);
		});

		sceneEvents.on('zombie-killed', (playerKills) => {
			setKillCount(playerKills);
		});

		sceneEvents.on('player-death', (data) => {
			setInventory(data.inventory.length);
			setKillCount(data.kills);
			setTimer('00:00');
		});

		sceneEvents.on('reset-score', (data) => {
			setInventory(0);
			setKillCount(0);
			setFinalScore(null);
			setTimer('00:00');
		});

		sceneEvents.on('timer', (timer, danger) => {
			// danger is set to true and passed in as true when 60 seconds remain or less
			// timer css color is changed to red when danger is true
			setDanger(danger);
			setTimer(timer);
		});

		// final score is calculated & emitted from
		// phaser/helpers/dataUtils/calculateScore.js at end game
		sceneEvents.on('final-score', (finalScore) => {
			setFinalScore(finalScore);			
		})

	}, []);

	return (
		<ul className="gameStats sidetab">
			<li className={danger ? "danger" : "none"}>Timer: {timer}</li>
			<li>Zombie Kills: {killCount}</li>
			<li>Score: {score} </li>
		</ul>
	)	
}