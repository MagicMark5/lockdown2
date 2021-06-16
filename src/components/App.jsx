import React from "react";
import Controls from './Controls.jsx';
import GameStats from "./GameStats.jsx";
import Highscores from "./Highscores.jsx";
import Navigation from "./Navigation.jsx";
import LoginNav from "./LoginNav.jsx";

export default function App(props) {

	return (
		<>
			<Navigation />
			<div className="gameSidebar">
				<GameStats />
				<Highscores />
				<Controls />
			</div>
			<LoginNav />
		</>
	);

}
