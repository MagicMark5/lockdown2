import React, {useState} from "react";

export default function Highscores(props) {
  const { scores } = props; // destructure sorted scores []
  const [open, setOpen] = useState(false); 

  const classNames = `highScores sidetab ${open ? "expanded" : "closed"}`;


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
    <table className={classNames}>
      <caption className="box-title" onClick={() => setOpen(!open)}>Top Scores</caption>
      <tbody>
        {scoreRows}
      </tbody>
    </table>
  );
}