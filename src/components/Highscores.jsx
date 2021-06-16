import React from "react";

export default function Highscores(props) {
  const { scores } = props; // destructure sorted scores []

  // parse scores data into table <tr> and <td> with 
  // <th> of avatar, username, score
  const scoreRows = scores.map(game => {
    return (
      <tr>
        <td>{game.username}</td>
        <td>{game.score}</td>
      </tr>
    )
  })
	
  return (
    <table className="highScores sidetab">
      <thead>
        <th className="table-title">Top Scores</th>
      </thead>
      <tbody>
        {scoreRows}
      </tbody>
    </table>
  );
}