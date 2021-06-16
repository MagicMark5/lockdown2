import React, {useEffect, useState} from "react";
import axios from "axios";
import Controls from './Controls.jsx';
import GameStats from "./GameStats.jsx";
import Highscores from "./Highscores.jsx";
import Navigation from "./Navigation.jsx";
import LoginNav from "./LoginNav.jsx";

export default function App(props) {
	const [gameSession, setGameSession] = useState({});
	const [highscores, setHighscores] = useState([]);

	// retrieve highscores from db on first render
	// update highscores when post request to insert a game session into db is successful
	// then setGameSession will update gameSession state with new game session
  useEffect(() => {
    if (gameSession) {
      axios.get(`api/users/highscores`)
      .then(res => {
				console.log(res.data);
				// response from server is game sessions array (length 10) sorted by score
        // give sorted array of {} to <Highscores> as props.scores
				setHighscores(res.data);
      })
      .catch(e => {
        console.log(e);
      })
    }
  }, [gameSession])

	return (
		<>
			<Navigation />
			<div className="gameSidebar">
				<GameStats saveGame={setGameSession}/>
				<Highscores scores={highscores}/>
				<Controls />
			</div>
			<LoginNav />
		</>
	);

}
