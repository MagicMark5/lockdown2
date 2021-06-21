import React, {useEffect, useState} from "react";
import axios from "axios";
import Controls from './Controls.jsx';
import GameStats from "./GameStats.jsx";
import Highscores from "./Highscores.jsx";
import Navigation from "./Navigation.jsx";
import UserForm from "./UserForm.jsx";
import GameTabContainer from "./GameTabContainer.jsx";


export default function App(props) {
	const [gameSession, setGameSession] = useState({});
	const [highscores, setHighscores] = useState([]);
	const [user, setUser] = useState(null);

	// retrieve highscores from db on first render
	// update highscores when post request to insert a game session into db is successful
	// then setGameSession will update gameSession state with new game session
  useEffect(() => {
    if (gameSession) {
      axios.get(`api/users/highscores`)
      .then(res => {
				// response from server is game sessions array (length 10) sorted by score
        // give sorted array of {} to <Highscores> as props.scores
				setHighscores(res.data);
      })
      .catch(e => {
        console.log(e);
      })
    }
  }, [gameSession]);



	return (
		<>
			<Navigation />
			<div className="asideGame">
				<GameStats saveGame={setGameSession}/>
				<GameTabContainer captionText="Top Scores" scores={highscores}/>
				<GameTabContainer captionText="Controls" />
			</div>
			<div className="userForm">
				{/* <UserForm /> */}
			</div>
		</>
	);

}
