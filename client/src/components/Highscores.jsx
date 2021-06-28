import React from "react";

export default function Highscores(props) {
  const { scores, fetchHighscores } = props; // destructure sorted scores []

  // Show loading indicator here until highscores have been retrieved ...

  // parse scores data into table <tr> and <td> 
  const scoreRows = scores.map(game => {
    return (
      <tr key={game.game_id}>
        <td>{game.username}</td>
        <td>{game.score}</td>
      </tr>
    )
  })
	
  return (
    <tbody>
      {scoreRows}
    </tbody>
  );
}