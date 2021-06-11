import React from "react";
import Controls from './Controls.jsx';
import GameStats from "./GameStats.jsx";
import Highscores from "./Highscores.jsx";

export default function App(props) {

	return (
		<div className="gameSidebar">
			<GameStats />
			<Highscores />
			<Controls />
		</div>
	);

}
