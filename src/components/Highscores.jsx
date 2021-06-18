import React from "react";

export default function Highscores(props) {
  const { scores } = props; // destructure sorted scores []

  // parse scores data into table <tr> and <td> with 
  const scoreRows = scores.map(game => {
    return (
      <tr key={game.game_id}>
        <td>{game.username}</td>
        <td>{game.score}</td>
      </tr>
    )
  })
	
  return (
    <table className="highScores sidetab">
      <caption className="box-title">Top Scores</caption>
      <tbody>
        {scoreRows}
      </tbody>
    </table>
  );
}